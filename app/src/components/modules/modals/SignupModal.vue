<script lang="ts">
import { defineComponent } from "vue";
import useStore from "../../../services/store";

export default defineComponent({
  setup() {
    const store = useStore();
    function goBack(): void {
      store.connect();
    }
    function signUp(): void {
      store.connect();
    }
    return {
      store,
      goBack,
      signUp,
    };
  },
});
</script>
<template>
  <teleport to="body">
    <notifications position="top left" class="mt-2" animation-type="velocity" />
    <div :class="store.signup ? 'block' : 'hidden'">
      <div
        ref="modal-backdrop"
        class="fixed z-40 inset-0 overflow-y-auto bg-opacity-50"
        :class="
          store.dark ? 'bg-gray-900 text-gray-100' : 'bg-gray-900 text-gray-700'
        "
      >
        <div
          class="z-22 flex items-center justify-center min-h-screen text-center"
        >
          <div
            class="z-90 min-h-[900px] m-2 sm:w-1/3 rounded-lg text-center overflow-hidden border border-white/20 shadow-xl shadow-yellow-500 p-8 flex flex-col justify-center"
            :class="
              store.dark
                ? 'bg-gray-900 text-gray-100'
                : 'bg-gray-100 text-gray-700'
            "
          >
            <p class="mt-8 text-xs sm:text-sm">WALLET ACCOUNT:</p>
            <p class="m-2 text-sm sm:text-md text-gray-400 tracking-widest">
              {{ store.pubkey }}
            </p>
            <p class="mt-4 text-xs sm:text-sm">YOUR USERNAME:</p>
            <input
              trype="text"
              id="username"
              key="username"
              v-model="store.username"
              v-on="store.searchUser()"
              class="mt-4 text-lg py-1 text-center px-4 sm:px-8 mx-16 sm:mx-32 tracking-widest font-semibold rounded-3xl mx-22 border border-green-500 inner shadow-inner-xl bg-transparent text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-yellow-400"
              :class="store.usernameAv ? 'text-transparent' : 'text-red-500'"
            />
            <div v-if="store.username">
              <p
                v-if="store.usernameAv"
                class="mt-4 px-8 uppercase text-xs tracking-widest text-green-500"
              >
                IS AVAILABLE
              </p>
              <p
                v-else
                class="mt-4 px-8 uppercase text-xs tracking-widest text-red-500"
              >
                INVALID OR IN-USE USERNAME
              </p>
            </div>
            <button
              class="m-2 mt-8 mx-12 sm:mx-36 p-3 rounded-3xl uppercase text-xl font-bold border border-gray-500 hover:border-green-600 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-yellow-400"
              @click="signUp()"
            >
              <router-link to="/mint" />
              SIGN UP 🚀
            </button>
            <button
              class="m-2 mx-12 sm:mx-36 p-3 rounded-3xl uppercase text-xl border border-gray-500 hover:border-red-600 text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-400"
              @click="goBack"
            >
              👈 GO BACK
            </button>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>
<style scoped>
h1 {
  font-size: 40px;
}
</style>
