<script lang="ts">
import { computed, defineComponent, ref, toRefs, watchEffect } from "vue";
import { onClickOutside, useClipboard } from "@vueuse/core";
import { useWallet } from "../../../services/wallets/useWallet";
import WalletConnectButton from "./WalletConnectButton.vue";
import WalletIcon from "./WalletIcon.vue";
import WalletModalProvider from "./WalletModalProvider.vue";
import { balanceBEEN, balanceSOL, balanceUSDC } from '../../../services/wallets/getBalances';
import { PublicKey } from '@solana/web3.js';
import { formatNumber } from '../../../utils';
import { useStore } from '../../../services/store';
import { 
  emitConnection, 
  emitDisconnection
} from "../../../services/sockets/user.socket";
import { getUserInfo } from "../../../services/sockets/user.socket";

export default defineComponent({
  components: {
    WalletConnectButton,
    WalletIcon,
    WalletModalProvider
  },
  props: {
    login: { type: Boolean, default: false},
    featured: { type: Number, default: 1 },
    container: { type: String, default: "body" },
    logo: String,
    dark: Boolean,
  },
  setup(props) {

    const store = useStore();

    const { featured, container, logo, dark } = toRefs(props);
    const { publicKey, wallet, disconnect } = useWallet();
    
    const dropdownPanel = ref<HTMLElement>();
    const dropdownOpened = ref(false);
    const openDropdown = () => {
      dropdownOpened.value = true;
    };
    const closeDropdown = () => {
      dropdownOpened.value = false;
    };
    onClickOutside(dropdownPanel, closeDropdown);
    
    const publicKeyBase58 = computed(() => publicKey.value?.toBase58());
    const publicKeyTrimmed = computed(() => {
      if (!wallet.value || !publicKeyBase58.value) return null;
      if ( props.login ) connectBtn();
      return (
        publicKeyBase58.value.slice(0, 4) +
        ".." +
        publicKeyBase58.value.slice(-4)
      );
    });

    const connectBtn = () => {
      if ( props.login ) {
        if (wallet.value && publicKeyBase58.value) {
          store.dispatch('switchWelcome', false);
          emitConnection(publicKeyBase58.value as string);
          store.dispatch('dispatchPubkey', publicKeyBase58.value);
          getUserInfo(publicKeyBase58.value); // Send socket to retreive user profile

        }
      }
    };

    const disconnectBtn = () => {
      store.dispatch('switchWelcome', true);
      emitDisconnection(publicKeyBase58.value as string);
    };
      
    const walletSOL = ref(0);
    const walletBEEN = ref(0);
    const walletUSDC = ref(0);
    const getSOL = async () => {
      walletSOL.value = await balanceSOL(publicKey.value as PublicKey)
    }
    const getBEEN = async () => {
      walletBEEN.value = await balanceBEEN(publicKey.value as PublicKey)
    }
    const getUSDC = async () => {
      walletUSDC.value = await balanceUSDC(publicKey.value as PublicKey)
    }
    const updateBalances = () => {
      watchEffect( async () => {
        await getSOL();
        await getBEEN();
        await getUSDC();
      })
    }; updateBalances();

    const currency = ref('SOL');
    const selectCurrency = (ccy: string) => {
      currency.value = ccy;
      updateBalances();
    }

    const {
      copy,
      copied: addressCopied,
      isSupported: canCopy,
    } = useClipboard();
    const copyAddress = () =>
      publicKeyBase58.value && copy(publicKeyBase58.value);

    // Define the bindings given to scoped slots.
    const scope = {
      featured,
      container,
      logo,
      dark,
      wallet,
      publicKey,
      publicKeyTrimmed,
      publicKeyBase58,
      canCopy,
      addressCopied,
      dropdownPanel,
      dropdownOpened,
      openDropdown,
      closeDropdown,
      formatNumber,
      walletSOL,
      walletBEEN,
      walletUSDC,
      getSOL,
      getBEEN,
      getUSDC,
      selectCurrency,
      currency,
      copyAddress,
      disconnect,
      disconnectBtn,
    };

    return {
      scope,
      ...scope,
    };
  },
  data () {
    return {
      daoLogo: require("../../../assets/img/logo.png"),
    }
  }
});
</script>

<template>
  <wallet-modal-provider
    :featured="featured"
    :container="container"
    :logo="logo"
    :dark="dark"
  >
    <template #default="modalScope">
      <slot v-bind="{ ...modalScope, ...scope }">
        <button
          v-if="!wallet"
          class="swv-button swv-button-trigger min-w-[140px]"
          @click="modalScope.openModal"
        >
          <img :src="daoLogo" class="h-8 w-8 -ml-2 mr-2 rounded-full"/> Select Wallet
        </button>
        <wallet-connect-button
          v-else-if="!publicKeyBase58"
        ></wallet-connect-button>
        <div v-else class="swv-dropdown">
          <slot name="dropdown-button" v-bind="{ ...modalScope, ...scope }">
            <button
              class="swv-button swv-button-trigger"
              :style="{ pointerEvents: dropdownOpened ? 'none' : 'auto' }"
              :aria-expanded="dropdownOpened"
              :title="publicKeyBase58"
              @click="openDropdown"
            >
              <wallet-icon :wallet="wallet"></wallet-icon>
              <p v-text="publicKeyTrimmed"></p>
            </button>
          </slot>
          <slot name="dropdown" v-bind="{ ...modalScope, ...scope }">
            <ul
              aria-label="dropdown-list"
              class="swv-dropdown-list"
              :class="{ 'swv-dropdown-list-active': dropdownOpened }"
              ref="dropdownPanel"
              role="menu"
            >
              <slot name="dropdown-list" v-bind="{ ...modalScope, ...scope }">
                <li
                  @click="selectCurrency('BEEN')"
                  :class="currency === 'BEEN' ? 'bg-green-500 border border-green-500' : 'bg-transparent'"
                  class="swv-dropdown-list-item"
                  role="menuitem"
                >
                  {{`${formatNumber(walletBEEN)} BEEN`}}
                </li>
                <li
                  @click="selectCurrency('BEENZ')"
                  :class="currency === 'BEENZ' ? 'bg-green-500 border border-green-500' : 'bg-transparent'"
                  class="swv-dropdown-list-item"
                  role="menuitem"
                >
                  {{`${formatNumber(0)} BEENZ`}}
                </li>
                <li
                  @click="selectCurrency('SOL')"
                  :class="currency === 'SOL' ? 'bg-green-500 border border-green-500' : 'bg-transparent'"
                  class="swv-dropdown-list-item"
                  role="menuitem"
                >
                {{`${formatNumber(walletSOL)} SOL`}}
                </li>
                <li
                  @click="selectCurrency('USDC')"
                  :class="currency === 'USDC' ? 'bg-green-500 border border-green-500' : 'bg-transparent'"
                  class="swv-dropdown-list-item"
                  role="menuitem"
                >
                  {{`${formatNumber(walletUSDC)} USDC`}}
                </li>
                <li
                  v-if="canCopy"
                  @click="copyAddress"
                  class="swv-dropdown-list-item"
                  role="menuitem"
                >
                  {{ addressCopied ? "Copied!" : "Copy address" }}
                </li>
                <li
                  @click="
                    modalScope.openModal();
                    closeDropdown();
                  "
                  class="swv-dropdown-list-item"
                  role="menuitem"
                >
                  Change wallet
                </li>
                <li
                  @click="
                    disconnect();
                    closeDropdown();
                    disconnectBtn();
                  "
                  class="swv-dropdown-list-item"
                  role="menuitem"
                >
                  Disconnect
                </li>
              </slot>
            </ul>
          </slot>
        </div>
      </slot>
    </template>

    <!-- Enable modal overrides. -->
    <template #overlay="modalScope">
      <slot name="modal-overlay" v-bind="{ ...modalScope, ...scope }"></slot>
    </template>
    <template #modal="modalScope">
      <slot name="modal" v-bind="{ ...modalScope, ...scope }"></slot>
    </template>
  </wallet-modal-provider>
</template>
