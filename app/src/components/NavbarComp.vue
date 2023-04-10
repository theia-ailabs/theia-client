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
  <nav
    class="z-50 fixed pt-4 flex justify-between w-full top-0"
    :class="store.dark ? 'bg-black/90' : 'bg-white/90'"
  >
    <div class="ml-12 -mt-4">
      <button :click="store.scrollTop()">
        <img class="h-14" :src="logo" alt="Theia logo" />
      </button>
    </div>
    <div class="flex -mt-4">
      <form id="input-chat" class="flex relative justify-center w-full">
        <textarea
          v-model="store.input"
          class="p-1 my-2 py-2 text-center border border-purple-300/50 bg-black/50 text-white text-xs shadow-inner shadow-yellow-400/50 rounded-xl z-50 hover:border-purple-400 hover:shadow-yellow-400/80"
        >
        </textarea>
        <div class="px-2 mt-4">
          <button
            class="ml-2 p-2 text-xs rounded-full border text-white/50 border-purple-400/30 shadow-sm shadow-yellow-400/50 hover:text-white hover:border-purple-400 hover:shadow-yellow-400"
            @click="store.inputMessage()"
          >
            Send
          </button>
        </div>
      </form>
    </div>
    <div class="mr-12 -mt-1">
      <button :click="store.scrollTop()">
        <img class="h-10" :src="profile" alt="Theia logo" />
      </button>
    </div>
  </nav>
</template>
