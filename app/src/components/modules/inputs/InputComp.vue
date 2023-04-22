<script lang="ts">
import { defineComponent, ref } from "vue";
import { theiaRes } from "../../../services/sockets/theia.socket";
import useStore from "../../../services/store";

export default defineComponent({
  setup() {
    const store = useStore();
    theiaRes(store);
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
          store.inputMessage();
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

    return {
      store,
      userInput,
      handleKeyboardEvent,
    };
  },
  data() {
    return {
      sendImg: require("../../../assets/img/ico/send.png"),
    };
  },
});
</script>
<template>
  <form
    class="z-50 fixed bottom-20 flex flex-wrap justify-center m-2 w-full pr-12 px-2"
    :class="store.showChat ? 'block' : 'hidden'"
  >
    <textarea
      autofocus
      v-model="store.input"
      class="w-[200px] sm:w-[280] md:w-[320px] lg:w-[360px] ml-8 h-9 p-1 my-2 py-2 text-center border text-xs shadow-inner rounded-xl z-50 text-transparent bg-clip-text bg-gradient-to-r"
      :class="[
        store.dark ? 'bg-black' : 'bg-white',
        `from-${store.primaryColor} to-${store.secondaryColor}`,
        `border-${store.primaryColor}`,
        `shadow-${store.secondaryColor}`,
        `hover:border-${store.secondaryColor}`,
        `hover:shadow-${store.primaryColor}`,
      ]"
    >
    </textarea>
    <div class="m-2" :class="store.input ? 'block' : 'hidden'">
      <button
        class="p-1 text-xs rounded-xl border shadow-sm"
        :class="[
          store.dark
            ? 'bg-black/50 text-white/80'
            : 'bg-white/50 text-black/80',
          `border-${store.primaryColor}`,
          `shadow-${store.secondaryColor}`,
          `hover:border-${store.secondaryColor}`,
          `hover:shadow-${store.primaryColor}`,
        ]"
        @click="store.inputMessage()"
      >
        <img :src="sendImg" alt="Send button" class="w-6 hover:animate-spin" />
      </button>
    </div>
  </form>
</template>
