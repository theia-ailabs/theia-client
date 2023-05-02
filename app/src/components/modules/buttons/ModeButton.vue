<script lang="ts">
import { defineComponent, ref } from "vue";
import useStore from "../../../services/store";

export default defineComponent({
  props: {
    mode: String,
  },
  setup(props, {emit}) {
    const store = useStore();
    const mode = ref("listening");
    function changeMode(): void {
      if (mode.value === "listening") mode.value = "talking";
      else if (mode.value === "talking") mode.value = "sleeping";
      else if (mode.value === "sleeping") mode.value = "listening";
      store.avatarMode = mode.value;
    }
    function updateMode(value: string) {
      emit("update-mode", value);
    }
    return {
      store,
      mode,
      changeMode,
      updateMode
    };
  },
});
</script>
<template>
  <div>
    <button
      class="rounded-full h-8 w-8 m-2 flex justify-center items-center shadow-xl font-light uppercase"
      @click="changeMode()"
      :class="
        store.dark
          ? 'bg-white/10 shadow-gray-700 border-white/20 hover:bg-gray-600 text-white'
          : 'bg-white hover:bg-gray-200 border-black/20 text-gray-600'
      "
      @input="updateMode($event.mode.value)"
    >
      {{ mode }}
    </button>
  </div>
</template>
<style scoped>
h1 {
  font-size: 40px;
}
</style>
