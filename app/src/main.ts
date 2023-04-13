import "./services/web/registerServiceWorker";
import "./assets/css/style.css";
import "./assets/css/tailwind.css";
import "./assets/css/wallets.css";
import { createApp } from "vue";
import { createPinia } from "pinia";
import { useWorkspace } from "./services/web3/wallets/useWorkspace";
import Notifications from "@kyvg/vue3-notification";
import velocity from "velocity-animate";
import WaveSurfer from "wavesurfer.js-vue";
import GAuth from "vue3-google-oauth2";
import router from "./routes";
import App from "./App.vue";

// Google Auth
const gAuthOptions = {
  clientId:
    "319118873072-m15r9rcvmcuehd5jm6ldf8khh8a70t2c.apps.googleusercontent.com",
  scope: "email",
  prompt: "consent",
  fetch_basic_profile: false,
};

useWorkspace(); // Init Solana Wallets
const app = createApp(App);
const pinia = createPinia();
app
  .use(pinia)
  .use(router)
  .use(GAuth, gAuthOptions)
  .use(WaveSurfer)
  .use(Notifications, { velocity })
  .mount("#app");
