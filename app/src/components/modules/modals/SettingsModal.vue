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
    <div :class="store.settingsModal ? 'block' : 'hidden'">
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
            <div id="user" class="flex align-center justify-center">
              <h1 class="m-4 text-lg sm:text-base text-gray-400 animate-pulse">
                CUSTOMIZE USER
              </h1>
              <button
                class="rounded-full h-8 w-8 m-2 flex justify-right items-center shadow-xl"
                :class="
                  store.dark
                    ? 'bg-white/10 shadow-gray-700 border-white/20 hover:bg-gray-600 text-white'
                    : 'bg-white hover:bg-gray-200 border-black/20 text-gray-600'
                "
              ></button>
            </div>
            <section id="theia" class="flex align-center justify-center">
              <h1
                class="m-4 text-lg sm:text-base text-gray-400 animate-pulse justify-start"
              >
                CUSTOMIZE THEIA
              </h1>
              <button
                class="rounded-full h-8 w-8 m-2 flex justify-end items-center shadow-xl"
                :class="
                  store.dark
                    ? 'bg-white/10 shadow-gray-700 border-white/20 hover:bg-gray-600 text-white'
                    : 'bg-white hover:bg-gray-200 border-black/20 text-gray-600'
                "
              ></button>
            </section>
            <section id="connection" class="flex align-center justify-center">
              <h1 class="m-4 text-lg sm:text-base text-gray-400 animate-pulse">
                CUSTOMIZE CONNECTIONS
              </h1>
              <button
                class="rounded-full h-8 w-8 m-2 flex justify-center items-center shadow-xl"
                :class="
                  store.dark
                    ? 'bg-white/10 shadow-gray-700 border-white/20 hover:bg-gray-600 text-white'
                    : 'bg-white hover:bg-gray-200 border-black/20 text-gray-600'
                "
              ></button>
            </section>
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
