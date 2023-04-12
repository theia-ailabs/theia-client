<script lang="ts">
import { defineComponent } from "vue";
import useStore from "../services/store";
// import InputComp from "./InputComp.vue";
// import WavesComp from "./WavesComp.vue";
// import WalletsBtn from "./modules/buttons/WalletsButton.vue";

export default defineComponent({
  setup() {
    const store = useStore();
    const switchChat = () => {
      store.showChat = !store.showChat;
    };
    const switchMenu = () => {
      store.showMenu = !store.showMenu;
    };

    return {
      store,
      switchChat,
      switchMenu,
    };
  },
  data() {
    return {
      chat: require("../assets/img/svg/chat-white.svg"),
      menuImg: require("../assets/img/ico/connect-white.png"),
      logo: require("../assets/img/png/logo3.png"),
      pfp: require("../assets/img/png/profile.png"),
      email: require("../assets/img/svg/mail-white.svg"),
      unread: require("../assets/img/svg/mark-unread-white.svg"),
      social: require("../assets/img/svg/groups-white.svg"),
    };
  },
});
</script>
<template>
  <nav
    class="z-50 fixed pt-4 flex justify-between w-full top-0"
    :class="store.dark ? 'bg-black/90' : 'bg-white/90'"
  >
    <div class="flex ml-12 mt-2">
      <div>
        <button class="mx-3" @click="switchChat">
          <img :src="chat" alt="chat" />
        </button>
      </div>
      <div>
        <button class="mx-3 rounded-full">
          <img
            :src="menuImg"
            alt="Menu Button"
            @click="switchMenu"
            class="h-7"
          />
        </button>
      </div>
    </div>
    <div class="m-1 mx-auto">
      <button :click="store.scrollTop()" class="flex justify-center">
        <img class="h-10 lg:h-12" :src="logo" alt="Theia logo" />
      </button>
    </div>
    <div class="flex mr-12 mt-5">
      <div>
        <button class="mx-3">
          <img :src="email" alt="email" />
        </button>
      </div>
      <div>
        <button id="showsocial" class="mx-3" @click="switchMenu">
          <img :src="social" alt="social" />
        </button>
      </div>
    </div>
  </nav>
</template>
<style scoped>
nav {
  z-index: 100 !important;
}
</style>
