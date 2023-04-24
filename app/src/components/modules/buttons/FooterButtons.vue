<script lang="ts">
import { defineComponent } from "vue";
import LightButton from "./LightButton.vue";
import Color1Button from "./Color1Button.vue";
import Color2Button from "./Color2Button.vue";
import SoundButton from "./SoundButton.vue";

export default defineComponent({
  components: {
    LightButton,
    Color1Button,
    Color2Button,
    SoundButton,
  },
});
</script>
<template>
  <div class="flex justify-center my-4 pt-4">
    <!-- Dark/Light button -->
    <LightButton />
    <!-- Primary Color button -->
    <Color1Button />
    <!-- Secondary Color button -->
    <Color2Button />
    <!-- Sound button -->
    <SoundButton />
  </div>
</template>
