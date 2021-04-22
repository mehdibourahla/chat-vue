<template>
  <Login @login-user="loginUser" v-if="LoginVue" />
  <Register @register-user="registerUser" v-else />
</template>

<script>
import Login from "../components/authentication/Login";
import Register from "../components/authentication/Register";
import { mapActions } from "vuex";
export default {
  name: "Authentication",
  components: {
    Login,
    Register,
  },
  methods: {
    ...mapActions(["register", "login"]),
    registerUser(user) {
      try {
        this.register(user);
      } catch (error) {
        console.error(error);
      }
    },

    loginUser(user) {
      try {
        this.login(user);
      } catch (error) {
        console.error(error);
      }
    },
  },
  computed: {
    LoginVue() {
      if (this.$route.path === "/login") {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style>
</style>