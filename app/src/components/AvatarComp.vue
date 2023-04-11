<template>
  <div class="z-50 fixed bg-white">
    <div v-if="listening" class="bg-white">
      <button class="z-50 w-screen h-screen bg-white" @click="toTalk">
        <LiquidBody />
      </button>
    </div>
    <div :class="talking ? 'block' : 'hidden'">
      <button class="z-10 cursor-pointer bg-white" @click="toListen">
        <LiquidTalk />
      </button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, Ref } from "vue";
import LiquidBody from "../modules/avatars/liquid/LiquidBody.vue";
import LiquidTalk from "../modules/avatars/liquid/LiquidTalk.vue";
// import useStore from "../services/store";

export default defineComponent({
  components: { LiquidBody, LiquidTalk },
  setup() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const store = {} as any; // useStore();
    const listening: Ref<boolean> = ref(true);
    const talking: Ref<boolean> = ref(false);
    function toListen(): void {
      listening.value = true;
      talking.value = false;
    }
    function toTalk(): void {
      console.log("talking");
      talking.value = true;
      listening.value = false;
    }
    return {
      store,
      listening,
      talking,
      toListen,
      toTalk,
    };
  },
});
</script>
