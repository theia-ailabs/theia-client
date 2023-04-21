<script lang="ts">
import { defineComponent } from "vue";
// import SettingsModal from "./modules/modals/SettingsModal.vue";
import CarouselModal from "./modules/modals/CarouselModal.vue";
import useStore from "../services/store";

export default defineComponent({
  props: {
    config: { type: Boolean, default: true },
  },
  components: {
    // SettingsModal,
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
    const showImg = () => {
      let showImg = true;
    };

    return {
      store,
      switchModal,
      switchChat,
      switchMenu,
      showImg,
      props,
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
  <div>
    <CarouselModal />
    <!-- <SettingsModal /> -->
    <nav
      class="z-50 fixed pt-4 flex justify-between w-full top-0"
      :class="store.dark ? 'bg-black/90' : 'bg-white/90'"
    >
      <div class="flex ml-2 lg:ml-12">
        <!-- Messages -->
        <div>
          <button class="mx-3" @click="showImg">
            <img :src="email" alt="email" />
          </button>
        </div>
        <!-- Contacts -->
        <div>
          <button id="showsocial" class="mx-3" @click="switchMenu">
            <img :src="social" alt="social" />
          </button>
        </div>
      </div>
      <div class="mb-1">
        <!-- Logo -->
        <div v-if="props.config">
          <button @click="switchModal" class="z-50 flex justify-center">
            <img class="h-10 lg:h-12" :src="logo" alt="Theia logo" />
          </button>
        </div>
        <div v-else>
          <router-link to="/theia">
            <img class="h-10 lg:h-12" :src="logo" alt="Theia logo"
          /></router-link>
        </div>
      </div>
      <div class="flex mr-2 lg:mr-12">
        <!-- Theia Chat -->
        <div>
          <button class="mx-3" @click="switchChat">
            <img :src="chat" alt="chat" />
          </button>
        </div>
        <!-- Connections Button -->
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
    </nav>
  </div>
</template>
<style scoped>
nav {
  z-index: 100 !important;
}
</style>
