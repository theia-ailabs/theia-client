<script lang="ts">
import { defineComponent, ref } from "vue";
import useStore from "../services/store";

export default defineComponent({
  setup() {
    const store = useStore();
    const userInput = ref("");
    let send = false;
    const placeholder = "Your Placeholder";

    const handleKeyboardEvent = (event: any) => {
      if (userInput.value === placeholder) {
        userInput.value = "";
      }
      if (event.key === "Enter") {
        if (send) {
          console.log(userInput.value);
          inputMessage();
        }
        send = false;
        return;
      }
      if (
        event.key === "Control" ||
        event.key === "Shift" ||
        event.key === "Alt" ||
        event.key === "Meta"
      ) {
        send = true;
        return;
      } else {
        send = false;
      }
    };

    const inputMessage = () => {
      // Code for sending the message
    };

    return {
      store,
      userInput,
      inputMessage,
      handleKeyboardEvent,
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
    class="flex flex-wrap justify-center m-2 w-full pr-12"
    :class="store.showChat ? 'block' : 'hidden'"
  >
    <textarea
      autofocus
      v-model="store.input"
      class="w-[240px] ml-8 h-9 p-1 my-2 py-2 text-center border border-purple-300/50 bg-black/50 text-white text-xs shadow-inner shadow-yellow-400/20 rounded-xl z-50 hover:border-purple-400 hover:shadow-yellow-400/80"
    >
    </textarea>
    <div class="m-2" :class="store.input ? 'block' : 'hidden'">
      <button
        class="p-1 text-xs rounded-xl border text-white/80 border-purple-400/50 shadow-sm shadow-yellow-400/70 hover:text-white hover:border-purple-400 hover:shadow-yellow-400"
        @click="store.inputMessage()"
      >
        <img :src="sendImg" alt="Send button" class="w-6" />
      </button>
    </div>
  </form>
</template>
