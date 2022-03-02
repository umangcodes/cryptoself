import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router/index";
import "./index.css";
createApp(App).use(store).use(router).mount("#app");
