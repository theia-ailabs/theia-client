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
    const switchUserModal = () => {
      store.userModal = !store.userModal;
    }
    const switchAvatarModal = () => {
      store.avatarModal = !store.avatarModal;
    }
    const switchConnectionModal = () => {
      store.connectionModal = !store.connectionModal;
    }
    return {
      store,
      switchUserModal,
      switchAvatarModal,
      switchConnectionModal
    };
  },
});
</script>
<template>
  <teleport to="body">
    <notifications position="top left" class="mt-2" animation-type="velocity" />
    <div :class="store.settingsModal ? 'block' : 'hidden'">
      <h1 class="text-white">USER SETTINGS</h1>
      <button
      class="rounded-full h-8 w-8 m-2 flex justify-center items-center shadow-xl"
      @click="switchUserModal"
      :class="
        store.dark
          ? 'bg-white/10 shadow-gray-700 border-white/20 hover:bg-gray-600 text-white'
          : 'bg-white hover:bg-gray-200 border-black/20 text-gray-600'
      "
    ></button>
      <UserSettings v-if="store.userModal ? 'block' : 'hidden'" />
      <h1>THEIA SETTINGS</h1>
      <button
      class="rounded-full h-8 w-8 m-2 flex justify-center items-center shadow-xl"
      @click="switchAvatarModal"
      :class="
        store.dark
          ? 'bg-white/10 shadow-gray-700 border-white/20 hover:bg-gray-600 text-white'
          : 'bg-white hover:bg-gray-200 border-black/20 text-gray-600'
      "
    ></button>
      <AvatarSettings v-if="store.avatarModal ? 'block' : 'hidden'" />
      <h1>CONNECTIONS SETTINGS</h1>
      <button
      class="rounded-full h-8 w-8 m-2 flex justify-center items-center shadow-xl"
      @click="switchConnectionModal"
      :class="
        store.dark
          ? 'bg-white/10 shadow-gray-700 border-white/20 hover:bg-gray-600 text-white'
          : 'bg-white hover:bg-gray-200 border-black/20 text-gray-600'
      "
    ></button>
      <ConnectionsSettings v-if="store.connectionModal ? 'block' : 'hidden'" />
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
