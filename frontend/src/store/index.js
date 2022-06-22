import { getCookie, setCookie } from "@/utils";
import { createStore } from "vuex";
import axios from 'axios';

export default createStore({
  state: {
    backend: "http://localhost:8000",
  },
  getters: {
    isLoggedIn() {
      return getCookie('access_token');
    }
  },
  mutations: {},
  actions: {
    LOGIN(context, { username, password }) {
      return new Promise((resolve, reject) => {
        axios.post('localhost:8000/api/token/', {
          username,
          password
        }).then(({data}) => {
          setCookie('access_token', data['access'], 3);
          setCookie('refresh_token', data['access'], 3);
          resolve(data);
        }).catch((error) => {
          console.log(error);
          reject(false);
        });
      });
    }
  },
  modules: {},
});
