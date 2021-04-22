<template>
  <div class="flex items-start">
    <img src="../assets/logo.png" alt="" class="w-8 rounded-full border mr-1" />
    <div v-bind:class="myMessage" class="rounded-lg p-2">
      {{ message.message }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Message",
  props: {
    message: Object,
  },
  computed: {
    myMessage: function () {
      return this.message.profile_id === this.$store.getters.authUser.id
        ? "bg-blue-200 "
        : "bg-gray-300";
    },
  },
};
</script>

<style>
</style>