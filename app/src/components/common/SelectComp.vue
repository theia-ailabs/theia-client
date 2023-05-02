<template>
  <select
    :value="selectedValue"
    class="mt-1 w-40 py-1 px-4 text-lg text-center tracking-widest rounded-3xl mx-22 border inner shadow-inner bg-transparent text-transparent bg-clip-text bg-gradient-to-r"
    :class="[
      store.dark ? 'bg-black/70 text-gray-100' : 'bg-white/70 text-gray-900',
      `border-${store.primaryColor}`,
      `shadow-${store.secondaryColor}`,
      `from-${store.primaryColor} to-${store.secondaryColor}`,
    ]"
    @change="updateValue($event.target.value)"
  >
    <option v-for="(option, index) in options" :key="index" :value="option">
      {{ option }}
    </option>
  </select>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import useStore from "@/services/store";

export default defineComponent({
  props: {
    target: String,
    options: Array,
  },
  setup(props, { emit }) {
    const store = useStore();
    const selectedValue = ref(props.target);

    watch(
      () => props.target,
      (newValue) => {
        selectedValue.value = newValue;
      }
    );

    function updateValue(newValue: string) {
      selectedValue.value = newValue;
      emit("update-target", newValue);
    }

    return {
      store,
      selectedValue,
      updateValue,
    };
  },
});
</script>
