<script lang="ts">
import { defineComponent } from "vue";
import useStore from "../services/store";

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
  <div
    class="fixed top-0 bottom-0 h-screen w-screen"
    :class="store.dark ? 'bg-black text-white/90' : 'bg-white text-black/90'"
  >
    <div class="flex flex-wrap justify-center items-center h-screen w-screen">
      <div id="account" class="w-96 h-full">
        <h1>ACCOUNT</h1>
      </div>
      <div id="board">
        <h1>BOARD</h1>
      </div>
      <div id="game">
        <h1>GAME</h1>
      </div>
    </div>
  </div>
</template>
<style scoped>
h1 {
  font-size: 40px;
}
</style>
