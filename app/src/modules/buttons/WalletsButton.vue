<script lang="ts">
import useStore from "../../services/store";
import WalletMultiButton from "../wallets/WalletMultiButton.vue";

export default {
  setup() {
    const store = useStore();
    return {
      store,
    };
  },
  data() {
    return {
      isOpen: true,
      landing_url: "https://beenzer.app",
      pfp: require("../../../assets/ico/profile.png"),
      logo: require("../../../assets/img/logo.png"),
    };
  },
  components: {
    WalletMultiButton,
  },
};
</script>
<template>
  <header
    class="px-4 py-4 sm:py-6 px-auto xl:px-12 2xl:px-24 lg:flex justify-between"
  >
    <div class="flex">
      <!-- Logo Area -->
      <div class="flex flex-wrap justify-between">
        <div class="p-0">
          <a
            href="beenzer.app"
            target="_blank"
            class="flex justify-center align-middle sm:mr-2"
          >
            <img
              :src="logo"
              alt="beenzer-logo"
              class="rounded-full w-12 h-12"
            />
            <div
              v-if="store.welcome"
              class="ml-6 mt-1 font-bold sm:text-4xl text-xl uppercase text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-yellow-400"
            >
              Beenzer DAO
            </div>
          </a>
        </div>
        <!-- Wallet Connect -->
        <div
          class="ml-4 flex justify-center"
          :class="store.welcome ? 'hidden' : 'block'"
        >
          <wallet-multi-button :dark="store.dark"></wallet-multi-button>
        </div>
        <!-- Profile -->
        <div
          class="text-center font-semibold text-sm ml-4"
          v-if="store.username"
        >
          <router-link
            class="flex justify-center text-left sm:ml-2"
            to="/profile"
          >
            <img class="w-12 h-12 rounded-full mr-4" :src="pfp" alt="pfp" />
            <div class="mt-1 hidden sm:block">
              <span class="text-md">Welcome,</span><br />@{{ store.username }}
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <nav
      :class="isOpen ? 'block' : 'hidden'"
      class="flex flex-wrap justify-center"
    >
      <nav-menu class="m-4 mt-8 lg:m-0" />
    </nav>
    <!-- Toogle nav -->
    <div class="lg:hidden absolute right-4 top-6">
      <button
        @click="isOpen = !isOpen"
        class="block"
        :class="store.dark ? 'text-gray-200' : 'text-gray-500'"
      >
        <svg
          v-if="!isOpen"
          class="h-8 w-8 fill-current text-green-600"
          viewBox="0 0 24 24"
        >
          <path
            fill-rule="evenodd"
            d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
          />
        </svg>
        <svg
          v-if="isOpen"
          class="h-8 w-8 fill-current text-green-600"
          viewBox="0 0 24 24"
        >
          <path
            fill-rule="evenodd"
            d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
          />
        </svg>
      </button>
    </div>
  </header>
</template>
