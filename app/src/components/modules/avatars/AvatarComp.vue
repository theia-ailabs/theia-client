<template>
  <div
    class="z-40 fixed h-screen w-screen"
    :class="store.dark ? 'bg-black/90' : 'bg-white/90'"
  >
    <LiquidBody :key="store.rerenderAvatar" />
    <div
      class="fixed bottom-30 z-50 text-xl"
      :class="[store.dark ? 'text-white' : 'text-black']"
    >
      Thinking...
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import LiquidBody from "./modules/avatars/liquid/LiquidBody.vue";
// import LiquidTalk from "./modules/avatars/liquid/LiquidTalk.vue";
import useStore from "@/services/store";

export default defineComponent({
  components: { LiquidBody },
  setup() {
    const store = useStore();

    return {
      store,
    };
  },
});
</script>
