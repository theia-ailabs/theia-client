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
    class="z-50 relative bottom-0 -mt-4 pt-2 w-full text-center text-xs text-gray-400"
    :class="
      store.dark
        ? 'bg-black shadow-gray-700 border-gray-200 text-gray-200'
        : 'bg-white shadow-gray-300 border-gray-900 text-gray-800'
    "
  >
    <FooterButtons class="pt-12" />
    <!-- UTC datetime -->
    <!-- <div class="-mt-2 py-2 text-[12px]">{{ date }} {{ time }} UTC</div> -->
    <!-- Credits -->
    <div class="py-4 -mb-2">
      <span class="pl-4">Made with</span>
      <span class="pl-5">{{ store.heart1 }}</span>
      <span class="pl-4">{{ store.heart2 }}</span>
      <span class="pl-3"
        ><a href="https://github.com/theia-ailabs" target="_blank"
          >by Theia Labs</a
        ></span
      >
    </div>
    <div class="flex justify-center mt-2 pb-3 pr-4">
      <!-- Legal -->
      <div
        class="mt-1 mb-2 mx-2 pl-7"
        :class="`hover:text-${store.primaryColor}`"
      >
        <router-link to="/legal">Legal</router-link>
      </div>
      <!-- Privacy -->
      <div
        class="mt-1 mb-2 mx-2 pl-7"
        :class="`hover:text-${store.secondaryColor}`"
      >
        <router-link to="/privacy">Privacy</router-link>
      </div>
    </div>
  </div>
</template>
