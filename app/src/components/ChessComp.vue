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
    class="fixed h-screen w-screen flex flex-col justify-center items-center"
    :class="store.dark ? 'bg-black' : 'bg-white'"
  >
    <div id="account">
      <button @click="connect">LICHESS ACCOUNT</button>
    </div>
    <div id="board">
      <button @click="connect">LICHESS ACCOUNT</button>
    </div>
    <div id="game">
      <button @click="connect">LICHESS ACCOUNT</button>
    </div>
  </div>
</template>
<style scoped>
h1 {
  font-size: 40px;
}
</style>
