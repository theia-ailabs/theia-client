<script lang="ts">
import { defineComponent } from "vue";
import NavbarComp from "../components/NavbarComp.vue";
import AvatarComp from "../components/AvatarComp.vue";
import ChatComp from "../components/ChatComp.vue";
import FooterComp from "../components/FooterComp.vue";
import useStore from "../services/store";

export default defineComponent({
  components: { NavbarComp, AvatarComp, ChatComp, FooterComp },
  setup() {
    const store = useStore();
    return {
      store,
    };
  },
});
</script>
<template>
  <div
    class="flex flex-col min-h-screen"
    :class="store.dark ? 'bg-white' : 'bg-white'"
  >
    <div class="flex-grow overflow-auto">
      <NavbarComp />
      <AvatarComp />
      <ChatComp />
    </div>
    <FooterComp />
  </div>
</template>
<style scoped>
.grid-template-rows-layout {
  grid-template-rows: 1fr auto;
}
</style>
