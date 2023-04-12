<script lang="ts">
import { defineComponent } from "vue";
import useStore from "../services/store";
import AudioWaveComp from "./modules/waves/AudioWaveComp.vue";

export default defineComponent({
  components: { AudioWaveComp },
  setup() {
    const store = useStore();
    return {
      store,
    };
  },
  data() {
    return {
      loader: require("../assets/img/gif/loading.gif"),
      userPFP: require("../assets/img/png/profile.png"),
      theiaPFP: require("../assets/img/gif/brain.gif"),
    };
  },
});
</script>
<template>
  <div>
    <div class="relative pl-2 pt-4 pb-8 mb-4 h-screen w-screen">
      <div class="z-50" v-if="store.showChat">
        <div class="z-30 absolute h-screen w-screen bg-red-500"></div>
        <div
          class="z-50 relative flex flex-wrap align-top top-14"
          v-for="x in store.chat"
          :key="x.user.datetime"
        >
          <div
            id="Theia"
            class="relative align-top flex justify-start w-full -mb-4"
          >
            <div>
              <div
                class="text-xs text-white ml-16 -mb-2 mt-4 my-2 font-semibold rounded-xl bg-black/30 rounded-bl-none w-[250px] sm:w-[320px] lg:w-[540px] shadow-inner shadow-purple-400 border-b-3 border-purple-400"
              >
                <div
                  class="text-xs text-white p-2 px-8 font-semibold rounded-xl bg-black/30 rounded-bl-none w-[250px] sm:w-[320px] lg:w-[540px] shadow-sm shadow-purple-400 border border-yellow-400/30"
                >
                  <div
                    v-if="x.theia.text.includes('Thinking')"
                    class="flex w-full justify-center"
                  >
                    <img :src="loader" alt="Theia is thinking" class="w-56" />
                  </div>
                  <div v-else>
                    <AudioWaveComp />
                  </div>
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
                    class="w-10 h-10 rounded-full ml-1 mr-2 m-auto border border-purple-500/50 shadow-sm shadow-yellow-500"
                    :src="theiaPFP"
                  />
                </div>
                <div
                  class="text-left pl-2 mt-4 font-bold opacity-50 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-yellow-400"
                >
                  Theia
                </div>
                <div class="mr-4 mt-4 text-gray-500">
                  {{ x.theia.datetime }}
                </div>
                <div class="mr-4 mt-4 text-gray-500">
                  {{ x.theia.computed_in }} sec
                </div>
              </div>
            </div>
          </div>
          <div id="User" class="flex justify-end w-full -mb-4">
            <div>
              <div
                class="mr-12 my-2 mt-4 -mb-1 text-xs text-white text-semibold rounded-xl bg-black/30 rounded-br-none w-[250px] sm:w-[320px] lg:w-[540px] shadow-inner shadow-yellow-400"
              >
                <div class="p-2 px-8">
                  <AudioWaveComp />
                  {{ x.user.text }}
                </div>
              </div>
              <div class="flex justify-end text-xs mb-4 pl-4">
                <div class="mr-4 mt-2 text-gray-500">
                  {{ x.user.datetime }}
                </div>
                <div
                  class="text-right pr-2 mt-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-yellow-400"
                >
                  {{ store.username }}
                </div>
                <div class="text-center flex align-bottom justify-center">
                  <img
                    class="w-10 h-10 rounded-full ml-1 mr-2 m-auto mb-2"
                    :src="userPFP"
                    alt="User profile picture"
                  />
                </div>
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
</style>
