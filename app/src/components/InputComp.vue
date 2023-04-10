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
  <form id="input-chat" class="flex relative justify-center w-full">
    <textarea
      v-model="store.input"
      class="fixed top-28 py-2 resize hover:border-yellow-500 text-center border border-purple-300/50 bg-black/50 text-white text-xs shadow-inner-sm shadow-yellow-400 min-h-12 p-1 my-2 w-64 rounded-xl z-50"
    >
        <span 
        id="span_input"
        autofocus
          contenteditable></span>
        </textarea
    >
    <button
      form="input-chat"
      class="bg-white send z-50"
      type="button"
      @click="store.inputMessage()"
    >
      &nbsp;
    </button>
  </form>
</template>
<style scoped>
h1 {
  font-size: 40px;
}
</style>
