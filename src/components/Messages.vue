<template>
  <div class="flex flex-col-reverse border">
    <div class="m-1" :key="message.id" v-for="message in messages">
      <Message :message="message"></Message>
    </div>
  </div>
</template>

<script>
import Message from "./Message";

export default {
  name: "Messages",
  components: {
    Message,
  },
  props: {
    messages: Array,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
</style>