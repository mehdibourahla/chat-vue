import Vue from "vue";
import Vuex from "vuex";
import authentication from "./modules/authentication";
import participants from "./modules/participants";
import messages from "./modules/messages";
import profiles from "./modules/profiles";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    toast: null,
  },
  getters: {
    getToast: state => state.toast,
  },
  mutations: {
    SET_TOAST(state, toast) {
      state.toast = toast;
    },
  },
  actions: {
    setToast({ commit }, toast) {
      commit("SET_TOAST", toast);
      setTimeout(() => {
        commit("SET_TOAST", null);
      }, 10000);
    },
  },
  modules: {
    authentication,
    participants,
    messages,
    profiles,
  },
});
