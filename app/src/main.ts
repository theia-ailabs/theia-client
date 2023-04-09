import { createApp } from "vue";
import { createPinia, setActivePinia } from "pinia";
import "./services/web/registerServiceWorker";
import "./assets/css/tailwind.css";
import "./assets/css/wallets.css";
import { useWorkspace } from "./services/web3/wallets/useWorkspace";
import Notifications from "@kyvg/vue3-notification";
import velocity from "velocity-animate";
import router from "./routes";
import App from "./App.vue";
//import store from "./services/store";

export const pinia = createPinia();
const app = createApp(App);
//app.provide("store", store);
setActivePinia(pinia);
app.use(pinia).use(router).use(Notifications, { velocity }).mount("#app");
useWorkspace(); // Init Solana Wallets
