<template>
  <teleport to="body">
    <notifications position="top left" class="mt-2" animation-type="velocity" />
    <div>
      <PrivacyView />
      <form>
        <input type="checkbox" required />
        <p>Acepto la Política de privacidad.</p>
        <button type="button">Enviar</button>
      </form>
    </div>
  </teleport>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import PrivacyView from "@/views/PrivacyView.vue";
import useStore from "@/services/store";

export default defineComponent({
  setup() {
    const store = useStore();
    return {
      store,
    };
  },
  components: { PrivacyView },
});
</script>
