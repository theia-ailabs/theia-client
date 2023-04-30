<script lang="ts">
import { defineComponent } from "vue";
import UserSettings from "../settings/UserSettings.vue";
import AvatarSettings from "../settings/AvatarSettings.vue";
import ConnectionsSettings from "../settings/ConnectionsSettings.vue";
import useStore from "../../../services/store";

export default defineComponent({
  components: {
    UserSettings,
    AvatarSettings,
    ConnectionsSettings,
  },
  setup() {
    const store = useStore();
    return {
      store,
    };
  },
});
</script>
<template>
  <teleport to="body">
    <notifications position="top left" class="mt-2" animation-type="velocity" />
    <div :class="store.settingsModal ? 'block' : 'hidden'">
      <h1 class="text-white">USER SETTINGS</h1>
      <UserSettings />
      <h1>THEIA SETTINGS</h1>
      <AvatarSettings />
      <h1>CONNECTIONS SETTINGS</h1>
      <ConnectionsSettings />
    </div>
  </teleport>
</template>
<style scoped>
input:focus {
  border: none !important;
}
input:active {
  border: none !important;
}
#settings-modal {
  z-index: 9000 !important;
}
</style>
