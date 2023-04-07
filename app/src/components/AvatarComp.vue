<template>
  <div class="z-0 fixed bg-white">
    <div v-if="listening" class="bg-white">
      <button class="z-50 w-screen h-screen bg-white" @click="toTalk">
        <LiquidBody />Hi
      </button>
    </div>
    <div v-if="talking">
      <button class="z-10 cursor-pointer" @click="toListen">
        <LiquidTalk />Hellooooo
      </button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, Ref } from "vue";
import LiquidBody from "../modules/avatars/liquid/LiquidBody.vue";
import LiquidTalk from "../modules/avatars/liquid/LiquidTalk.vue";
import useStore from "../services/store";

export default defineComponent({
  components: { LiquidBody, LiquidTalk },
  setup() {
    const store = useStore();
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
