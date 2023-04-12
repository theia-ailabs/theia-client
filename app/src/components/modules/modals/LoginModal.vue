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
      return;
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
    <div :class="store.loginModal ? 'block' : 'hidden'">
      <div
        ref="modal-backdrop"
        id="signup-modal"
        class="fixed inset-0 overflow-y-auto bg-opacity-50"
        :class="
          store.dark ? 'bg-gray-900 text-white/80' : 'bg-black/80 text-gray-700'
        "
      >
        <div class="flex items-center justify-center min-h-screen text-center">
          <div
            class="py-24 m-6 sm:w-1/3 rounded-xl text-center overflow-hidden border border-purple-500/50 shadow-inner shadow-yellow-500/50 p-8 flex flex-col justify-center"
            :class="
              store.dark
                ? 'bg-black/70 text-gray-100'
                : 'bg-white/70 text-gray-700'
            "
          >
            <p class="m-2 text-sm sm:text-md text-gray-400 tracking-widest">
              {{ store.pubkey }}
            </p>
            <p class="mt-4 text-xs sm:text-sm text-gray-400 animate-pulse">
              INSERT USERNAME
            </p>
            <input
              trype="text"
              id="username"
              key="username"
              v-model="store.username"
              v-on="store.searchUser()"
              class="mt-10 py-1 px-4 text-lg text-center tracking-widest rounded-3xl mx-22 border border-purple-500 inner shadow-inner shadow-yellow-500/50 bg-transparent text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-yellow-400"
            />
            <div v-if="store.username">
              <p
                v-if="store.usernameAv"
                class="mt-4 px-8 uppercase text-xs tracking-widest text-green-500"
              >
                CREATE USER @{{ store.username }}
              </p>
              <p
                v-else
                class="mt-4 px-8 uppercase text-xs tracking-widest text-white/50"
              >
                LOGIN WITH USER
                <span
                  class="lowercase bg-transparent text-transparent bg-clip-text bg-gradient-to-l from-purple-600 to-yellow-400"
                  >@{{ store.username }}</span
                >
              </p>
            </div>
            <div class="flex w-full justify-center">
              <router-link
                to="/theia"
                class="m-4 mt-8 w-24 max-w-24 p-3 rounded-3xl uppercase text-sm font-bold border border-gray-500 shadow-sm hover:shadow-yellow-500 hover:border-purple-600 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-yellow-400"
                @click="signUp()"
              >
                GO 🚀
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
#signup-modal {
  z-index: 9999 !important;
}
</style>
