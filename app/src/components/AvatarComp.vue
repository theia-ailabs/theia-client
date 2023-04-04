<script lang="ts">
import { defineComponent, ref, Ref } from "vue";
import useStore from "../services/store";
import LiquidBody from "../modules/avatars/liquid/LiquidBody.vue";
import LiquidTalk from "../modules/avatars/liquid/LiquidTalk.vue";

export default defineComponent({
  components: { LiquidBody, LiquidTalk },
  setup() {
    const store = useStore();
    const talking: Ref<boolean> = ref(false);
    const listening: Ref<boolean> = ref(true);
    function toListen(): void {
      listening.value = true;
      talking.value = false;
    }
    function toTalk(): void {
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
<template>
  <div class="bg-transparent z-0 relative h-screen">
    <div v-if="listening">
      <button :click="toTalk()">
        <LiquidBody />
      </button>
    </div>
    <div v-if="talking">
      <button :click="toListen()">
        <LiquidTalk />
      </button>
    </div>
  </div>
</template>
