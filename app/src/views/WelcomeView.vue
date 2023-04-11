<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import GalaxyComp from "../components/GalaxyComp.vue";
import useStore from "../services/store";
import TerminalComp from "../components/modules/terminals/TerminalComp.vue";
import Signup from "../components/modules/modals/SignupModal.vue";
import FauxComp from "../components/modules/terminals/FauxComp.vue";
import TitleComp from "../components/TitleComp.vue";

export default defineComponent({
  components: {
    GalaxyComp,
    TerminalComp,
    Signup,
    FauxComp,
    TitleComp,
  },
  setup() {
    const store = useStore();
    const isLoadingDone = ref(false);

    function connect() {
      store.signup = true;
    }

    return {
      store,
      isLoadingDone,
      connect,
    };
  },
});
</script>
<template>
  <div>
    <GalaxyComp />
    <div v-if="store.signup" class="absolute z-50 p-8">
      <Signup />
    </div>
    <!-- Welcome Title -->
    <TitleComp />
    <!-- Loader -->
    <div class="front relative z-50">
      <div id="loader-ai" class="loader-ai fixed top-[50%] left-[50%]">
        <img
          class="rounded-full opacity-60"
          width="180"
          :src="require('./../assets/img/gif/loading.gif')"
        />
      </div>
      <button
        id="connect-btn"
        @click="connect"
        class="connect-btn mt-6 border bg-yellow-500/90 hover:bg-yellow-500 hover:shadow-sm shadow-yellow-400 border-gray-300 text-xs p-2 px-4 uppercase rounded-xl z-50"
      >
        <h1 class="relative hover:text-white hover:font-bold">LOGIN</h1>
      </button>
    </div>
    <FauxComp />
    <TerminalComp />
  </div>
</template>
<style scoped>
.loader-ai {
  transform: translate(-50%, -50%);
}

#connect-btn {
  position: fixed;
  top: calc(50% - 59px);
  left: calc(50% - 34px);
  z-index: 9999 !important;
  font-family: "Orbitron", monospace;
  font-size: x-small !important;
}

@property --d {
  syntax: "<angle>";
  inherits: true;
  initial-value: 0deg;
}

button {
  width: 70px;
  height: 70px;
  aspect-ratio: 1;
  font-size: 30px;
  font-weight: bold;
  color: #fff;
  background: none;
  border: none;
  border-radius: 50%;
  position: relative;
  z-index: 0;
  transition: 0.3s;
  cursor: pointer;
}

button:before {
  content: "";
  position: absolute;
  inset: -8px;
  padding: 8px;
  border-radius: 50%;
  background: conic-gradient(
    from var(--d, 0deg),
    #ae0ff7,
    transparent 30deg 120deg,
    yellow 150deg 180deg,
    transparent 210deg 300deg,
    #ae0ff7 330deg
  );
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask-composite: intersect;
}

button:after {
  content: "";
  position: absolute;
  inset: -100px;
  background: radial-gradient(80px at left 150px top 120px, #ae0ff7 98%, #0000),
    radial-gradient(80px at right 150px bottom 120px, yellow 98%, #0000);
  filter: blur(60px);
  opacity: 0.5;
}

button:before,
button:after {
  transition: 0.5s, 99999s 99999s transform, 99999s 99999s --d;
}

button:hover {
  box-shadow: 0 0 0 1px #666;
}

button:hover:after {
  transform: rotate(3600deg);
  transition: 0.5s, 60s linear transform;
}

button:hover:before {
  --d: 3600deg;
  transition: 0.5s, 60s linear --d;
}

button:hover:before {
  background-color: #222;
}
.connect-btn:hover {
  background-color: transparent !important;
  background: transparent !important;
}
</style>
