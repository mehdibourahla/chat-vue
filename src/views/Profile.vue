<template>
  <form
    v-on:submit.prevent="saveProfile"
    enctype="multipart/form-data"
    class="px-4 bg-gray-200 rounded p-2 overflow-hidden max-w-2xl mx-auto"
  >
    <div class="flex flex-col items-center">
      <img
        v-show="picture"
        ref="pictureImg"
        class="rounded-full h-48 w-48 my-2"
      />
      <span
        v-show="!picture"
        class="material-icons-outlined block"
        style="font-size: 192px"
      >
        account_circle
      </span>
      <div class="relative">
        <button
          class="bg-blue-400 text-white p-2 rounded font-semibold inline-flex items-center"
          v-on:click.prevent="$refs.inputFile.click()"
        >
          <span class="material-icons-outlined"> file_upload </span>
          Upload a picture
        </button>
        <input
          ref="inputFile"
          accept="image/*"
          class="absolute left-0 hidden"
          type="file"
          placeholder="Upload picture"
          @change="uploadFile"
        />
      </div>
    </div>
    <div class="w-full my-2">
      <label for="bio" class="font-semibold">Add a bio</label>
      <textarea
        v-model="bio"
        class="block w-full rounded border-2 border-blue-400 h-24 p-2"
      ></textarea>
    </div>
    <button
      type="submit"
      class="w-24 float-right bg-green-400 text-white font-semibold p-2 rounded"
    >
      Save
    </button>
  </form>
</template>

<script>
import axios from "axios";
export default {
  name: "Profile",
  data() {
    return {
      bio: "",
      picture: null,
    };
  },
  methods: {
    uploadFile(e) {
      this.picture = e.target.files[0];
      this.$refs.pictureImg.src = URL.createObjectURL(e.target.files[0]);
    },
    saveProfile() {
      let formData = new FormData();
      formData.set("bio", this.bio);
      formData.set("picture", this.picture);

      const config = { headers: { "Content-Type": "multipart/form-data" } };

      axios
        .put("api/profile", formData, config)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>

<style>
</style>