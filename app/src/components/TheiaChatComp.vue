<script lang="ts">
import { defineComponent } from "vue";
import AudioPlayer from "./AudioPlayerComp.vue";
import ProgressBarComp from "./modules/loaders/ProgressBarComp.vue";
import InputComp from "./modules/inputs/InputComp.vue";
import useStore from "../services/store";

export default defineComponent({
  components: {
    AudioPlayer,
    ProgressBarComp,
    InputComp,
  },
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
      audioTest: require("../assets/sounds/voice-1.mp3"),
    };
  },
});
</script>
<template>
  <div :class="store.dark ? 'bg-black text-white' : 'bg-white text-black'">
    <div class="relative overflow-scroll pt-4 pb-8 mb-4 h-screen w-screen">
      <div class="z-50" v-if="store.showChat">
        <div class="z-30 absolute h-full w-screen"></div>
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
                class="text-xs ml-16 -mb-2 mt-4 my-2 font-semibold rounded-full rounded-bl-none w-[250px] sm:w-[320px] lg:w-[540px] shadow-inner border-b-3"
                :class="[
                  store.dark ? 'bg-black/50' : 'bg-white/50',
                  `shadow-${store.primaryColor}`,
                  `border-${store.secondaryColor}`,
                ]"
              >
                <div
                  class="text-xs p-2 px-8 font-semibold rounded-full rounded-bl-none w-[250px] sm:w-[320px] lg:w-[540px] shadow-sm border"
                  :class="[
                    `shadow-${store.primaryColor}`,
                    `border-${store.secondaryColor}`,
                  ]"
                >
                  <div
                    v-if="!x.theia.audio"
                    class="flex w-full justify-center mt-6"
                  >
                    <ProgressBarComp />
                  </div>
                  <div v-else class="m-4 mt-6 flex justify-center">
                    <AudioPlayer
                      :src="x.theia.audio"
                      :key="store.rerenderAudio"
                    />
                  </div>
                  <div class="m-2 p-4 px-10">
                    {{ x.theia.text }}
                  </div>
                </div>
              </div>
              <div class="flex justify-start text-xs mb-4 pl-4">
                <div class="text-center flex align-bottom justify-center">
                  <img
                    class="w-8 h-8 ml-1 mr-2 rounded-full border shadow-sm"
                    :class="[
                      `shadow-${store.secondaryColor}`,
                      `border-${store.primaryColor}`,
                    ]"
                    :src="theiaPFP"
                  />
                </div>
                <div
                  class="text-left pl-2 mt-4 font-bold opacity-50 text-transparent bg-clip-text bg-gradient-to-r"
                  :class="`from-${store.primaryColor} to-${store.secondaryColor}`"
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
                class="mr-12 my-2 mt-4 -mb-1 text-xs text-white text-semibold rounded-full rounded-br-none w-[250px] sm:w-[320px] lg:w-[540px] shadow-inner shadow-yellow-400"
                :class="store.dark ? 'bg-black/50' : 'bg-white/50'"
              >
                <div
                  class="text-xs p-2 px-8 font-semibold rounded-full rounded-br-none w-[250px] sm:w-[320px] lg:w-[540px] shadow-sm border"
                  :class="[
                    store.dark ? 'bg-black/30' : 'bg-white/30',
                    `shadow-${store.primaryColor}`,
                    `border-${store.primaryColor}`,
                  ]"
                >
                  <div class="m-4 mt-6 flex justify-center">
                    <AudioPlayer
                      :src="x.user.audio"
                      :key="store.rerenderAudio"
                    />
                  </div>
                  <div class="m-2 p-4">
                    {{ x.user.text }}
                  </div>
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
    <InputComp />
  </div>
</template>
<style scoped>
span:active {
  outline: none !important;
  border: rgb(249, 17, 249) !important;
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
