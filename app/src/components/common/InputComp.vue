<template>
    <input
                type="text"
                :placeholder="target"
                v-model="target"
                class="mt-1 w-96 py-1 px-4 text-lg text-center tracking-widest rounded-3xl mx-22 border inner shadow-inner bg-transparent text-transparent bg-clip-text bg-gradient-to-r"
                :class="[
                  store.dark
                    ? 'bg-black/70 text-gray-100'
                    : 'bg-white/70 text-gray-900',
                  `border-${store.primaryColor}`,
                  `shadow-${store.secondaryColor}`,
                  `from-${store.primaryColor} to-${store.secondaryColor}`,
                ]"
              />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import useStore from '@/services/store';

export default defineComponent({
    props: {
        target: String,
    },
    setup() {
        const store = useStore()
        return {
            store
        }
    },
});
</script>