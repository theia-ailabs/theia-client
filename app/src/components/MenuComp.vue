<script lang="ts">
import { defineComponent } from "vue";
import useStore from "../services/store";

export default defineComponent({
  setup() {
    const store = useStore();
    return {
      store,
    };
  },
});
</script>
<template>
  <div class="fixed bottom-12 w-full">
    <div class="flex flex-wrap justify-center bg-transparent w-full">
      <button
        @click="store.switchShowChat()"
        class="p-1 px-[7px] mx-2 rounded-full border"
        :class="store.dark ? 'border-white/50' : 'border-black/50'"
      >
        💬
      </button>
      <button
        @click="store.switchShowChat()"
        class="p-1 px-[7px] mx-2 rounded-full border"
        :class="store.dark ? 'border-white/50' : 'border-black/50'"
      >
        😄
      </button>
      <button
        @click="store.switchShowChat()"
        class="p-1 px-[7px] mx-2 rounded-full border"
        :class="store.dark ? 'border-white/50' : 'border-black/50'"
      >
        🗓️
      </button>
      <button
        @click="store.switchShowChat()"
        class="p-1 px-[7px] mx-2 rounded-full border"
        :class="store.dark ? 'border-white/50' : 'border-black/50'"
      >
        📥
      </button>
    </div>
  </div>
</template>
<style scoped>
h1 {
  font-size: 40px;
}
</style>
