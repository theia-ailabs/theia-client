<script lang="ts">
import { defineComponent } from "vue";
import useStore from "../services/store";
import AudioWaveComp from "./AudioWaveComp.vue";

export default defineComponent({
  components: { AudioWaveComp },
  setup() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const store = useStore();
    return {
      store,
    };
  },
});
</script>
<template>
  <div>
    <div class="relative p-2 pt-4 h-screen w-screen">
      <div
        class="relative flex align-top top-0"
        v-for="x in store.chat"
        :key="x.user.datetime"
      >
        <div
          id="Theia"
          class="relative align-top flex justify-start w-full -mb-4"
        >
          <div>
            <div
              class="text-xs text-white ml-12 mt-4 my-2 font-semibold rounded-xl bg-black/30 rounded-bl-none w-[280px] lg:w-[440px] shadow-inner shadow-purple-400 border-b-3 border-purple-400"
            >
              <div
                class="text-xs text-white p-2 px-8 font-semibold rounded-xl bg-black/30 rounded-bl-none w-[280px] lg:w-[440px] shadow-sm shadow-purple-400 border border-yellow-400/30"
              >
                <AudioWaveComp v-bind:audioUrl="'sounds/voice-1.mp3'" />
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
                  src="./../assets/img/png/theia.png"
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
        <div id="User" class="flex justify-end w-full -mb-4">
          <div>
            <div
              class="p-2 px-8 my-2 text-xs text-white text-semibold rounded-xl bg-black/30 rounded-br-none w-[280px] lg:w-[440px] shadow-inner shadow-yellow-400"
            >
              <AudioWaveComp v-bind:audioUrl="'../assets/sounds/voice-1.mp3'" />
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
            </div>
          </div>
          <div class="text-center flex align-bottom justify-center">
            <img
              class="w-10 h-10 rounded-full ml-1 mr-2 m-auto mb-2"
              src="./../assets/img/png/profile.png"
            />
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
</style>
