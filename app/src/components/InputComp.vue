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
  data() {
    return {
      sendImg: require("../assets/img/ico/send.png"),
    };
  },
});
</script>
<template>
  <form
    class="flex flex-wrap justify-center m-2 w-full"
    :class="store.showChat ? 'block' : 'hidden'"
  >
    <textarea
      v-model="store.input"
      class="w-[280px] ml-8 h-9 p-1 my-2 py-2 text-center border border-purple-300/50 bg-black/50 text-white text-xs shadow-inner shadow-yellow-400/20 rounded-xl z-50 hover:border-purple-400 hover:shadow-yellow-400/80"
    >
    </textarea>
    <div class="m-2">
      <button
        class="p-1 text-xs rounded-xl border text-white/80 border-purple-400/50 shadow-sm shadow-yellow-400/70 hover:text-white hover:border-purple-400 hover:shadow-yellow-400"
        @click="store.inputMessage()"
      >
        <img :src="sendImg" alt="Send button" class="w-7" />
      </button>
    </div>
  </form>
</template>
