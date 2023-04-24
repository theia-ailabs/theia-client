<script lang="ts">
import {
  computed,
  defineComponent,
  nextTick,
  Ref,
  ref,
  toRefs,
  watch,
} from "vue";
import { WalletName, WalletReadyState } from "@solana/wallet-adapter-base";
import { onClickOutside, onKeyStroke, useScrollLock } from "@vueuse/core";
import type { Wallet } from "../../../../services/web3/solana/wallets/createWalletStore";
import { useWallet } from "../../../../services/web3/solana/wallets/useWallet";
import WalletIcon from "./WalletIcon.vue";
import useStore from "../../../../services/store";

type WalletModalProviderRawBindings = WalletModelProviderScope & {
  scope: WalletModelProviderScope;
};

type WalletModelProviderScope = {
  dark: Ref<boolean>;
  logo: Ref<string | undefined>;
  hasLogo: Ref<boolean>;
  featured: Ref<number>;
  container: Ref<string>;
  modalPanel: Ref<HTMLElement | null>;
  modalOpened: Ref<boolean>;
  openModal: () => void;
  closeModal: () => void;
  expandedWallets: Ref<boolean>;
  walletsToDisplay: Ref<Wallet[]>;
  featuredWallets: Ref<Wallet[]>;
  hiddenWallets: Ref<Wallet[]>;
  selectWallet: (name: WalletName) => void;
};

export default defineComponent({
  components: {
    WalletIcon,
  },
  props: {
    featured: { type: Number, default: 17 },
    container: { type: String, default: "body" },
    logo: String,
    dark: Boolean,
  },
  setup(this: void, props, { slots }): WalletModalProviderRawBindings {
    const store = useStore();
    const { featured, container, logo, dark } = toRefs(props);
    const modalPanel = ref(null) as Ref<HTMLElement | null>;
    const modalOpened = ref(false);
    const openModal = () => (modalOpened.value = true);
    const closeModal = () => (modalOpened.value = false);
    const hasLogo = computed(() => !!slots.logo || !!logo.value);

    const { wallets, select: selectWallet } = useWallet();
    const orderedWallets = computed(() => {
      const installed: Wallet[] = [];
      const notDetected: Wallet[] = [];
      const loadable: Wallet[] = [];

      wallets.value.forEach((wallet) => {
        if (wallet.readyState === WalletReadyState.NotDetected) {
          notDetected.push(wallet);
        } else if (wallet.readyState === WalletReadyState.Loadable) {
          loadable.push(wallet);
        } else if (wallet.readyState === WalletReadyState.Installed) {
          installed.push(wallet);
        }
      });

      return [...installed, ...loadable, ...notDetected];
    });

    const expandedWallets = ref(false);
    const featuredWallets = computed(() =>
      orderedWallets.value.slice(0, featured.value)
    );
    const hiddenWallets = computed(() =>
      orderedWallets.value.slice(featured.value)
    );
    const walletsToDisplay = computed(() =>
      expandedWallets.value ? wallets.value : featuredWallets.value
    );

    // Close the modal when clicking outside of it or when pressing Escape.
    onClickOutside(modalPanel, closeModal);
    onKeyStroke("Escape", closeModal);

    // Ensures pressing Tab backwards and forwards stays within the modal.
    onKeyStroke("Tab", (event: KeyboardEvent) => {
      const focusableElements =
        modalPanel.value?.querySelectorAll("button") ?? [];
      const firstElement = focusableElements?.[0];
      const lastElement = focusableElements?.[focusableElements.length - 1];

      if (
        event.shiftKey &&
        document.activeElement === firstElement &&
        lastElement
      ) {
        lastElement.focus();
        event.preventDefault();
      } else if (
        !event.shiftKey &&
        document.activeElement === lastElement &&
        firstElement
      ) {
        firstElement.focus();
        event.preventDefault();
      }
    });

    // Bring focus inside the modal when it opens.
    watch(modalOpened, (isOpened) => {
      if (!isOpened) return;
      nextTick(() =>
        modalPanel.value?.querySelectorAll("button")?.[0]?.focus()
      );
    });

    // Lock the body scroll when the modal opens.
    const scrollLock = useScrollLock(document.body);
    watch(modalOpened, (isOpened) => (scrollLock.value = isOpened));

    // Define the bindings given to scoped slots.
    const scope = {
      store,
      dark,
      logo,
      hasLogo,
      featured,
      container,
      modalPanel,
      modalOpened,
      openModal,
      closeModal,
      expandedWallets,
      walletsToDisplay,
      featuredWallets,
      hiddenWallets,
      selectWallet,
    };

    return {
      scope,
      ...scope,
    };
  },
});
</script>
<template>
  <div class="w-full h-screen overflow-y-scroll mt-20">
    <div class="bg-transparent" :class="{ 'flex flex-wrap': !hasLogo }">
      <div class="" v-if="hasLogo">
        <img
          class="h-8 w-8"
          width="80"
          height="60"
          :src="logo"
          alt="wallet logo"
        />
      </div>
      <ul class="w-96">
        <li
          class="flex flex-wrap"
          v-for="wallet in walletsToDisplay"
          :key="wallet.adapter.name"
          @click="
            selectWallet(wallet.adapter.name);
            closeModal();
          "
        >
          <button class="flex flex-wrap">
            <wallet-icon class="p-2 m-2" :wallet="wallet"></wallet-icon>
            <p class="p-2 m-2" v-text="wallet.adapter.name"></p>
            <div
              v-if="wallet.readyState === 'Installed'"
              class="p-2 m-2"
              :class="`color-${store.primaryColor}`"
            >
              Detected
            </div>
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
.swv-modal-logo {
  max-width: 100%;
  max-height: 100px;
}
</style>
