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
      whatsappImg: require("../assets/img/ico/whatsapp.png"),
      telegramImg: require("../assets/img/ico/telegram.png"),
      solanaImg: require("../assets/img/ico/solana.png"),
      ethereumImg: require("../assets/img/ico/ethereum.png"),
    };
  },
});
</script>
<template>
  <div class="z-50 fixed bottom-8 w-full">
    <div
      class="flex flex-wrap justify-center bg-transparent w-full"
      :class="store.showMenu ? 'block' : 'hidden'"
    >
      <div>
        <!-- Google -->
        <button
          class="m-2 w-8 h-8 pt-[7px] rounded-full border flex justify-center align-middle"
          :class="
            store.dark
              ? 'border-white/50 hover:bg-white/20'
              : 'border-black/50 hover:bg-black/20'
          "
        >
          <img :src="googleImg" alt="Google button" class="w-4" />
        </button>
        <!-- Apple -->
        <button
          class="m-2 w-8 h-8 pt-1 rounded-full border flex justify-center align-middle"
          :class="
            store.dark
              ? 'border-white/50 hover:bg-white/20'
              : 'border-black/50 hover:bg-black/20'
          "
        >
          <img :src="appleImg" alt="Apple button" class="w-5" />
        </button>
      </div>
      <div>
        <!-- Twitter -->
        <button
          class="m-2 w-8 h-8 pt-[6px] rounded-full border flex justify-center align-middle"
          :class="
            store.dark
              ? 'border-white/50 hover:bg-white/20'
              : 'border-black/50 hover:bg-black/20'
          "
        >
          <img :src="twitterImg" alt="Twitter button" class="w-5" />
        </button>
        <!-- Instagram -->
        <button
          class="m-2 w-8 h-8 pt-[7px] rounded-full border flex justify-center align-middle"
          :class="
            store.dark
              ? 'border-white/50 hover:bg-white/20'
              : 'border-black/50 hover:bg-black/20'
          "
        >
          <img :src="instaImg" alt="Instagram button" class="w-4" />
        </button>
      </div>
      <div>
        <!-- Spotify -->
        <button
          class="m-2 w-8 h-8 pt-[5px] rounded-full border flex justify-center align-middle"
          :class="
            store.dark
              ? 'border-white/50 hover:bg-white/20'
              : 'border-black/50 hover:bg-black/20'
          "
        >
          <img :src="spotifyImg" alt="Sptofy button" class="w-5" />
        </button>
        <!-- Youtube -->
        <button
          class="m-2 w-8 h-8 pt-[5px] rounded-full border flex justify-center align-middle"
          :class="
            store.dark
              ? 'border-white/50 hover:bg-white/20'
              : 'border-black/50 hover:bg-black/20'
          "
        >
          <img :src="youtubeImg" alt="Youtube button" class="w-5" />
        </button>
      </div>
      <div>
        <!-- Whatsapp -->
        <button
          class="m-2 w-8 h-8 pt-[5px] rounded-full border flex justify-center align-middle"
          :class="
            store.dark
              ? 'border-white/50 hover:bg-white/20'
              : 'border-black/50 hover:bg-black/20'
          "
        >
          <img :src="whatsappImg" alt="Youtube button" class="w-5" />
        </button>
        <!-- Telegram -->
        <button
          class="m-2 w-8 h-8 pt-[5px] rounded-full border flex justify-center align-middle"
          :class="
            store.dark
              ? 'border-white/50 hover:bg-white/20'
              : 'border-black/50 hover:bg-black/20'
          "
        >
          <img :src="telegramImg" alt="Youtube button" class="w-5" />
        </button>
      </div>
      <div>
        <!-- Solana -->
        <button
          class="m-2 w-8 h-8 pt-[5px] rounded-full border flex justify-center align-middle"
          :class="
            store.dark
              ? 'border-white/50 hover:bg-white/20'
              : 'border-black/50 hover:bg-black/20'
          "
        >
          <img :src="solanaImg" alt="Youtube button" class="w-5" />
        </button>
        <!-- Ethereum -->
        <button
          class="m-2 w-8 h-8 pt-[5px] rounded-full border flex justify-center align-middle"
          :class="
            store.dark
              ? 'border-white/50 hover:bg-white/20'
              : 'border-black/50 hover:bg-black/20'
          "
        >
          <img :src="ethereumImg" alt="Youtube button" class="w-5" />
        </button>
      </div>
    </div>
    <InputComp />
  </div>
</template>
<style scoped>
h1 {
  font-size: 40px;
}
</style>
