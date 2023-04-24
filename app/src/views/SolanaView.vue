<script lang="ts">
import { defineComponent } from "vue";
import NavbarComp from "../components/NavbarComp.vue";
import SolanaComp from "../components/SolanaComp.vue";
import MenuComp from "../components/MenuComp.vue";
import FooterComp from "../components/FooterComp.vue";
import VoiceRec from "../services/utilities/voiceRec";
import useStore from "../services/store";

export default defineComponent({
  components: {
    NavbarComp,
    SolanaComp,
    MenuComp,
    FooterComp,
  },
  setup() {
    const store = useStore();
    const voiceRec = new VoiceRec();
    voiceRec.init();
    voiceRec.start();
    return {
      store,
    };
  },
});
</script>
<template>
  <div class="w-full h-screen" :class="store.dark ? 'bg-black' : 'bg-white'">
    <NavbarComp />
    <SolanaComp />
    <MenuComp />
    <FooterComp />
  </div>
</template>
