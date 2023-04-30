<script lang="ts">
import { defineComponent } from "vue";
import SettingsModal from "./modules/modals/SettingsModal.vue";
import CarouselModal from "./modules/modals/CarouselModal.vue";
import useStore from "../services/store";

export default defineComponent({
  props: {
    config: { type: Boolean, default: true },
    theia: { type: Boolean, default: true },
  },
  components: {
    SettingsModal,
    CarouselModal,
  },
  setup(props: any) {
    const store = useStore();
    const switchModal = () => {
      store.settingsModal = !store.settingsModal;
    };
    const switchChat = () => {
      store.showChat = !store.showChat;
      store.showMenu = false;
    };
    const switchMenu = () => {
      store.showMenu = !store.showMenu;
      store.showChat = false;
    };

    return {
      store,
      switchModal,
      switchChat,
      switchMenu,
      props,
    };
  },
  data() {
    return {
      chat: require("../assets/img/svg/chat-white.svg"),
      blackchat: require("../assets/img/svg/chat-black.svg"),
      logo: require("../assets/img/png/logo3.png"),
      pfp: require("../assets/img/png/profile.png"),
      email: require("../assets/img/svg/mail-white.svg"),
      unread: require("../assets/img/svg/mark-unread-white.svg"),
      social: require("../assets/img/svg/groups-white.svg"),
      blacklogo: require("../assets/img/png/logo3-black.png"),
      blacksocial: require("../assets/img/svg/groups-black.svg"),
      blackmail: require("../assets/img/svg/email-black.svg"),
      blackconnect: require("../assets/img/svg/connect-black.svg"),
      connect: require("../assets/img/svg/connect.svg"),
      theiaWhite: require("../assets/img/svg/theia-white.svg"),
      theiaBlack: require("../assets/img/svg/theia-black.svg"),
    };
  },
});
</script>
<template>
  <div>
    <CarouselModal />
    <SettingsModal />
    <nav
      class="z-50 fixed pt-4 flex justify-between w-full top-0"
      :class="store.dark ? 'bg-black/90' : 'bg-white/90'"
    >
      <div class="flex ml-2 mt-2 lg:ml-12">
        <!-- Messages -->
        <div>
          <button class="mx-3">
            <img
              class="w-[24px] h-[24px]"
              :src="store.dark ? email : blackmail"
              alt="email"
            />
          </button>
        </div>
        <!-- Contacts -->
        <div>
          <button id="showsocial" class="mx-3" @click="switchMenu">
            <img
              class="w-[24px] h-[24px]"
              :src="store.dark ? social : blacksocial"
              alt="social"
            />
          </button>
        </div>
      </div>
      <div class="mb-1">
        <!-- Logo -->
        <div v-if="props.config">
          <button @click="switchModal" class="z-50 flex justify-center">
            <img
              class="h-10 lg:h-12"
              :src="store.dark ? logo : blacklogo"
              alt="Theia logo"
            />
          </button>
        </div>
        <div v-else>
          <router-link to="/theia">
            <img
              class="h-10 lg:h-11"
              :src="store.dark ? logo : blacklogo"
              alt="Theia logo"
          /></router-link>
        </div>
      </div>
      <div class="flex mr-2 mt-2 lg:mr-12">
        <!-- Theia Chat -->
        <div v-if="props.theia">
          <button class="mx-3" @click="switchChat">
            <img
              class="w-[24px] h-[24px]"
              :src="store.dark ? chat : blackchat"
              alt="chat"
            />
          </button>
        </div>
        <div v-else>
          <router-link to="/theia">
            <div class="mr-2">
              <img
                class="w-7 h-7 mb-2"
                :src="store.dark ? theiaWhite : theiaBlack"
                alt="chat"
              /></div
          ></router-link>
        </div>
        <!-- Connections Button -->
        <div>
          <button class="mx-3 rounded-full">
            <img
              :src="store.dark ? connect : blackconnect"
              alt="Menu Button"
              @click="switchMenu"
              class="w-[24px] h-[24px]"
            />
          </button>
        </div>
      </div>
    </nav>
  </div>
</template>
<style scoped>
nav {
  z-index: 100 !important;
}
</style>
