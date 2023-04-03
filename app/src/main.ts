import "./services/web/registerServiceWorker";
import "./assets/css/tailwind.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes";

createApp(App).use(router).mount("#app");
