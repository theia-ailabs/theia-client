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
          @click="store.connections.google = !store.connections.google"
          class="m-2 w-8 h-8 pt-[7px] rounded-full flex justify-center align-middle border shadow-md"
          :class="[
            store.dark ? 'hover:bg-white/20' : 'hover:bg-black/20',
            store.connections.google
              ? `border-${store.primaryColor} shadow-${store.secondaryColor}/50`
              : 'opacity-50 border-gray-500/50',
          ]"
        >
          <img :src="googleImg" alt="Google button" class="w-4" />
        </button>
        <!-- Apple -->
        <button
          @click="store.connections.apple = !store.connections.apple"
          class="m-2 w-8 h-8 pt-1 rounded-full flex justify-center align-middle border shadow-md"
          :class="[
            store.dark ? 'hover:bg-white/20' : 'hover:bg-black/20',
            store.connections.apple
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
          @click="store.connections.twitter = !store.connections.twitter"
          class="m-2 w-8 h-8 pt-[6px] rounded-full flex justify-center align-middle border shadow-md"
          :class="[
            store.dark ? 'hover:bg-white/20' : 'hover:bg-black/20',
            store.connections.twitter
              ? `border-${store.primaryColor} shadow-${store.secondaryColor}/50`
              : 'opacity-50 border-gray-500/50',
          ]"
        >
          <img :src="twitterImg" alt="Twitter button" class="w-5" />
        </button>
        <!-- Instagram -->
        <button
          @click="store.connections.instagram = !store.connections.instagram"
          class="m-2 w-8 h-8 pt-[7px] rounded-full flex justify-center align-middle border shadow-md"
          :class="[
            store.dark ? 'hover:bg-white/20' : 'hover:bg-black/20',
            store.connections.instagram
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
          @click="store.connections.spotify = !store.connections.spotify"
          class="m-2 w-8 h-8 pt-[5px] rounded-full flex justify-center align-middle border shadow-md"
          :class="[
            store.dark ? 'hover:bg-white/20' : 'hover:bg-black/20',
            store.connections.spotify
              ? `border-${store.primaryColor} shadow-${store.secondaryColor}/50`
              : 'opacity-50 border-gray-500/50',
          ]"
        >
          <img :src="spotifyImg" alt="Sptofy button" class="w-5" />
        </button>
        <!-- Youtube -->
        <button
          @click="store.connections.youtube = !store.connections.youtube"
          class="m-2 w-8 h-8 pt-[5px] rounded-full flex justify-center align-middle border shadow-md"
          :class="[
            store.dark ? 'hover:bg-white/20' : 'hover:bg-black/20',
            store.connections.youtube
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
          @click="store.connections.whatsapp = !store.connections.whatsapp"
          class="m-2 w-8 h-8 pt-[5px] rounded-full flex justify-center align-middle border shadow-md"
          :class="[
            store.dark ? 'hover:bg-white/20' : 'hover:bg-black/20',
            store.connections.whatsapp
              ? `border-${store.primaryColor} shadow-${store.secondaryColor}/50`
              : 'opacity-50 border-gray-500/50',
          ]"
        >
          <img :src="whatsappImg" alt="Youtube button" class="w-5" />
        </button>
        <!-- Telegram -->
        <button
          @click="store.connections.telegram = !store.connections.telegram"
          class="m-2 w-8 h-8 pt-[5px] rounded-full flex justify-center align-middle border shadow-md"
          :class="[
            store.dark ? 'hover:bg-white/20' : 'hover:bg-black/20',
            store.connections.telegram
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
          @click="store.connections.solana = !store.connections.solana"
          class="m-2 w-8 h-8 pt-[5px] rounded-full flex justify-center align-middle border shadow-md"
          :class="[
            store.dark ? 'hover:bg-white/20' : 'hover:bg-black/20',
            store.connections.solana
              ? `border-${store.primaryColor} shadow-${store.secondaryColor}/50`
              : 'opacity-50 border-gray-500/50',
          ]"
        >
          <img :src="solanaImg" alt="Youtube button" class="w-5" />
        </button>
        <!-- Ethereum -->
        <button
          @click="store.connections.ethereum = !store.connections.ethereum"
          class="m-2 w-8 h-8 pt-[5px] rounded-full flex justify-center align-middle border shadow-md"
          :class="[
            store.dark ? 'hover:bg-white/20' : 'hover:bg-black/20',
            store.connections.ethereum
              ? `border-${store.primaryColor} shadow-${store.secondaryColor}/50`
              : 'opacity-50 border-gray-500/50',
          ]"
        >
          <img :src="ethereumImg" alt="Youtube button" class="w-[14px] h-5" />
        </button>
      </div>
      <div>
        <!-- lichess.org -->
        <button
          @click="store.connections.solana = !store.connections.solana"
          class="m-2 w-8 h-8 pt-[5px] rounded-full flex justify-center align-middle border shadow-md"
          :class="[
            store.dark ? 'hover:bg-white/20' : 'hover:bg-black/20',
            store.connections.solana
              ? `border-${store.primaryColor} shadow-${store.secondaryColor}/50`
              : 'opacity-50 border-gray-500/50',
          ]"
        >
          <img :src="solanaImg" alt="Youtube button" class="w-5" />
        </button>
        <!-- chess.com -->
        <button
          @click="store.connections.ethereum = !store.connections.ethereum"
          class="m-2 w-8 h-8 pt-[5px] rounded-full flex justify-center align-middle border shadow-md"
          :class="[
            store.dark ? 'hover:bg-white/20' : 'hover:bg-black/20',
            store.connections.ethereum
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
