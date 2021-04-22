<template>
  <form
    class="m-auto max-w-2xl space-y-6 border p-4 rounded bg-gray-100"
    @submit="register"
  >
    <div class="w-full">
      <label class="block font-semibold" for="Username"
        >Username <span class="text-red-400">*</span>
      </label>
      <input
        class="border w-full p-2 rounded"
        type="text"
        v-model="username"
        id="username"
        placeholder="ex: JohnDoe"
      />
    </div>
    <div class="w-full">
      <label class="block font-semibold" for="email"
        >E-mail <span class="text-red-400">*</span></label
      >
      <input
        class="border w-full p-2 rounded"
        type="email"
        v-model="email"
        id="email"
        placeholder="ex: Johndoe@example.com"
      />
    </div>
    <div class="w-full">
      <label class="block font-semibold" for="password"
        >Password <span class="text-red-400">*</span></label
      >
      <input
        class="border w-full p-2 rounded"
        type="password"
        v-model="password"
        id="password"
        placeholder="ex: 12345678"
      />
    </div>
    <div class="w-full">
      <label class="block font-semibold" for="password_confirmation"
        >Password Confirmation <span class="text-red-400">*</span></label
      >
      <input
        class="border w-full p-2 rounded"
        type="password"
        v-model="password_confirmation"
        placeholder="Confirm password"
        id="password_confirmation"
      />
    </div>
    <button
      type="submit"
      class="w-full bg-green-400 p-3 text-white font-semibold rounded"
    >
      Register
    </button>
  </form>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      username: "",
      email: "",
      password: "",
      password_confirmation: "",
    };
  },
  methods: {
    register(e) {
      e.preventDefault();
      let newUser = {
        username: this.username,
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation,
      };
      this.$emit("register-user", newUser);
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