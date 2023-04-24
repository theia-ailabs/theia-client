<script lang="ts">
import { defineComponent } from "vue";
import NavbarComp from "../components/NavbarComp.vue";
import AvatarComp from "../components/AvatarComp.vue";
import TheiaChatComp from "../components/TheiaChatComp.vue";
import MenuComp from "../components/MenuComp.vue";
import FooterComp from "../components/FooterComp.vue";
import useStore from "../services/store";

export default defineComponent({
  components: {
    NavbarComp,
    AvatarComp,
    TheiaChatComp,
    MenuComp,
    FooterComp,
  },
  setup() {
    const store = useStore();
    store.recorder.init();
    store.recorder.start();
    return {
      store,
    };
  },
});
</script>
<template>
  <div class="w-full h-screen" :class="store.dark ? 'bg-black' : 'bg-white'">
    <NavbarComp />
    <AvatarComp />
    <TheiaChatComp />
    <MenuComp />
    <FooterComp />
  </div>
</template>
