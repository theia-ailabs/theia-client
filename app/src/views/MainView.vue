<script lang="ts">
import { defineComponent } from "vue";
import NavbarComp from "../components/NavbarComp.vue";
import AvatarComp from "../components/AvatarComp.vue";
import ChatComp from "../components/ChatComp.vue";
import useStore from "../services/store";

export default defineComponent({
  components: { NavbarComp, AvatarComp, ChatComp },
  setup() {
    const store = useStore();
    return {
      store,
    };
  },
});
</script>
<template>
  <div class="home w-full h-screen">
    <NavbarComp class="z-50 fixed w-full bg-black" />
    <div id="main-display" class="bg-black">
      <div class="z-0 w-full h-screen mt-24">
        <AvatarComp class="h-screen" />
      </div>
      <div class="w-full h-screen">
        <ChatComp />
      </div>
    </div>
  </div>
</template>
