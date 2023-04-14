<script lang="ts">
import { defineComponent } from "vue";
import NavbarComp from "../components/NavbarComp.vue";
import AvatarComp from "../components/AvatarComp.vue";
import ChatComp from "../components/ChatComp.vue";
import MenuComp from "../components/MenuComp.vue";
import FooterComp from "../components/FooterComp.vue";
import useStore from "../services/store";
import VoiceRec from "../services/voiceRec";

export default defineComponent({
  components: { NavbarComp, AvatarComp, ChatComp, MenuComp, FooterComp },
  setup() {
    const store = useStore();

    return {
      store,
    };
  },
});
</script>
<template>
  <div class="w-full h-screen" :class="store.dark ? 'bg-white' : 'bg-white'">
    <NavbarComp />
    <AvatarComp />
    <ChatComp id="chat-comp" />
    <MenuComp />
    <FooterComp />
  </div>
</template>
