import "./services/web/registerServiceWorker";
import "./assets/css/tailwind.css";
// import "./assets/css/wallets.css";
import { createApp } from "vue";
import { createPinia } from "pinia";
import { useSolana } from "./services/web3/solana/wallets/useWorkspace";
import { GOOGLE_KEY } from "./config";
import Notifications from "@kyvg/vue3-notification";
import velocity from "velocity-animate";
import WaveSurfer from "wavesurfer.js-vue";
import GAuth from "vue3-google-oauth2";
import router from "./routes";
import App from "./App.vue";

// Google Auth
const gAuthOptions = {
  clientId: GOOGLE_KEY,
  scope: "email",
  prompt: "consent",
  fetch_basic_profile: false,
};

useSolana(); // Init Solana Wallets
const app = createApp(App);
const pinia = createPinia();
app
  .use(pinia)
  .use(router)
  .use(GAuth, gAuthOptions)
  .use(WaveSurfer)
  .use(Notifications, { velocity })
  .mount("#app");
