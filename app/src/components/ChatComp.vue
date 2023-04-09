<script lang="ts">
import { defineComponent, ref } from "vue";
import useStore from "../services/store";
import AudioWaveComp from "./AudioWaveComp.vue";
import { emitUserMessage } from "@/services/sockets/user.socket";

export default defineComponent({
  components: { AudioWaveComp },
  setup() {
    const store = useStore();

    const sendMessage = () => {
      store.inputMessage(() => emitUserMessage(store.input));
      store.input = "";
    };

    return {
      sendMessage,
      store,
    };
  },
});
</script>
<template>
  <div>
    <form
      id="input-chat"
      class="flex relative justify-center w-full pb-[200px]"
    >
      <textarea
        v-model="store.input"
        class="fixed top-28 py-2 resize hover:border-yellow-500 text-center border border-purple-300/50 bg-black/50 text-white text-xs shadow-inner-sm shadow-yellow-400 min-h-12 p-1 my-2 w-64 rounded-xl z-50"
      >
      <span 
      id="span_input"
      autofocus
        contenteditable></span>
      </textarea>
      <button
        form="input-chat"
        class="bg-white send z-50"
        type="button"
        @click="sendMessage"
      >
        &nbsp;
      </button>
    </form>
    <div class="relative p-2 pt-4 h-screen w-screen">
      <div
        class="message-container"
        v-for="x in store.chat"
        :key="Number(x.timestamp)"
      >
        <div id="Theia" class="theia-message-container">
          <div>
            <div
              class="text-xs text-white ml-2 mt-4 my-2 font-semibold rounded-xl bg-black/30 rounded-bl-none w-[280px] lg:w-[440px] shadow-inner shadow-purple-400 border-b-3 border-purple-400"
            >
              <div
                class="text-xs text-white p-2 px-8 font-semibold rounded-xl bg-black/30 rounded-bl-none w-[280px] lg:w-[440px] shadow-sm shadow-purple-400 border border-yellow-400/30"
              >
                <AudioWaveComp class="max-h-[54px]" />
                <div class="p-4">
                  {{
                    !x.theia.text || x.theia.text === ""
                      ? "Hello, Im Theia your AI assistant. Im here to help you in anything you need. Im a advance trained NLP model with also access to google, wikipedia, youtube, spotify, gmail, calendar, and much more. I can make your life easier. How can I help you?"
                      : x.theia.text
                  }}
                </div>
              </div>
            </div>
            <div class="flex justify-start text-xs mb-4 pl-4">
              <div class="text-center flex align-bottom justify-center">
                <img
                  class="w-10 h-10 rounded-full ml-1 mr-2 m-auto border border-gray-500/50"
                  :src="require('./../assets/img/png/theia.png')"
                />
              </div>
              <div
                class="text-left pl-2 font-bold opacity-50 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-yellow-400"
              >
                Theia
              </div>
              <div class="mr-4 text-gray-500">
                {{ x.theia.datetime }}
              </div>
              <div class="mr-4 text-gray-500">
                {{ x.theia.computed_in }} sec
              </div>
            </div>
          </div>
        </div>
        <div id="User" class="user-message-container" v-if="x.user">
          <div>
            <div
              class="p-2 px-8 my-2 text-xs text-white font-semibold rounded-xl bg-black/30 rounded-br-none w-[280px] lg:w-[440px] shadow-inner shadow-yellow-400"
            >
              <AudioWaveComp class="max-h-[54px]" />
              {{ x.user.text }}
            </div>
            <div class="flex justify-end text-xs mb-4 pl-4">
              <div class="mr-4 text-gray-500">
                {{ x.user.datetime }}
              </div>
              <div
                class="text-right pr-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-yellow-400"
              >
                {{ store.username }}
              </div>
              <div class="text-center flex align-bottom justify-center">
                <img
                  class="w-10 h-10 rounded-full ml-1 mr-2 m-auto mb-2"
                  :src="require('./../assets/img/png/profile.png')"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
span:active {
  outline: none !important;
  border: rgb(249, 17, 249) rple !important;
}
span:focus {
  outline: none !important;
  border: none !important;
}
.send {
  position: fixed;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  top: 8.7rem;
  left: 30.4rem;
}
.message-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.theia-message-container {
  align-self: flex-start;
  margin-left: 0.1rem;
}

.user-message-container {
  align-self: flex-end;
  margin-right: 1rem;
  padding-bottom: -5rem;
}
</style>
