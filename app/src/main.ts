import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./routes";

createApp(App).use(router).mount("#app");
