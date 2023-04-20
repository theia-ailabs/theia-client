<script lang="ts">
import { defineComponent, ref } from "vue";
import { Vector3Key } from "../../../interfaces";
import useStore from "../../../services/store";

export default defineComponent({
  setup() {
    const store = useStore();
    const axis = ref("z");
    function onClick(): void {
      if (axis.value === "z") axis.value = "x";
      else if (axis.value === "x") axis.value = "y";
      else if (axis.value === "y") axis.value = "z";
      store.avatarConfig.colorDir = axis.value as Vector3Key;
      store.reAvatar();
    }
    return {
      store,
      axis,
      onClick,
    };
  },
});
</script>
<template>
  <div>
    <button
      class="rounded-full h-8 w-8 m-2 flex justify-center items-center shadow-xl font-light"
      @click="onClick()"
      :class="
        store.dark
          ? 'bg-white/10 shadow-gray-700 border-white/20 hover:bg-gray-600 text-white'
          : 'bg-white hover:bg-gray-200 border-black/20 text-gray-600'
      "
    >
      {{ axis }}
    </button>
  </div>
</template>
<style scoped>
h1 {
  font-size: 40px;
}
</style>
