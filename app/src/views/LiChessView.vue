<script lang="ts">
import { defineComponent } from "vue";
import NavbarComp from "../components/NavbarComp.vue";
import ChessComp from "../components/ChessComp.vue";
import TheiaChatComp from "../components/TheiaChatComp.vue";
import MenuComp from "../components/MenuComp.vue";
import FooterComp from "../components/FooterComp.vue";
import useStore from "../services/store";

export default defineComponent({
  components: {
    NavbarComp,
    ChessComp,
    TheiaChatComp,
    MenuComp,
    FooterComp,
  },
  setup() {
    const store = useStore();
    return {
      store,
    };
  },
});
</script>
<template>
  <div class="w-full h-screen" :class="store.dark ? 'bg-black' : 'bg-white'">
    <NavbarComp />
    <ChessComp />
    <TheiaChatComp />
    <MenuComp />
    <FooterComp />
  </div>
</template>
