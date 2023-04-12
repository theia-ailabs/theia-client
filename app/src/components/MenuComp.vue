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
          @click="store.google = !store.google"
          class="m-2 w-8 h-8 pt-[7px] rounded-full flex justify-center align-middle border shadow-md"
          :class="[
            store.dark ? 'hover:bg-white/20' : 'hover:bg-black/20',
            store.google
              ? `border-${store.primaryColor} shadow-${store.secondaryColor}/50`
              : 'opacity-50 border-gray-500/50',
          ]"
        >
          <img :src="googleImg" alt="Google button" class="w-4" />
        </button>
        <!-- Apple -->
        <button
          @click="store.apple = !store.apple"
          class="m-2 w-8 h-8 pt-1 rounded-full flex justify-center align-middle border shadow-md"
          :class="[
            store.dark ? 'hover:bg-white/20' : 'hover:bg-black/20',
            store.apple
              ? `border-${store.primaryColor} shadow-${store.secondaryColor}/50`
              : 'opacity-50 border-gray-500/50',
          ]"
        >
          <img :src="appleImg" alt="Apple button" class="w-5" />
        </button>
      </div>
      <div>
        <!-- Twitter -->
        <button
          @click="store.twitter = !store.twitter"
          class="m-2 w-8 h-8 pt-[6px] rounded-full flex justify-center align-middle border shadow-md"
          :class="[
            store.dark ? 'hover:bg-white/20' : 'hover:bg-black/20',
            store.twitter
              ? `border-${store.primaryColor} shadow-${store.secondaryColor}/50`
              : 'opacity-50 border-gray-500/50',
          ]"
        >
          <img :src="twitterImg" alt="Twitter button" class="w-5" />
        </button>
        <!-- Instagram -->
        <button
          @click="store.instagram = !store.instagram"
          class="m-2 w-8 h-8 pt-[7px] rounded-full flex justify-center align-middle border shadow-md"
          :class="[
            store.dark ? 'hover:bg-white/20' : 'hover:bg-black/20',
            store.instagram
              ? `border-${store.primaryColor} shadow-${store.secondaryColor}/50`
              : 'opacity-50 border-gray-500/50',
          ]"
        >
          <img :src="instaImg" alt="Instagram button" class="w-4" />
        </button>
      </div>
      <div>
        <!-- Spotify -->
        <button
          @click="store.spotify = !store.spotify"
          class="m-2 w-8 h-8 pt-[5px] rounded-full flex justify-center align-middle border shadow-md"
          :class="[
            store.dark ? 'hover:bg-white/20' : 'hover:bg-black/20',
            store.spotify
              ? `border-${store.primaryColor} shadow-${store.secondaryColor}/50`
              : 'opacity-50 border-gray-500/50',
          ]"
        >
          <img :src="spotifyImg" alt="Sptofy button" class="w-5" />
        </button>
        <!-- Youtube -->
        <button
          @click="store.youtube = !store.youtube"
          class="m-2 w-8 h-8 pt-[5px] rounded-full flex justify-center align-middle border shadow-md"
          :class="[
            store.dark ? 'hover:bg-white/20' : 'hover:bg-black/20',
            store.youtube
              ? `border-${store.primaryColor} shadow-${store.secondaryColor}/50`
              : 'opacity-50 border-gray-500/50',
          ]"
        >
          <img :src="youtubeImg" alt="Youtube button" class="w-5" />
        </button>
      </div>
      <div>
        <!-- Whatsapp -->
        <button
          @click="store.whatsapp = !store.whatsapp"
          class="m-2 w-8 h-8 pt-[5px] rounded-full flex justify-center align-middle border shadow-md"
          :class="[
            store.dark ? 'hover:bg-white/20' : 'hover:bg-black/20',
            store.whatsapp
              ? `border-${store.primaryColor} shadow-${store.secondaryColor}/50`
              : 'opacity-50 border-gray-500/50',
          ]"
        >
          <img :src="whatsappImg" alt="Youtube button" class="w-5" />
        </button>
        <!-- Telegram -->
        <button
          @click="store.telegram = !store.telegram"
          class="m-2 w-8 h-8 pt-[5px] rounded-full flex justify-center align-middle border shadow-md"
          :class="[
            store.dark ? 'hover:bg-white/20' : 'hover:bg-black/20',
            store.telegram
              ? `border-${store.primaryColor} shadow-${store.secondaryColor}/50`
              : 'opacity-50 border-gray-500/50',
          ]"
        >
          <img :src="telegramImg" alt="Youtube button" class="w-5" />
        </button>
      </div>
      <div>
        <!-- Solana -->
        <button
          @click="store.solana = !store.solana"
          class="m-2 w-8 h-8 pt-[5px] rounded-full flex justify-center align-middle border shadow-md"
          :class="[
            store.dark ? 'hover:bg-white/20' : 'hover:bg-black/20',
            store.solana
              ? `border-${store.primaryColor} shadow-${store.secondaryColor}/50`
              : 'opacity-50 border-gray-500/50',
          ]"
        >
          <img :src="solanaImg" alt="Youtube button" class="w-5" />
        </button>
        <!-- Ethereum -->
        <button
          @click="store.ethereum = !store.ethereum"
          class="m-2 w-8 h-8 pt-[5px] rounded-full flex justify-center align-middle border shadow-md"
          :class="[
            store.dark ? 'hover:bg-white/20' : 'hover:bg-black/20',
            store.ethereum
              ? `border-${store.primaryColor} shadow-${store.secondaryColor}/50`
              : 'opacity-50 border-gray-500/50',
          ]"
        >
          <img :src="ethereumImg" alt="Youtube button" class="w-[14px] h-5" />
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
