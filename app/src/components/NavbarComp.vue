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
  <nav class="z-50 fixed pt-4 flex bg-transparent justify-center w-full top-0">
    <button
      :click="store.scrollTop()"
      class="relative flex bg-transparent justify-center items-center py-4"
    >
      <img class="h-16" src="./img/png/logo3.png" alt="logo" />
    </button>
  </nav>
</template>
