<template>
  <div
    v-if="this.$store.getters.getToast"
    :class="toastState"
    class="border rounded-lg p-3 flex items-center text-white"
  >
    <span class="material-icons-outlined mr-1"> {{ toastIcon }} </span
    >{{ this.$store.getters.getToast.text }}
  </div>
</template>

<script>
export default {
  name: "Toaster",
  data() {
    return {
      toast: this.$store.getters.getToast,
    };
  },
  computed: {
    toastState: function () {
      return {
        "bg-red-400": this.$store.getters.getToast.status === "error",
        "bg-green-400": this.$store.getters.getToast.status === "success",
        "bg-gray-400": this.$store.getters.getToast.status === "loading",
      };
    },
    toastIcon: function () {
      if (this.$store.getters.getToast) {
        if (this.$store.getters.getToast.status === "error") return "error";
        else if (this.$store.getters.getToast.status === "success")
          return "check_circle";
        else return "pending";
      }
    },
  },
};
</script>

<style>
</style>