<template>
  <input
    type="text"
    :placeholder="target"
    :target="target"
    class="mt-1 py-1 px-4 text-lg text-center tracking-widest rounded-3xl mx-22 border inner shadow-inner bg-transparent text-transparent bg-clip-text bg-gradient-to-r"
    :class="[
      inputWidth,
      store.dark ? 'bg-black/70 text-gray-100' : 'bg-white/70 text-gray-900',
      `border-${store.primaryColor}`,
      `shadow-${store.secondaryColor}`,
      `from-${store.primaryColor} to-${store.secondaryColor}`,
    ]"
    @input="updateTarget($event.target.value)"
  />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import useStore from "@/services/store";

export default defineComponent({
  props: {
    target: String,
    inputWidth: {
      type: String,
      default: "w-32 sm:w-44",
    },
  },
  setup(props, { emit }) {
    const store = useStore();

    function updateTarget(value: any) {
      emit("update-target", value);
    }
    return {
      store,
      updateTarget,
    };
  },
});
</script>
