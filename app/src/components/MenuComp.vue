<script lang="ts">
import { defineComponent } from "vue";
import InputComp from "./InputComp.vue";
import useStore from "../services/store";

export default defineComponent({
  components: {
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
      googleImg: require("../assets/img/ico/google.png"),
      appleImg: require("../assets/img/ico/apple.png"),
      instaImg: require("../assets/img/ico/instagram.png"),
      twitterImg: require("../assets/img/ico/twitter.png"),
      youtubeImg: require("../assets/img/ico/youtube.png"),
      spotifyImg: require("../assets/img/ico/spotify.png"),
    };
  },
});
</script>
<template>
  <div class="z-50 fixed bottom-12 w-full">
    <InputComp />
    <div class="flex flex-wrap justify-center bg-transparent w-full">
      <button
        class="m-2 w-10 h-10 pt-[7px] rounded-full border flex justify-center align-middle opacity-50"
        :class="
          store.dark
            ? 'border-white/50 hover:bg-white/20'
            : 'border-black/50 hover:bg-black/20'
        "
      >
        <img :src="googleImg" alt="Google button" class="w-6" />
      </button>
      <button
        class="m-2 w-10 h-10 pt-1 rounded-full border flex justify-center align-middle"
        :class="
          store.dark
            ? 'border-white/50 hover:bg-white/20'
            : 'border-black/50 hover:bg-black/20'
        "
      >
        <img :src="appleImg" alt="Apple button" class="w-7" />
      </button>
      <button
        class="m-2 w-10 h-10 pt-[7px] rounded-full border flex justify-center align-middle"
        :class="
          store.dark
            ? 'border-white/50 hover:bg-white/20'
            : 'border-black/50 hover:bg-black/20'
        "
      >
        <img :src="instaImg" alt="Instagram button" class="w-6" />
      </button>
      <button
        class="m-2 w-10 h-10 rounded-full border flex justify-center align-middle"
        :class="
          store.dark
            ? 'border-white/50 hover:bg-white/20'
            : 'border-black/50 hover:bg-black/20'
        "
      >
        <img :src="twitterImg" alt="Twitter button" class="w-7 mt-[6px]" />
      </button>
      <button
        class="m-2 w-10 h-10 rounded-full border flex justify-center align-middle"
        :class="
          store.dark
            ? 'border-white/50 hover:bg-white/20'
            : 'border-black/50 hover:bg-black/20'
        "
      >
        <img :src="spotifyImg" alt="Sptofy button" class="w-7 mt-[5px]" />
      </button>
      <button
        class="m-2 w-10 h-10 rounded-full border flex justify-center align-middle"
        :class="
          store.dark
            ? 'border-white/50 hover:bg-white/20'
            : 'border-black/50 hover:bg-black/20'
        "
      >
        <img :src="youtubeImg" alt="Youtube button" class="w-7 mt-[5px]" />
      </button>
    </div>
  </div>
</template>
<style scoped>
h1 {
  font-size: 40px;
}
</style>
