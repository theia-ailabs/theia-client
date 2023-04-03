<script lang="ts">
import { defineComponent } from "vue";
import AvatarComp from "../components/AvatarComp.vue";
export default defineComponent({
  name: "MainScreen",
  components: {
    AvatarComp,
  },
});
</script>
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <AvatarComp />
  </div>
</template>
