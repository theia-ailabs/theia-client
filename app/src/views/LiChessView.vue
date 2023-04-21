<script lang="ts">
import { defineComponent } from "vue";
import NavbarComp from "../components/NavbarComp.vue";
import ChessComp from "../components/ChessComp.vue";
import MenuComp from "../components/MenuComp.vue";
import FooterComp from "../components/FooterComp.vue";
import useStore from "../services/store";

export default defineComponent({
  components: {
    NavbarComp,
    ChessComp,
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
    <NavbarComp :config="false" />
    <ChessComp />
    <MenuComp />
    <FooterComp />
  </div>
</template>
