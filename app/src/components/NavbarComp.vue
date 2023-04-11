<script lang="ts">
import { defineComponent } from "vue";
import useStore from "../services/store";
// import WavesComp from "./WavesComp.vue";
import InputComp from "./InputComp.vue";
import logo from "../assets/img/png/logo.png";
import profile from "../assets/img/png/profile.png";

export default defineComponent({
  components: { InputComp },
  setup() {
    const store = useStore();
    return {
      store,
      logo,
      profile,
    };
  },
});
</script>
<template>
  <nav
    class="z-50 fixed pt-4 flex justify-between w-full top-0"
    :class="store.dark ? 'bg-black/90' : 'bg-white/90'"
  >
    <div class="sm:ml-12 -mt-4">
      <button :click="store.scrollTop()">
        <img class="h-12 lg:h-14" :src="logo" alt="Theia logo" />
      </button>
    </div>
    <!-- <div>
      <WavesComp />
    </div> -->
    <div class="flex -mt-4">
      <InputComp />
    </div>
    <div class="mr-12 -mt-1">
      <button :click="store.scrollTop()">
        <img class="h-10 lg:h-12" :src="profile" alt="Theia logo" />
      </button>
    </div>
  </nav>
</template>
<style scoped>
nav {
  z-index: 100 !important;
}
</style>
