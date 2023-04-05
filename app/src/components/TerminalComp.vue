<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    let i = 1;
    const intervalId = setInterval(() => {
      const div = document.getElementById(`appear${i}`);
      if (div) {
        div.style.display = "block";
        i++;
      } else {
        clearInterval(intervalId);
      }
    }, 3000);
  },
});
</script>
<template>
  <div
    class="workspace border-none w-full absolute top-[75%] flex justify-center align-middle text-center my-0 mx-auto bg-transparent"
  >
    <!-- <app-svg-spacetravel /> -->
    <div class="container-text w-full">
      <div id="appear1" style="display: none">
        <a href="/"
          >Connecting to Theia Systems...&nbsp;&nbsp;<span>&nbsp;</span></a
        >
      </div>
      <div id="appear2" style="display: none">
        <a href="/"
          >Confirming human identity...&nbsp;&nbsp;<span>&nbsp;</span></a
        >
      </div>
      <div id="appear3" style="display: none">
        <a href="/">Connected!&nbsp;&nbsp;<span>&nbsp;</span></a>
      </div>
    </div>
  </div>
</template>
<style scoped>
.workspace {
  font-family: "Orbitron", monospace;
  font-size: small;
  box-shadow: none !important;
  z-index: 9000 !important;
}
</style>
