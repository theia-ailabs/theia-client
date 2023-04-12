<script lang="ts">
import { defineComponent } from "vue";
import useStore from "../services/store";
// import InputComp from "./InputComp.vue";
// import WavesComp from "./WavesComp.vue";
// import WalletsBtn from "./modules/buttons/WalletsButton.vue";

export default defineComponent({
  setup() {
    const store = useStore();
    function showSocial() {
      document.getElementById("menu-btn")?.classList.remove("hidden");
      document.getElementById("menu-btn")?.classList.add("flex");
      document.getElementById("showsocial")?.classList.add("hidden");
      document.getElementById("hidesocial")?.classList.remove("hidden");
    }
    function hideSocial() {
      document.getElementById("menu-btn")?.classList.remove("flex");
      document.getElementById("menu-btn")?.classList.add("hidden");
      document.getElementById("hidesocial")?.classList.add("hidden");
      document.getElementById("showsocial")?.classList.remove("hidden");
    }
    function hideChat() {
      document.getElementById("chat-comp")?.classList.add("hidden");
      document.getElementById("hidechat")?.classList.add("hidden");
      document.getElementById("showchat")?.classList.remove("hidden");
    }
    function showChat() {
      document.getElementById("chat-comp")?.classList.remove("hidden");
      document.getElementById("showchat")?.classList.add("hidden");
      document.getElementById("hidechat")?.classList.remove("hidden");
    }
    return {
      store,
      showSocial,
      hideChat,
      showChat,
      hideSocial,
    };
  },
  data() {
    return {
      chat: require("../assets/img/svg/chat-white.svg"),
      calendar: require("../assets/img/svg/calendar-white.svg"),
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
    <div class="flex ml-12 mt-5">
      <div>
        <button id="hidechat" class="mr-3" @click="hideChat">
          <img :src="chat" alt="chat" />
        </button>
        <button id="showchat" class="mr-3 hidden" @click="showChat">
          <img :src="unread" alt="unread-chat" />
        </button>
      </div>
      <div>
        <button class="mx-3">
          <img :src="calendar" alt="calendar" />
        </button>
      </div>
      <div>
        <button class="mx-3">
          <img :src="email" alt="email" />
        </button>
      </div>
      <div>
        <button id="showsocial" class="mx-3" @click="showSocial">
          <img :src="social" alt="social" />
        </button>
        <button id="hidesocial" class="mx-3 hidden" @click="hideSocial">
          <img :src="social" alt="social" />
        </button>
      </div>
    </div>
    <div class="m-1 mx-auto">
      <button :click="store.scrollTop()" class="flex justify-center">
        <img class="h-12 lg:h-16" :src="logo" alt="Theia logo" />
      </button>
    </div>
    <div class="mr-28"></div>
    <div class="flex flex-wrap mx-4 sm:mr-12 -mt-2">
      <!-- <WalletsBtn /> -->
      <button :click="store.scrollTop()">
        <img class="h-10 lg:h-12" :src="pfp" alt="Theia logo" />
      </button>
    </div>
  </nav>
</template>
<style scoped>
nav {
  z-index: 100 !important;
}
</style>
