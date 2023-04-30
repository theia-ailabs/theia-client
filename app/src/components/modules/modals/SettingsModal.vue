<script lang="ts">
import { defineComponent } from "vue";
import UserSettings from "../settings/UserSettings.vue";
import AvatarSettings from "../settings/AvatarSettings.vue";
import ConnectionsSettings from "../settings/ConnectionsSettings.vue";
import useStore from "../../../services/store";

export default defineComponent({
  components: {},
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
    <div :class="store.settingsModal? 'block' : 'hidden'">
      <div
        ref="modal-backdrop"
        id="settings-modal"
        class="fixed inset-0 overflow-y-auto bg-opacity-50"
        :class="
          store.dark ? 'bg-gray-900 text-white/80' : 'bg-black/80 text-gray-700'
        "
      >
        <div class="flex items-center justify-center min-h-screen text-center">
          <div
            class="absolute py-24 m-6 sm:w-1/3 rounded-xl text-center overflow-hidden border shadow-md p-8 flex flex-col justify-center"
            :class="[
              store.dark
                ? 'bg-black/70 text-gray-100'
                : 'bg-white/70 text-gray-900',
              `border-${store.primaryColor}`,
              `shadow-${store.secondaryColor}`,
            ]"
          >
            <button
              @click="store.settingsModal = false"
              class="absolute text-white/80 top-6 right-6 rounded-full border border-gray-600 px-[10px] pb-[4px] hover:text-white hover:bg-slate-900 hover:border-white/50"
            >
              x
            </button>
            <h1 class="m-4 text-lg sm:text-base text-gray-400 animate-pulse">
              CUSTOMIZE USER
            </h1>
            <h1 class="m-4 text-lg sm:text-base text-gray-400 animate-pulse">
              CUSTOMIZE THEIA
            </h1>
            <h1 class="m-4 text-lg sm:text-base text-gray-400 animate-pulse">
              CUSTOMIZE CONNECTIONS
            </h1>
            <div class="flex justify-center w-full px-4">
              <input
                type="text"
                id="ainame"
                key="ainame"
                placeholder="Theia"
                v-model="store.userProfile"
                class="mt-4 w-96 py-1 px-4 text-lg text-center tracking-widest rounded-3xl mx-22 border inner shadow-inner bg-transparent text-transparent bg-clip-text bg-gradient-to-r"
                :class="[
                  store.dark
                    ? 'bg-black/70 text-gray-100'
                    : 'bg-white/70 text-gray-900',
                  `border-${store.primaryColor}`,
                  `shadow-${store.secondaryColor}`,
                  `from-${store.primaryColor} to-${store.secondaryColor}`,
                ]"
              />
            </div>
            <div
              class="grid grid-cols-2 py-2 mx-2 sm:mx-4 md:mx-8 ml-2 sm:ml-4 md:ml-8 font-semibold text-gray-400 justify-center align-center align-middle"
            >
              <div class="flex mt-3 justify-center">Primary Color</div>
              <div class="flex justify-center">
                <Color1Button />
              </div>
              <div class="flex justify-center mt-3">Secondary Color</div>
              <div class="flex justify-center">
                <Color2Button />
              </div>
            </div>
            <div class="flex w-full justify-center">
              <button
                class="m-4 mt-8 w-24 max-w-24 p-3 rounded-3xl uppercase text-sm font-bold border border-gray-500 shadow-sm text-transparent bg-clip-text bg-gradient-to-r"
                :class="[
                  store.dark
                    ? 'bg-black/70 text-gray-100'
                    : 'bg-white/70 text-gray-900',
                  `hover:border-${store.primaryColor}`,
                  `hover:shadow-${store.secondaryColor}`,
                  `from-${store.primaryColor} to-${store.secondaryColor}`,
                ]"
                @click="store.settingsModal = false"
              >
                CANCEL
              </button>
              <router-link
                to="/theia"
                class="m-4 mt-8 w-24 max-w-24 p-3 rounded-3xl uppercase text-sm font-bold border border-gray-500 shadow-sm text-transparent bg-clip-text bg-gradient-to-r"
                :class="[
                  store.dark
                    ? 'bg-black/70 text-gray-100'
                    : 'bg-white/70 text-gray-900',
                  `hover:border-${store.primaryColor}`,
                  `hover:shadow-${store.secondaryColor}`,
                  `from-${store.primaryColor} to-${store.secondaryColor}`,
                ]"
                @click="[store.reAvatar(), (store.settingsModal = false)]"
              >
                SAVE
              </router-link>
            </div>
          </div>
        </div>
      </div>
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
  z-index: 9999 !important;
}
</style>
