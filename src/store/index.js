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
    pusher: null,
  },
  getters: {
    getToast: state => state.toast,
    getPusher: state => state.pusher,
  },
  mutations: {
    SET_TOAST(state, toast) {
      state.toast = toast;
    },
    SET_PUSHER(state, pusher) {
      state.pusher = pusher;
    },
  },
  actions: {
    setToast({ commit }, toast) {
      commit("SET_TOAST", toast);
      setTimeout(() => {
        commit("SET_TOAST", null);
      }, 10000);
    },
    setPusher({ commit }) {
      let pusher = new Pusher("e621f52f402d1a538a2f", {
        cluster: "eu",
      });
      commit("SET_PUSHER", pusher);
    },
  },
  modules: {
    authentication,
    participants,
    messages,
    profiles,
  },
});
