import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/services/api";
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "bootstrap";
// import { library } from "@fortawesome/fontawesome-svg-core";

// library.add( )
// eslint-disable-next-line no-unused-vars
let app = createApp(App).use(store).use(router).mount("#app");

// app.component("font-awesome-icon", FontAwesomeIcon);
