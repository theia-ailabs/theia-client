<script lang="ts">
import { defineComponent, PropType, toRefs } from "vue";
import { Wallet } from "../../../../services/web3/solana/wallets/createWalletStore";

export default defineComponent({
  props: {
    wallet: Object as PropType<Wallet>,
  },
  setup(props) {
    return toRefs(props);
  },
});
</script>
<template>
  <i class="swv-button-icon h-8 w-8">
    <img
      v-if="wallet"
      :src="wallet.adapter.icon"
      :alt="`${wallet.adapter.name} icon`"
      class="w-16"
    />
  </i>
</template>
