<script lang="ts">
import { ref } from "vue";
import { getTime, getDate } from "../utils";
import FooterButtons from "./modules/buttons/FooterButtons.vue";
import useStore from "../services/store";

export default {
  components: {
    FooterButtons,
  },
  setup() {
    const store = useStore();
    const time = ref("");
    const date = ref("");

    setInterval(() => {
      time.value = getTime();
      date.value = getDate();
    }, 1000);
    return {
      store,
      time,
      date,
    };
  },
};
</script>
<template>
  <div
    class="z-50 relative bottom-0 w-full text-center text-xs text-gray-400"
    :class="
      store.dark
        ? 'bg-black/90 shadow-gray-700 border-gray-200 text-gray-200'
        : 'bg-white/90 shadow-gray-300 border-gray-900 text-gray-800'
    "
  >
    <FooterButtons class="pt-6" />
    <!-- UTC datetime -->
    <div class="-mt-2 text-[11px]">{{ date }} {{ time }} UTC</div>
    <!-- Credits -->
    <div class="py-4 pl-6 -mb-2">
      Made with {{ store.heart1 + store.heart2 }} by Theia Labs
    </div>
    <!-- Legal -->
    <div class="flex justify-center pl-3 pb-3">
      <div class="mt-1 mb-2 mx-2" :class="`hover:text-${store.primaryColor}`">
        <router-link to="/legal">Legal</router-link>
      </div>
      <!-- Privacy -->
      <div class="mt-1 mb-2 mx-2" :class="`hover:text-${store.secondaryColor}`">
        <router-link to="/legal">Legal</router-link>
      </div>
    </div>
  </div>
</template>
