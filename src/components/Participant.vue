<template>
  <div class="flex flex-col items-center bg-white rounded-full">
    <img src="../assets/logo.png" alt="" class="w-20 rounded-full" />
    <h1 class="font-bold">{{ participant.name }}</h1>
  </div>
</template>

<script>
export default {
  name: "Participant",
  props: {
    participant: Object,
  },
};
</script>

<style>
</style>