<script lang="ts">
import { defineComponent, ref } from "vue";
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import ModeButton from "../buttons/ModeButton.vue";
import Color1Button from "../buttons/Color1Button.vue";
import Color2Button from "../buttons/Color2Button.vue";
import Vector3Button from "../buttons/Vector3Button.vue";
import useStore from "../../../services/store";

export default defineComponent({
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
    ModeButton,
    Color1Button,
    Color2Button,
    Vector3Button,
  },
  setup() {
    const store = useStore();
    const mode = ref("listening");
    function changeMode(): void {
      if (mode.value === "listening") mode.value = "speaking";
      else if (mode.value === "speaking") mode.value = "sleeping";
      else if (mode.value === "sleeping") mode.value = "listening";
      store.avatarMode = mode.value;
    }
    return {
      store,
      mode,
      changeMode,
    };
  },
});
</script>
<template>
  <div
    class="fixed z-50 h-52 w-full flex justify-center items-center"
    :class="store.settingsModal ? 'block' : 'hidden'"
  >
    <Carousel class="w-96 mt-24 text-white">
      <Slide :key="0" class="w-96">
        <div>
          <div
            v-if="store.avatarMode === 'listening'"
            class="grid grid-cols-6 mx-2 sm:mx-4 md:mx-8 ml-2 sm:ml-4 md:ml-8 font-semibold text-gray-400 justify-center align-center align-middle"
          >
            <ModeButton />
            <Color1Button />
            <Color2Button />
            <Vector3Button />
            <Color2Button />
          </div>
          <div
            v-if="store.avatarMode === 'talking'"
            class="grid grid-cols-6 mx-2 sm:mx-4 md:mx-8 ml-2 sm:ml-4 md:ml-8 font-semibold text-gray-400 justify-center align-center align-middle"
          >
            <ModeButton />
            <Color1Button />
            <Color2Button />
            <Vector3Button />
            <Color2Button />
          </div>
          <div
            v-if="store.avatarMode === 'sleeping'"
            class="grid grid-cols-6 mx-2 sm:mx-4 md:mx-8 ml-2 sm:ml-4 md:ml-8 font-semibold text-gray-400 justify-center align-center align-middle"
          >
            <ModeButton />
            <Color1Button />
            <Color2Button />
            <Vector3Button />
            <Color2Button />
          </div>
        </div>
      </Slide>
      <Slide :key="1">
        <h1 class="mt-14 text-xs sm:text-sm text-gray-400 animate-pulse">
          3D BODY SETTINGS
        </h1>
        <div class="carousel__item">{{ "Hello" }}</div>
      </Slide>

      <template #addons>
        <Navigation class="text-white pb-6" />
        <Pagination class="text-white pb-6" />
      </template>
    </Carousel>
  </div>
</template>
<style>
.carousel__item {
  position: fixed;
  min-height: 200px;
  width: 100%;
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}

.carousel__slide {
  padding: 10px;
  color: gray;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  color: gray;
}

.carousel__prev:hover,
.carousel__next:hover {
  color: gold;
}
</style>
