<template>
  <WaveSurferVue :src="file" :options="options"></WaveSurferVue>
</template>
<script lang="ts">
import WaveSurferVue from "wavesurfer.js-vue";

export default {
  components: {
    WaveSurferVue,
  },
  data() {
    return {
      options: {},
      file: "@/assets/sounds/voice-1.mp3",
    };
  },
};
</script>
