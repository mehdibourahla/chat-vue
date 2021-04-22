import axios from "axios";
import router from "../../router";
const state = {
  participants: [],
};

const getters = {
  getParticipants: state => state.participants,
};

const actions = {
  getParticipants({ commit }) {
    axios({ url: "api/getUsers" })
      .then(res => {
        commit("SET_PARTICIPANTS", res.data);
      })
      .catch(err => {
        console.error(err);
        this.dispatch("setToast", {
          status: "error",
          text: "Error while getting participants informations",
        });
      });
  },
};

const mutations = {
  SET_PARTICIPANTS(state, participants) {
    state.participants = participants;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
