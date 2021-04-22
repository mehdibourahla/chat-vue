<template>
  <div class="">
    <Header :isLoggedIn="isLoggedIn" />
    <Toaster
      :text="this.$store.getters.authStatus"
      :state="this.$store.getters.authStatus"
    />
    <router-view></router-view>
    <!-- <Footer /> -->
  </div>
</template>

<script>
import Header from "./components/partials/Header";
import Footer from "./components/partials/Footer";
import Toaster from "./components/Toaster";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    Toaster,
  },
  created() {
    this.$store.dispatch("getAuth");
  },
  methods: {
    async logout() {
      await this.$store.dispatch("logout");
    },
  },
  computed: {
    isLoggedIn: function () {
      return this.$store.getters.isLoggedIn;
    },
  },
};
</script>