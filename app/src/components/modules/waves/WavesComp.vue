<template>
  <vue-wave-surfer :src="file" :options="options"></vue-wave-surfer>
</template>
<script lang="ts">
export default {
  data() {
    return {
      options: {},
      file: "https://peregrine-results.s3.amazonaws.com/pigeon/8CCgMLeZiZnzrrELvl_0.mp3",
    };
  },
};
</script>
