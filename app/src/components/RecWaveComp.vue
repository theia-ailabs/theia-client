<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<template>
  <div id="wavesurfer" class="wavesurfer"></div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from "vue";
import WaveSurfer from "wavesurfer.js";

export default defineComponent({
  name: "RecWaveComp",
  setup() {
    let wavesurfer: any;
    onMounted(() => {
      wavesurfer = WaveSurfer.create({
        container: "#waveform",
        waveColor: "black",
        interact: false,
        cursorWidth: 0,
        plugins: [WaveSurfer.microphone.create()],
      });

      wavesurfer.microphone.on("deviceReady", function (stream: any) {
        console.log("Device ready!", stream);
      });
      wavesurfer.microphone.on("deviceError", function (code: any) {
        console.warn("Device error: " + code);
      });

      // start the microphone
      wavesurfer.microphone.start();
    });

    // pause rendering
    //wavesurfer.microphone.pause();

    // resume rendering
    //wavesurfer.microphone.play();

    // stop visualization and disconnect microphone
    //wavesurfer.microphone.stopDevice();

    // same as stopDevice() but also clears the wavesurfer canvas
    //wavesurfer.microphone.stop();

    // destroy the plugin
    //wavesurfer.microphone.destroy();
    return {
      wavesurfer,
    };
  },
});
</script>
<style></style>
