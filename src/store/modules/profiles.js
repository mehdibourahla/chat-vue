import axios from "axios";
import router from "../../router";
const state = {};

const getters = {};

const actions = {
  SAVE_PROFILE({ commit }, formData) {
    console.log(formData.get("picture"));
  },
};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations,
};
