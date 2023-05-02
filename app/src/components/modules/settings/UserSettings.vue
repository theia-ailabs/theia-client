<script lang="ts">
import { defineComponent } from "vue";
import useStore from "../../../services/store";
import InputComp from "@/components/common/InputComp.vue";
import SelectComp from "@/components/common/SelectComp.vue";

export default defineComponent({
  components: {
    InputComp,
    SelectComp,
  },
  setup() {
    const store = useStore();

    function updateUsername(value: string) {
      store.userProfile.username = value;
    }
    function updateFirstName(value: string) {
      store.userProfile.firstName = value;
    }
    function updateLastName(value: string) {
      store.userProfile.lastName = value;
    }
    function updateAge(value: number) {
      store.userProfile.age = value;
    }
    function updateGender(value: any) {
      store.userProfile.gender = value;
    }
    function updateHandees(value: any) {
      store.userProfile.handees = value;
    }
    function updateCountry(value: string) {
      store.userProfile.country = value;
    }
    function updateMood(value: string) {
      store.userProfile.mood = value;
    }
    function updateWebsite(value: string) {
      store.userProfile.website = value;
    }
    const setupObject: {
      store: typeof store;
      updateUsername: (value: string) => void;
      updateFirstName: (value: string) => void;
      updateLastName: (value: string) => void;
      updateAge: (value: number) => void;
      updateGender: (value: any) => void;
      updateHandees: (value: any) => void;
      updateMood: (value: string) => void;
      updateCountry: (value: string) => void;
      updateWebsite: (value: string) => void;
    } = {
      store,
      updateUsername,
      updateFirstName,
      updateLastName,
      updateAge,
      updateGender,
      updateHandees,
      updateMood,
      updateCountry,
      updateWebsite,
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
        id="settings-modal"
        class="fixed inset-0 overflow-y-auto bg-opacity-50"
        :class="
          store.dark ? 'bg-gray-900 text-white/80' : 'bg-black/80 text-gray-700'
        "
      >
        <div class="flex items-center justify-center min-h-screen text-center">
          <div
            class="absolute py-3 m-6 sm:w-1/3 rounded-xl text-center overflow-hidden border shadow-md p-8 flex flex-col justify-center"
            :class="[
              store.dark
                ? 'bg-black/70 text-gray-100'
                : 'bg-white/70 text-gray-900',
              `border-${store.primaryColor}`,
              `shadow-${store.secondaryColor}`,
            ]"
          >
            <button
              @click="store.userModal = false"
              class="absolute text-white/80 top-6 right-6 rounded-full border border-gray-600 px-[10px] pb-[4px] hover:text-white hover:bg-slate-900 hover:border-white/50"
            >
              x
            </button>
            <h1 class="mx-4 text-lg sm:text-base text-gray-400 animate-pulse">
              CUSTOMIZE USER
            </h1>
            <div class="flex justify-center w-full px-4 my-0">
              <ul>
                <div class="flex">
                  <li class="mx-3">
                    <p
                      class="mt-3 text-xs sm:text-sm text-gray-400 animate-pulse"
                    >
                      Username
                    </p>
                    <InputComp
                      :target="store.userProfile.username"
                      @update-target="updateUsername($event)"
                    />
                  </li>
                  <li class="mx-3">
                    <p
                      class="mt-3 text-xs sm:text-sm text-gray-400 animate-pulse"
                    >
                      First Name
                    </p>
                    <InputComp
                      :target="store.userProfile.firstName"
                      @update-target="updateFirstName($event)"
                    />
                  </li>
                </div>
                <div class="flex">
                  <li class="mx-3">
                    <p
                      class="mt-3 text-xs sm:text-sm text-gray-400 animate-pulse"
                    >
                      Last Name
                    </p>
                    <InputComp
                      :target="store.userProfile.lastName"
                      @update-target="updateLastName($event)"
                    />
                  </li>
                  <li class="mx-3">
                    <p
                      class="mt-3 text-xs sm:text-sm text-gray-400 animate-pulse"
                    >
                      Age
                    </p>
                    <InputComp
                      :target="store.userProfile.age"
                      @update-target="updateAge($event)"
                    />
                  </li>
                </div>
                <div class="flex">
                  <li class="mx-3">
                    <p
                      class="mt-3 text-xs sm:text-sm text-gray-400 animate-pulse"
                    >
                      Gender
                    </p>
                    <SelectComp
                      :target="store.userProfile.gender"
                      :options="['Female', 'Male', 'Non-binary', '']"
                      @update-target="updateGender($event)"
                    />
                  </li>
                  <li class="mx-3">
                    <p
                      class="mt-3 text-xs sm:text-sm text-gray-400 animate-pulse"
                    >
                      Handlee
                    </p>
                    <SelectComp
                      :target="store.userProfile.handees"
                      :options="['Left', 'Right']"
                      @update-target="updateHandees($event)"
                    />
                  </li>
                </div>
                <div class="flex">
                  <li class="mx-3">
                    <p
                      class="mt-3 text-xs sm:text-sm text-gray-400 animate-pulse"
                    >
                      Country
                    </p>
                    <InputComp
                      :target="store.userProfile.country"
                      @update-target="updateCountry($event)"
                    />
                  </li>
                  <li class="mx-3">
                    <p
                      class="mt-3 text-xs sm:text-sm text-gray-400 animate-pulse"
                    >
                      Mood
                    </p>
                    <InputComp
                      :target="store.userProfile.mood"
                      @update-target="updateMood($event)"
                    />
                  </li>
                </div>
                <li>
                  <p
                    class="mt-3 text-xs sm:text-sm text-gray-400 animate-pulse"
                  >
                    Website
                  </p>
                  <InputComp
                    :target="store.userProfile.website"
                    inputWidth="w-96"
                    @update-target="updateWebsite($event)"
                  />
                </li>
              </ul>
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
                @click="store.userModal = false"
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
                @click="[store.reAvatar(), (store.userModal = false)]"
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
