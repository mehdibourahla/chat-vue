<template>
  <form
    class="m-auto max-w-2xl space-y-6 border p-4 rounded bg-gray-100"
    @submit="login"
  >
    <div class="w-full">
      <label class="block font-semibold" for="email">E-mail</label>
      <input
        class="border w-full p-2 rounded"
        type="email"
        id="email"
        placeholder="ex: Johndoe@example.com"
        v-model="email"
      />
    </div>
    <div class="w-full">
      <label class="block font-semibold" for="password">Password</label>
      <input
        class="border w-full p-2 rounded"
        type="password"
        id="password"
        placeholder="ex: 12345678"
        v-model="password"
      />
    </div>
    <button
      type="submit"
      class="w-full bg-blue-400 p-3 text-white font-semibold rounded"
    >
      Login
    </button>
  </form>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login(e) {
      e.preventDefault();
      let newUser = {
        email: this.email,
        password: this.password,
      };
      this.$emit("login-user", newUser);
    },
  },
  computed: {
    authError() {
      return this.$store.getters.authStatus === "error";
    },
  },
};
</script>

<style>
</style>