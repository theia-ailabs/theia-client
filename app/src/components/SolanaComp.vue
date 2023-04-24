<script lang="ts">
import { defineComponent } from "vue";
import WalletConnections from "./modules/wallets/solana/WalletConnections.vue";
import useStore from "../services/store";

export default defineComponent({
  components: {
    WalletConnections,
  },
  setup() {
    const store = useStore();
    return {
      store,
    };
  },
});
</script>
<template>
  <div
    class="flex flex-wrap justify-center items-center h-screen w-screen"
    :class="
      store.dark ? 'bg-black/90 text-white/90' : 'bg-white/90 text-black/90'
    "
  >
    <div class="flex flex-wrap justify-center">
      <div class="w-full flex flex-wrap justify-start">
        <WalletConnections :dark="store.dark" />
      </div>
      <div class="w-96 mt-24">Solana Wallets</div>
      <div class="w-96 mt-24">Blockchain Terminal</div>
    </div>
  </div>
</template>
