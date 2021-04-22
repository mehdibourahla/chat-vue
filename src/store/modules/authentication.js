import axios from "axios";
import router from "../../router";
const state = {
  user: {},
  token: sessionStorage.getItem("token") || "",
  status: "",
};

const getters = {
  isLoggedIn: state => !!state.token,
  authStatus: state => state.status,
  authUser: state => state.user,
};

const actions = {
  register({ commit }, newUser) {
    commit("auth_request");
    this.dispatch("setToast", {
      status: "loading",
      text: "Authentication...",
    });
    axios({
      url: "api/register",
      data: newUser,
      method: "POST",
    })
      .then(res => {
        let user = res.data.user;
        let token = res.data.token;
        sessionStorage.setItem("token", token);
        commit("auth_success", { user, token });
        this.dispatch("setToast", {
          status: "success",
          text: `Registration Successful: Welcome to Messenger ${user.name}`,
        });
        router.push("/profile");
      })
      .catch(err => {
        commit("auth_error", err);
        this.dispatch("setToast", {
          status: "error",
          text: "Registration Failed: Please enter the required fields (*)",
        });
        console.error(err);
      });
  },

  login({ commit }, userForm) {
    commit("auth_request");
    this.dispatch("setToast", {
      status: "loading",
      text: "Authentication...",
    });
    axios({ url: "api/login", data: userForm, method: "POST" })
      .then(res => {
        let user = res.data.user;
        let token = res.data.token;
        sessionStorage.setItem("token", token);
        commit("auth_success", { user, token });
        this.dispatch("setToast", {
          status: "success",
          text: `Login Successful: Welcome to Messenger ${user.name}`,
        });
        router.push("/main");
      })
      .catch(err => {
        commit("auth_error", err);
        this.dispatch("setToast", {
          status: "error",
          text: "Login Failed: Your email or password is incorrect.",
        });
        sessionStorage.removeItem("token");
        console.error(err);
      });
  },

  logout({ commit }) {
    commit("auth_request");
    this.dispatch("setToast", {
      status: "loading",
      text: "Logging out...",
    });
    axios({
      url: "api/logout",
      method: "POST",
    })
      .then(() => {
        sessionStorage.removeItem("token");
        this.dispatch("setToast", {
          status: "success",
          text: `Logout Successful: Farewell ${state.user.name}!`,
        });
        commit("logout");
        router.push("/");
      })
      .catch(err => {
        console.error(err);
        commit("auth_error", err);
        this.dispatch("setToast", {
          status: "error",
          text: "Log out failed",
        });
      });
  },

  getAuth({ commit }) {
    axios({
      url: "api/authUser",
    })
      .then(res => {
        commit("SET_USER", res.data);
      })
      .catch(err => {
        console.error(err);
      });
  },
};

const mutations = {
  auth_request(state) {
    state.status = "loading";
  },
  auth_success(state, { user, token }) {
    state.status = "success";
    state.token = token;
    state.user = user;
  },
  auth_error(state) {
    state.status = "error";
  },
  logout(state) {
    (state.status = ""), (state.token = ""), (state.user = {});
  },
  SET_USER(state, user) {
    state.user = user;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
