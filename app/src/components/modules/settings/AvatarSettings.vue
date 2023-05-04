<script lang="ts">
import { defineComponent } from "vue";
import Color1Button from "../buttons/Color1Button.vue";
import Color2Button from "../buttons/Color2Button.vue";
import useStore from "../../../services/store";
import InputComp from "../inputs/InputComp.vue";
import ModeButton from "../buttons/ModeButton.vue";

export default defineComponent({
  components: {
    Color1Button,
    Color2Button,
    InputComp,
    ModeButton,
  },
  setup() {
    const store = useStore();
    function updateMode(value: string) {
      store.avatarMode = value;
    }
    const setupObject: {
      store: typeof store;
      updateMode: (value: string) => void;
    } = {
      store,
      updateMode,
    };

    return setupObject;
  },
});
</script>
<template>
  <teleport to="body">
    <notifications position="top left" class="mt-2" animation-type="velocity" />
    <div>
      <div
        ref="modal-backdrop"
        id="avatar-settings"
        class="fixed inset-0 overflow-y-auto bg-opacity-50"
        :class="
          store.dark ? 'bg-gray-900 text-white/80' : 'bg-black/80 text-gray-700'
        "
      >
        <div class="flex items-center justify-center min-h-screen text-center">
          <div
            class="absolute py-24 m-6 rounded-xl text-center overflow-hidden border shadow-md p-8 flex flex-col justify-center"
            :class="[
              store.dark
                ? 'bg-black/70 text-gray-100'
                : 'bg-white/70 text-gray-900',
              `border-${store.primaryColor}`,
              `shadow-${store.secondaryColor}`,
            ]"
          >
            <button
              @click="store.avatarModal = false"
              class="absolute text-white/80 top-6 right-6 rounded-full border border-gray-600 px-[10px] pb-[4px] hover:text-white hover:bg-slate-900 hover:border-white/50"
            >
              x
            </button>
            <h1 class="mx-4 text-lg sm:text-base text-gray-400 animate-pulse">
              CUSTOMIZE THEIA
            </h1>
            <div>
              <p class="mt-3 text-xs sm:text-sm text-gray-400 animate-pulse">
                Avatar Colors
              </p>
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
            </div>
            <p class="mt-3 text-xs sm:text-sm text-gray-400 animate-pulse">
              Avatar Style
            </p>
            <div class="mx-auto">
              <ModeButton
                :mode="store.avatarMode"
                @update-mode="updateMode($event)"
              />
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
                @click="store.avatarModal = false"
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
                @click="[store.reAvatar(), (store.avatarModal = false)]"
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
#avatar-settings {
  z-index: 9999 !important;
}
</style>
