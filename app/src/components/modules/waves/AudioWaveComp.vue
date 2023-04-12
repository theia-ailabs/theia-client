<template>
  <div
    class="flex bg-white/10 shadow-inner shadow-purple-500/40 border border-gray-500/30 rounded-xl m-2 mt-4 p-2"
  >
    <div id="waveform" class="mt-1 w-full h-full text-purple-500"></div>
    <div id="wave-timeline" class="h-full"></div>

    <div
      class="mt-1 bg-gray-800 text-white rounded-full w-12 h-8 flex items-center ml-2 justify-center focus:outline-none"
      @click="onPlay()"
    >
      <div v-if="!isPlaying">
        <button @click="onPlay()">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7V5z"
            />
          </svg>
        </button>
      </div>
      <div v-if="isPlaying">
        <button @click="onStop()">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 4h3v16H6V4zM15 4h3v16h-3V4z"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, Ref } from "vue";
import WaveSurfer from "wavesurfer.js";
import TimelinePlugin from "wavesurfer.js/dist/plugin/wavesurfer.timeline.min.js";
import url from "./../../../assets/sounds/voice-1.mp3";

export default defineComponent({
  name: "AudioWave",
  props: {
    audioUrl: {
      type: String,
      default:
        "https://peregrine-results.s3.amazonaws.com/pigeon/8CCgMLeZiZnzrrELvl_0.mp3",
    },
    audioBuffer: {
      type: AudioBuffer,
      default: null,
    },
  },
  setup(props) {
    console.log(props.audioUrl);
    const isPlaying = ref(false);
    const ms = 3000;
    let wave: WaveSurfer;

    onMounted(() => {
      const audio = new Audio(url);
      wave = WaveSurfer.create({
        container: "#waveform",
        waveColor: "violet",
        progressColor: "purple",
        height: "30",
        barGap: "10",
        barHeight: "20",
        plugins: [
          TimelinePlugin.create({
            container: "#wave-timeline",
          }),
        ],
      });
      wave.load(audio);
    });

    function onPlay() {
      isPlaying.value = true;
      wave.play();
      setTimeout(() => {
        onStop();
      }, ms);
    }

    function onStop() {
      isPlaying.value = false;
      wave.stop();
    }

    return {
      isPlaying,
      onPlay,
      onStop,
    };
  },
});
</script>
<style></style>
