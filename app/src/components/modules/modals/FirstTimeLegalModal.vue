<template>
  <teleport to="body">
    <notifications position="top left" class="mt-2" animation-type="velocity" />
    <div>
      <LegalView />
      <form>
        <input type="checkbox" required />
        <p>Acepto los Términos de Servicio.</p>
        <button type="button">Enviar</button>
      </form>
    </div>
  </teleport>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import LegalView from "@/views/LegalView.vue";
import useStore from "@/services/store";

export default defineComponent({
  setup() {
    const store = useStore();
    return {
      store,
    };
  },
  components: { LegalView },
});
</script>
