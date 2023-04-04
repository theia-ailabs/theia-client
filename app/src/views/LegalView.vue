<script lang="ts">
import { defineComponent } from "vue";
import NavbarComp from "../components/NavbarComp.vue";
import useStore from "../services/store";

export default defineComponent({
  components: { NavbarComp },
  setup() {
    const store = useStore();
    return {
      store,
    };
  },
});
</script>
<template>
  <div class="m-0">
    <NavbarComp />
    <p>This is the legal page</p>
  </div>
</template>
