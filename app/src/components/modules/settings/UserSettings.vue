<script lang="ts">
import { defineComponent } from "vue";
import useStore from "../../../services/store";

export default defineComponent({
  setup() {
    const store = useStore();
    function connect(): void {
      store.connect();
    }
    return {
      store,
      connect,
    };
  },
});
</script>
<template>
  <div class="flex" :class="store.dark ? 'bg-black' : 'bg-white'">
    <button @click="connect">Connect</button>
  </div>
</template>
<style scoped>
h1 {
  font-size: 40px;
}
</style>
