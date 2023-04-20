<template>
  <div style="max-width: 250px">
    <Vue3WaveAudioPlayer
      :wave_width="250"
      :wave_height="40"
      wave_type="mirror"
      :option="{
        src: 'https://peregrine-results.s3.amazonaws.com/pigeon/NhiiE61uq7D09dGYNN_0.mp3',
        title: 'your-audio-title',
        coverImage: 'https://your-cover-image.png',
      }"
    />
    <!-- optional wave_options -->
    <Vue3WaveAudioPlayer
      :wave_width="250"
      :wave_height="40"
      :wave_options="{ samples: 50 }"
      :load_audio_onmount="false"
      :option="{
        src: 'https://peregrine-results.s3.amazonaws.com/pigeon/NhiiE61uq7D09dGYNN_0.mp3',
        title: 'your-audio-title',
        coverImage: 'https://your-cover-image.png',
      }"
    />
    <Vue3WaveAudioPlayer
      :wave_width="250"
      :wave_height="40"
      :wave_options="{ samples: 40, type: 'steps', width: 192, height: 40 }"
      :option="{
        src: 'https://peregrine-results.s3.amazonaws.com/pigeon/NhiiE61uq7D09dGYNN_0.mp3',
        title: 'your-audio-title',
        coverImage: 'https://your-cover-image.png',
      }"
    />
  </div>
</template>
<script lang="ts">
import Vue3WaveAudioPlayer from "vue3-wave-audio-player";

export default {
  components: {
    Vue3WaveAudioPlayer,
  },
};
</script>
