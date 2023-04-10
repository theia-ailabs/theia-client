<script lang="ts">
import { defineComponent } from "vue";
import useStore from "../services/store";
import logo from "../assets/img/png/logo.png";
import profile from "../assets/img/png/profile.png";

export default defineComponent({
  setup() {
    const store = useStore();
    return {
      store,
      logo,
      profile,
    };
  },
});
</script>
<template>
  <nav class="z-50 fixed pt-4 flex justify-between w-full top-0 bg-transparent">
    <div class="ml-12">
      <button :click="store.scrollTop()">
        <img class="h-14" :src="logo" alt="Theia logo" />
      </button>
    </div>
    <div class="flex">
      <form id="input-chat" class="flex relative justify-center w-full">
        <textarea
          v-model="store.input"
          class="py-2 hover:border-yellow-500 text-center border border-purple-300/50 bg-black/50 text-white text-xs shadow-inner-sm shadow-yellow-400 p-1 my-2 rounded-xl z-50"
        >
        </textarea>
        <button
          class="ml-4 rounded-xl border border-white"
          @click="store.inputMessage()"
        >
          Hola
        </button>
      </form>
    </div>
    <div class="mr-12 mt-2">
      <button :click="store.scrollTop()">
        <img class="h-12" :src="profile" alt="Theia logo" />
      </button>
    </div>
  </nav>
</template>
