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
  <div>
    <div class="flex relative justify-center w-full">
      <span
        id="span_input"
        class="fixed top-28 py-2 hover:border-yellow-500 text-center border border-purple-300/50 bg-black/50 text-white text-xs shadow-inner-sm shadow-yellow-400 min-h-12 p-1 my-2 w-64 rounded-xl"
        autofocus
        contenteditable
      >
      </span>
      <button class="bg-white send" type="button" :click="store.inputMessage()">
        &nbsp;
      </button>
    </div>
    <div class="relative p-2 pt-4 h-screen w-screen">
      <div
        class="relative flex align-top top-0"
        v-for="x in store.chat"
        :key="x.datetime"
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
                <app-audio-wave class="h-4 max-h-12" />
                <div class="p-4">
                  {{ x.theia.text }}
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
              <app-audio-wave class="h-4 max-h-12" />
              {{ x.user.text }}
            </div>
            <div class="flex justify-end text-xs mb-4 pl-4">
              <div class="mr-4 text-gray-500">
                {{ x.datetime }}
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
