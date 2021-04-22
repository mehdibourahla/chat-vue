<template>
  <div class="bg-gray-200 flex flex-col h-full justify-around">
    <Participant
      :key="participant.id"
      v-for="participant in participants"
      :participant="participant"
    />
  </div>
</template>

<script>
import Participant from "./Participant";
export default {
  name: "Participants",
  props: {
    participants: Array,
  },
  components: {
    Participant,
  },
};
</script>

<style>
</style>