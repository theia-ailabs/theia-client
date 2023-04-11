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
import router from "./routes";
import App from "./App.vue";

useWorkspace(); // Init Solana Wallets
const app = createApp(App);
const pinia = createPinia();
app
  .use(pinia)
  .use(router)
  .use(WaveSurfer)
  .use(Notifications, { velocity })
  .mount("#app");
