<script lang="ts">
import { defineComponent } from "vue";
import WalletConnections from "./modules/wallets/solana/WalletConnections.vue";
import useStore from "@/services/store";

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
    class="z-40 h-screen w-screen flex flex-wrap justify-center items-center"
    :class="
      store.dark ? 'bg-white/10 text-white/90' : 'bg-black/10 text-black/90'
    "
  >
    <div class="flex flex-wrap justify-center">
      <div class="w-96 flex flex-wrap justify-start">
        <div>Solana Wallets</div>
        <WalletConnections :dark="store.dark" />
      </div>
      <div class="w-96">Solana Wallets</div>
      <div class="w-96">Blockchain Terminal</div>
    </div>
  </div>
</template>
