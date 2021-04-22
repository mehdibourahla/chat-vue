<template>
  <div class="h-screen">
    <div class="flex h-2/3">
      <div
        v-on:scroll="handleScroll"
        id="messages"
        class="w-2/3 overflow-y-scroll border-2 rounded"
      >
        <Messages :messages="this.$store.getters.getMessages"></Messages>
      </div>
      <div class="w-1/3 border-2 rounded">
        <Participants
          :participants="this.$store.getters.getParticipants"
        ></Participants>
      </div>
    </div>
    <div class="bg-gray-200 py-2 border-2 rounded">
      <Input @send-message="sendMessage"></Input>
    </div>
  </div>
</template>

<script>
import Messages from "../components/Messages";
import Participants from "../components/Participants";
import Input from "../components/Input";
export default {
  name: "Main",
  components: {
    Messages,
    Participants,
    Input,
  },
  created() {
    if (this.$store.getters.isLoggedIn) {
      this.$store.dispatch("getParticipants");
      this.$store.dispatch("getMessages");

      let pusher = new Pusher("e621f52f402d1a538a2f", {
        cluster: "eu",
      });
      let channel = pusher.subscribe("message-channel");
      channel.bind("new-message", () => {
        this.$store.dispatch("getMessages");
        this.setScroll();
      });
    }
  },
  mounted() {
    this.setScroll();
  },

  data() {
    return {
      page: 1,
    };
  },

  methods: {
    sendMessage(message) {
      if (message.replace(/ /g, "")) {
        this.$store.dispatch("sendMessage", message);
      }
    },
    handleScroll(e) {
      if (e.target.scrollTop === 0) {
        this.page++;
        this.$store.dispatch("loadMoreMessages", this.page);
      }
    },
    setScroll() {
      var container = this.$el.querySelector("#messages");
      container.scrollTop = container.scrollHeight;
    },
  },
};
</script>

<style>
</style>