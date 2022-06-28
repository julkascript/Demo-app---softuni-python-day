import { deleteCookie, getCookie, setCookie } from "@/utils";
import { createStore } from "vuex";
import axios from 'axios';
import router from '@/router/index';

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
        axios.post('http://localhost:8000/api/token/', {
          username,
          password
        }).then(({data}) => {
          setCookie('access_token', data['access'], 3);
          setCookie('refresh_token', data['refresh'], 3);
          router.push('/');
          resolve(data);
        }).catch((error) => {
          console.log(error);
          reject(false);
        });
      });
    },
    LOGOUT(context) {
      return new Promise((resolve, reject) => {
        try {
          deleteCookie('access_token');
          deleteCookie('refresh_token');
          router.push('/login');
          resolve(context);
        } catch (err) {
          reject(context);
        }
      });
    }
  },
  modules: {},
});
