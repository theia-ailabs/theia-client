<template>
  <LoaderComp />
</template>
<script lang="ts">
import LoaderComp from "@/components/modules/loaders/LoaderComp.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { LoaderComp },
});
</script>
<style scoped>
html {
  background-color: black !important;
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
