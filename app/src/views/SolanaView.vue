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
  <section
    id="solanaView"
    class="w-full h-screen"
    :class="store.dark ? 'bg-black' : 'bg-white'"
  >
    <header>
      <!-- Navigation bar -->
      <NavbarComp :theia="false" />
    </header>
    <main>
      <!-- Solana Wallet -->
      <SolanaComp />
      <!-- Social buttons -->
      <MenuComp />
    </main>
    <footer>
      <!-- Footer -->
      <FooterComp />
    </footer>
  </section>
</template>
