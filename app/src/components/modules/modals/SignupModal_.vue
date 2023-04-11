<!-- <script lang="ts">
import { defineComponent, ref } from "vue";
import { useNotification } from "@kyvg/vue3-notification";
import useStore from "../../services/store";
import {
  searchUsersSocket,
  createUserSocket,
} from "../../services/sockets/user.socket";
import { sqlFilter } from "../../utils";

export default defineComponent({
  setup() {
    const store = useStore();
    const { notify } = useNotification();
    const username = ref("");

    function goBack() {
      store.connected = false;
      store.loggedIn = false;
    }
    function searchUser() {
      const usernameFiltered = sqlFilter(username.value);
      searchUsersSocket(usernameFiltered);
      username.value = usernameFiltered;
      if (username.value.length < 3) {
        store.usernameAv = true;
      }
    }
    async function signUp() {
      if (store.usernameAv) {
        createUserSocket(username.value);
      } else {
        notify({
          title: "Error",
          text: "Invalid username!",
          type: "error",
        });
      }
    }
    return {
      store,
      username,
      goBack,
      searchUser,
      signUp,
      sqlFilter,
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
            <div
              class="py-4 -mt-10 text-center uppercase text-sm tracking-widest font-semibold justify-center"
            >
              <div class="pl-2 pt-2">
                <p class="uppercase text-5xl my-4 tracking-widestfont-semibold">
                  SIGN UP
                </p>
                <p class="uppercase text-3xl my-4 tracking-widestfont-semibold">
                  🎁 GET A FREE $BEEN! 🎉
                </p>
              </div>
            </div>
            <p
              class="mt-4 px-4 uppercase text-2xl tracking-widest font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-yellow-400"
            >
              INSERT A USERNAME TO CREATE AN ACCOUNT AT BEENZER
            </p>
            <p class="mt-8 text-xs sm:text-sm">WALLET ACCOUNT:</p>
            <p class="m-2 text-sm sm:text-md text-gray-400 tracking-widest">
              {{ store.pubkey }}
            </p>
            <p class="mt-4 text-xs sm:text-sm">YOUR USERNAME:</p>
            <input
              trype="text"
              id="username"
              key="username"
              v-model="username"
              v-on="searchUser()"
              class="mt-4 text-lg py-1 text-center px-4 sm:px-8 mx-16 sm:mx-32 tracking-widest font-semibold rounded-3xl mx-22 border border-green-500 inner shadow-inner-xl bg-transparent text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-yellow-400"
              :class="store.usernameAv ? 'text-transparent' : 'text-red-500'"
            />
            <div v-if="username">
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
<style lang="scss">
input {
  background-color: transparent;
  border: 2px solid rgb(103, 240, 11);
}

input:hover {
  border: 2px solid rgb(240, 224, 11);
}
input:active {
  border: 2px solid;
}

.notifications {
  // styling
  margin: 5px 5px;
  padding: 10px;
  font-size: 12px;
  color: #ffffff;
  cursor: pointer;

  // default (blue)
  background: #44a4fc;
  border-left: 5px solid #187fe7;

  // types (green, amber, red)
  &.success {
    background: #68cd86;
    border-left-color: #42a85f;
  }

  &.warn {
    background: #ffb648;
    border-left-color: #f48a06;
  }

  &.error {
    background: #e54d42;
    border-left-color: #b82e24;
  }
}
</style> -->
