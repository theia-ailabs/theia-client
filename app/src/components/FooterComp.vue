<script lang="ts">
import { ref } from "vue";
import { getTime, getDate } from "../utils";
import useStore from "../services/store";
import SettingsButtons from "../modules/buttons/SettingsButtons.vue";

export default {
  components: {
    SettingsButtons,
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
    class="z-50 relative w-full text-center text-xs text-gray-400"
    :class="
      store.dark
        ? 'bg-black/90 shadow-gray-700 border-gray-200 text-gray-200'
        : 'bg-white/90 shadow-gray-300 border-gray-900 text-gray-800'
    "
  >
    <settings-buttons class="mt-4" />
    <!-- UTC datetime -->
    <div class="text-[11px]">{{ date }} {{ time }} UTC</div>
    <!-- Credits -->
    <div class="py-4 -mb-2">Made with {{ store.heart }} by Theia Labs</div>
  </div>
</template>
<!-- <style scoped>
.z-90 {
  z-index: 90 !important;
}
</style> -->
