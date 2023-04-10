<template>
  <div ref="waveform"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted } from "vue";
import WaveSurfer from "wavesurfer.js";
import MicrophonePlugin from "wavesurfer.js/dist/plugin/wavesurfer.microphone.min.js";

export default defineComponent({
  setup() {
    let wavesurfer: WaveSurfer | null = null;

    onMounted(() => {
      // Get the container element for the waveform
      const waveformContainer = document.getElementById(
        "waveform"
      ) as HTMLDivElement;

      // Create the WaveSurfer instance
      wavesurfer = WaveSurfer.create({
        container: waveformContainer,
        waveColor: "black",
        interact: false,
        cursorWidth: 0,
        plugins: [MicrophonePlugin.create()],
      });

      // When the microphone is ready, log the stream to the console
      wavesurfer.microphone.on("deviceReady", (stream: MediaStream) => {
        console.log("Device ready!", stream);
      });

      // When there is an error with the microphone, log the error code to the console
      wavesurfer.microphone.on("deviceError", (code: string) => {
        console.warn("Device error: " + code);
      });

      // Start the microphone
      wavesurfer.microphone.start();
    });

    // Clean up the WaveSurfer instance on unmount
    onUnmounted(() => {
      if (wavesurfer) {
        wavesurfer.destroy();
        wavesurfer = null;
      }
    });
  },
});
</script>
