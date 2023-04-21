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
    class="flex flex-wrap justify-center items-center h-screen w-screen"
    :class="store.dark ? 'bg-black text-white/90' : 'bg-white text-black/90'"
  >
    <div id="account" class="w-96 mx-4 p-4">
      <h1>ACCOUNT</h1>
    </div>
    <div id="board" class="w-96 mx-4 p-4">
      <h1>BOARD</h1>
      <div class="grid col-8 row-8">
        <div class="bg-white w-full h-full">1</div>
        <div class="bg-black w-full h-full">1</div>
        <div class="bg-white w-full h-full">1</div>
        <div class="bg-white w-full h-full">1</div>
        <div class="bg-white w-full h-full">1</div>
        <div class="bg-white w-full h-full">1</div>
        <div class="bg-white w-full h-full">1</div>
        <div class="bg-white w-full h-full">1</div>
        <div class="bg-white w-full h-full">1</div>
        <div class="bg-white w-full h-full">1</div>
        <div class="bg-white w-full h-full">1</div>
        <div class="bg-white w-full h-full">1</div>
        <div class="bg-white w-full h-full">1</div>
        <div class="bg-white w-full h-full">1</div>
        <div class="bg-white w-full h-full">1</div>
      </div>
    </div>
    <div id="game" class="w-96 mx-4 p-4">
      <h1>GAME</h1>
    </div>
  </div>
</template>
<style scoped>
h1 {
  font-size: 40px;
}
</style>
