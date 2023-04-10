<script lang="ts">
import { defineComponent } from "vue";
import useStore from "../services/store";

export default defineComponent({
  setup() {
    const store = useStore();
    return {
      store,
    };
  },
});
</script>
<template>
  <form class="flex flex-wrap justify-center w-full">
    <textarea
      v-model="store.input"
      class="p-1 my-2 py-2 text-center border border-purple-300/50 bg-black/50 text-white text-xs shadow-inner shadow-yellow-400/50 rounded-xl z-50 hover:border-purple-400 hover:shadow-yellow-400/80"
    >
    </textarea>
    <div class="px-2 mt-4">
      <button
        class="rotate-90 p-2 text-xs rounded-full border text-white/50 border-purple-400/30 shadow-sm shadow-yellow-400/50 hover:text-white hover:border-purple-400 hover:shadow-yellow-400"
        @click="store.inputMessage()"
      >
        Send
      </button>
    </div>
  </form>
</template>
