<script lang="ts">
import { defineComponent } from "vue";
import useStore from "../services/store";
// import InputComp from "./InputComp.vue";
// import WavesComp from "./WavesComp.vue";
// import WalletsBtn from "./modules/buttons/WalletsButton.vue";

export default defineComponent({
  setup() {
    const store = useStore();
    return {
      store,
    };
  },
  data() {
    return {
      logo: require("../assets/img/png/logo3.png"),
      pfp: require("../assets/img/png/profile.png"),
    };
  },
});
</script>
<template>
  <nav
    class="z-50 fixed pt-4 flex justify-between w-full top-0"
    :class="store.dark ? 'bg-black/90' : 'bg-white/90'"
  >
    <div class="ml-32"></div>
    <div class="m-1">
      <button :click="store.scrollTop()" class="flex justify-center">
        <img class="h-12 lg:h-16" :src="logo" alt="Theia logo" />
      </button>
    </div>
    <div class="flex flex-wrap mx-4 sm:mr-12 -mt-2">
      <!-- <WalletsBtn /> -->
      <button :click="store.scrollTop()">
        <img class="h-10 lg:h-12" :src="pfp" alt="Theia logo" />
      </button>
    </div>
  </nav>
</template>
<style scoped>
nav {
  z-index: 100 !important;
}
</style>
