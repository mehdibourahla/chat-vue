import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import "./index.css";

Vue.config.productionTip = false;
Vue.config.devtools = true;

axios.interceptors.request.use(
  config => {
    let token = sessionStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
axios.defaults.headers.common["Content-type"] = "application/json";

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app");
