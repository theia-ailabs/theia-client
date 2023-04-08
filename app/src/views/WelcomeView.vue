<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import GalaxyComp from "../components/GalaxyComp.vue";
import useStore from "../services/store";
import TerminalComp from "../components/TerminalComp.vue";
// import Signup from "../modules/modals/SignupModal.vue";

export default defineComponent({
  components: { GalaxyComp, TerminalComp },
  setup() {
    const store = useStore();
    const isLoadingDone = ref(false);
    const router = useRouter();

    onMounted(() => {
      setTimeout(() => {
        isLoadingDone.value = true;
      }, 12000);
    });

    function connect() {
      store.signup = true;
      router.push({ name: "main" });
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
    <!-- <div v-if="store.signup">
      <Signup />
    </div> -->
    <!-- Welcome Title -->
    <div class="mt-20">
      <h1
        class="welcome-title relative z-50 top-[20%] w-full text-center flex flex-wrap justify-center"
      >
        <div class="fx text-center flex flex-wrap justify-center">
          <div class="text-center">
            <span class="silver">T</span>
            <span class="silver">H</span>
            <span class="silver">E</span>
            <span>I</span>
            <span>A</span>
          </div>
        </div>
      </h1>
    </div>
    <!-- Loader -->
    <div class="front relative z-50">
      <div
        id="loader-ai"
        class="loader-ai fixed top-[50%] left-[50%]"
        :class="{ hidden: isLoadingDone }"
      >
        <img
          class="rounded-full opacity-60"
          width="180"
          src="assets/img/gif/loader.gif"
        />
      </div>
      <button
        id="connect-btn"
        :class="{ hidden: !isLoadingDone }"
        @click="connect"
        class="connect-btn mt-6 border bg-yellow-500/90 hover:bg-yellow-500 hover:shadow-sm shadow-yellow-400 border-gray-300 text-xs p-2 px-4 uppercase rounded-xl z-50"
      >
        <h1 class="relative right-2 hover:text-white hover:font-bold">
          Connect
        </h1>
      </button>
    </div>
    <div
      id="faux-terminal"
      class="w-full h-full z-40 fixed top-0 left-0 min-h-[51px]"
    >
      <div class="layer"></div>
      <div class="overlay"></div>
    </div>
    <TerminalComp />
  </div>
</template>
<style scoped>
.loader-ai {
  transform: translate(-50%, -50%);
}
.welcome-title {
  font-family: "Cubic" !important;
  src: url(../assets/fonts/cubic.ttf) !important;
  font-size: 2.5rem;
  margin: 0;
  padding-bottom: 0.5rem;
  letter-spacing: 0.5rem;
  color: yellow;
  transition: all 0.3s ease;
  z-index: 3;
}
.welcome-title:hover {
  transform: translate3d(0, -10px, 22px);
  color: yellow;
}
.silver {
  color: rgba(198, 198, 198, 0.8) !important;
}
.fx span {
  color: rgb(255, 230, 0);
  text-shadow: 0 0 0 #faebd7;
  animation: fxk 2s ease-in-out infinite alternate;
}
.fx span:nth-child(2) {
  animation-delay: 0.1s;
}
.fx span:nth-child(3) {
  animation-delay: 0.2s;
}
.fx span:nth-child(4) {
  animation-delay: 0.3s;
}
.fx span:nth-child(5) {
  animation-delay: 0.4s;
}
.fx span:nth-child(6) {
  animation-delay: 0.5s;
}
.fx span:nth-child(7) {
  animation-delay: 0.6s;
}
.fx span:nth-child(8) {
  animation-delay: 0.7s;
}
.fx span:nth-child(9) {
  animation-delay: 0.8s;
}
.fx span:nth-child(10) {
  animation-delay: 0.9s;
}
.fx span:nth-child(11) {
  animation-delay: 1s;
}
.fx span:nth-child(12) {
  animation-delay: 1.1s;
}
.fx span:nth-child(13) {
  animation-delay: 1.2s;
}
.fx span:nth-child(14) {
  animation-delay: 1.3s;
}
.fx span:nth-child(15) {
  animation-delay: 1.4s;
}
.fx span:nth-child(16) {
  animation-delay: 1.5s;
}
.fx span:nth-child(17) {
  animation-delay: 1.6s;
}
.fx span:nth-child(18) {
  animation-delay: 1.7s;
}
.fx span:nth-child(19) {
  animation-delay: 1.8s;
}
.fx span:nth-child(20) {
  animation-delay: 1.9s;
}
.fx span:nth-child(21) {
  animation-delay: 2s;
}
.fx span:nth-child(22) {
  animation-delay: 2.1s;
}
@keyframes fxk {
  to {
    text-shadow: 20px 0 70px #ae0ff7;
    color: rgba(150, 100, 200, 0.8);
  }
}
#faux-terminal {
  pointer-events: none;
}
#faux-terminal:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  min-height: 51px;
  z-index: 4010;
  background: -webkit-linear-gradient(#444 50%, #000 50%);
  background: linear-gradient(#444 50%, #000 50%);
  background-size: 100% 4px;
  background-repeat: repeat-y;
  opacity: 0.14;
  box-shadow: inset 0px 0px 1px 1px rgba(0, 0, 0, 0.8);
  -webkit-animation: pulse 5s linear infinite;
  animation: pulse 5s linear infinite;
}
#faux-terminal:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  min-height: 51px;
  z-index: 4011;
  background-color: #00c853;
  background: -webkit-radial-gradient(
    center,
    black 0%,
    rgba(0, 0, 0, 0.62) 45%,
    rgba(0, 9, 4, 0.6) 47%,
    #00c853 100%
  );
  background: radial-gradient(
    ellipse at center,
    #000000 0%,
    rgba(0, 0, 0, 0.62) 45%,
    rgba(0, 9, 4, 0.6) 47%,
    #f7730f 100%
  );
  box-shadow: inset 0px 0px 4px 4px rgba(100, 100, 100, 0.5);
  opacity: 0.1;
}
#faux-terminal .layer {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  min-height: 51px;
  z-index: 4001;
  box-shadow: inset 0px 0px 1px 1px rgba(64, 64, 64, 0.1);
  background: -webkit-radial-gradient(
    center,
    #00c351 0%,
    rgba(64, 64, 64, 0) 50%
  );
  background: radial-gradient(
    ellipse at bottom,
    #d971fa 0%,
    rgba(64, 64, 64, 0) 30%
  );
  -webkit-transform-origin: 50% 50%;
  -ms-transform-origin: 50% 50%;
  transform-origin: 50% 50%;
  -webkit-transform: perspective(20px) rotateX(0.5deg) skewX(2deg) scale(1.03);
  transform: perspective(20px) rotateX(0.5deg) skewX(2deg) scale(1.03);
  -webkit-animation: glitch 1s linear infinite;
  animation: glitch 1s linear infinite;
  opacity: 0.8;
}
#faux-terminal .layer:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  min-height: 51px;
  background: -web-kit-radial-gradient(
    center,
    rgba(0, 0, 0, 0.5) 0%,
    rgba(64, 64, 64, 0) 100%
  );
  background: radial-gradient(
    ellipse at center,
    rgba(0, 0, 0, 0.5) 0%,
    rgba(64, 64, 64, 0) 100%
  );
  opacity: 0.1;
}
#faux-terminal .overlay {
  position: absolute;
  display: flex;
  flex-direction: column;
  margin: auto;
  top: 70%;
  left: 20%;
  right: 20%;
  width: 20%;
  min-width: 170px;
  height: 100px;
  min-height: 51px;
  z-index: 6000;
  background-color: transparent;
}
#faux-terminal .overlay:before {
  content: "";
  position: absolute;
  top: 0px;
  width: 100%;
  min-width: 100%;
  height: 5px;
  background: #fff;
  background: -webkit-linear-gradient(
    to bottom,
    rgba(255, 0, 0, 0) 0%,
    snow 50%,
    rgba(255, 255, 255, 0.98) 51%,
    rgba(255, 0, 0, 0) 100%
  );
  background: linear-gradient(
    to bottom,
    rgba(255, 0, 0, 0) 0%,
    snow 50%,
    rgba(255, 255, 255, 0.98) 51%,
    rgba(255, 0, 0, 0) 100%
  );
  opacity: 0.1;
  -webkit-animation: vline 1.25s linear infinite;
  animation: vline 1.25s linear infinite;
}
#faux-terminal .overlay:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  min-width: 100%;
  height: 51px;
  min-height: 51px;
}
@keyframes vline {
  0% {
    top: 0px;
  }

  100% {
    top: 100%;
  }
}

@keyframes pulse {
  0% {
    transform: scale(1.001);
    opacity: 0.14;
  }

  8% {
    transform: scale(1);
    opacity: 0.13;
  }

  15% {
    transform: scale(1.004);
    opacity: 0.14;
  }

  30% {
    transform: scale(1.002);
    opacity: 0.11;
  }

  100% {
    transform: scale(1);
    opacity: 0.14;
  }
}

@keyframes glitch {
  0% {
    transform: scale(1, 1.002);
  }

  50% {
    transform: scale(1, 1.0001);
  }

  100% {
    transform: scale(1.001, 1);
  }
}

#connect-btn {
  position: fixed;
  top: calc(50% - 65px);
  left: calc(50% - 35px);
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
    #0000 30deg 120deg,
    yellow 150deg 180deg,
    #0000 210deg 300deg,
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
