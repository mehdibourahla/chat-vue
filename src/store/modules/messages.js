import axios from "axios";
import router from "../../router";
const state = {
  messages: [],
};

const getters = {
  getMessages: state => state.messages,
};

const actions = {
  sendMessage({ commit }, message) {
    axios({
      url: "api/sendMessage",
      method: "POST",
      data: { message },
    })
      .then(res => {
        commit("SET_MESSAGE", res.data);
      })
      .catch(err => {
        console.error(err);
        this.dispatch("setToast", {
          status: "error",
          text: "Could not send a message",
        });
      });
  },
  getMessages({ commit }) {
    axios({ url: "api/getMessages" })
      .then(res => {
        commit("GET_MESSAGES", res.data.data);
      })
      .catch(err => {
        console.error(err);
        this.dispatch("setToast", {
          status: "error",
          text: "Error while getting messages",
        });
      });
  },
  loadMoreMessages({ commit }, page) {
    axios({ url: `api/getMessages?page=${page}` })
      .then(res => {
        commit("LOAD_MESSAGES", res.data.data);
      })
      .catch(err => {
        console.error(err);
        this.dispatch("setToast", {
          status: "error",
          text: "Error while getting messages",
        });
      });
  },
};

const mutations = {
  GET_MESSAGES(state, messages) {
    state.messages = messages;
  },
  SET_MESSAGE(state, message) {
    state.messages = [message, ...state.messages];
  },
  LOAD_MESSAGES(state, messages) {
    messages.forEach(message => {
      state.messages.push(message);
    });
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
