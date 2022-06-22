import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "bootstrap";
import axios from 'axios';
import getCookie from './utils';
// import { library } from "@fortawesome/fontawesome-svg-core";

// library.add( )

() => {
    axios.interceptors.request.use((request) => {
        request.headers.Authorization = getCookie('access_token') ? `Bearer ${getCookie('access_token')}` : '';
    });
    axios.interceptors.response.use((response) => {
        return response;
    }, (error) => {
        console.log(error);
        // const {
        //     config,
        //     response: {status, data}
        // } = error;
        if (status === 401) {
            // unauthorized
        } else if (status === 403) {
            // forbidden
        }
    });
};

// eslint-disable-next-line no-unused-vars
let app = createApp(App).use(store).use(router).mount("#app");
// app.component("font-awesome-icon", FontAwesomeIcon);
