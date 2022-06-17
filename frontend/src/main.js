import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "bootstrap";
// import { library } from "@fortawesome/fontawesome-svg-core";

// library.add( )

let app = createApp(App).use(store).use(router).mount("#app");
app.component("font-awesome-icon", FontAwesomeIcon);
