<template>
  <form class="" @submit="sendMessage" action="">
    <div class="flex">
      <textarea
        v-on:keydown.enter="sendMessage"
        v-model="message"
        class="rounded w-2/3 p-2"
        type="text"
      ></textarea>
      <button
        type="submit"
        class="p-2 bg-green-500 text-white font-semibold rounded w-1/3"
      >
        Send
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: "Input",
  data() {
    return {
      message: "",
    };
  },
  methods: {
    sendMessage(e) {
      e.preventDefault();

      this.$emit("send-message", this.message);
      this.message = "";
    },
  },
};
</script>

<style>
</style>