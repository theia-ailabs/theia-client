import { createApp } from "vue";
import App from "./App.vue";
import "./services/registerServiceWorker";
import router from "./router";

createApp(App).use(router).mount("#app");
