<script lang="ts">
import { defineComponent } from "vue";
import useStore from "../services/store";

export default defineComponent({
  props: {
    src: String,
  },
  setup() {
    const store = useStore();
    function connect(): void {
      store.connect();
    }
    return {
      store,
      connect,
    };
  },
});
</script>
<template>
  <div class="m-2 w-full flex justify-center">
    <audio autoplay controls>
      <source :src="src" type="audio/mpeg" />
      Your browser does not support the audio tag.
    </audio>
  </div>
</template>
<style scoped>
audio {
  background: transparent !important;
  background-color: transparent !important;
}
</style>
