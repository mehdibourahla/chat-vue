<template>
  <div class="w-full flex justify-center items-center mb-8 px-4">
    <router-link to="/">
      <h1 class="text-4xl font-bold text-blue-400">Messenger</h1>
    </router-link>
    <div v-if="isLoggedIn" class="ml-auto cursor-pointer font-semibold">
      <router-link to="/profile"
        ><span>{{ user.email }}</span></router-link
      >
      <span class="" @click="logout"> Logout </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    isLoggedIn: Boolean,
  },
  data() {
    return {};
  },
  methods: {
    logout() {
      try {
        this.$store.dispatch("logout");
      } catch (error) {
        console.error(error);
      }
    },
  },
  computed: {
    user() {
      return this.$store.getters.authUser;
    },
  },
};
</script>

<style>
</style>