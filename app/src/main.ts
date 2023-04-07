import "./services/web/registerServiceWorker";
import "./assets/css/tailwind.css";
import "./assets/css/wallets.css";
import { createApp } from "vue";
import { createPinia } from "pinia";
import Notifications from "@kyvg/vue3-notification";
import velocity from "velocity-animate";
import { useWorkspace } from "./services/web3/wallets/useWorkspace";
import router from "./routes";
import App from "./App.vue";

useWorkspace(); // Init Solana Wallets
const pinia = createPinia();
const app = createApp(App);
app.use(pinia).use(router).use(Notifications, { velocity }).mount("#app");
