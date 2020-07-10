<template>
  <h1>VRR demo</h1>
  <a href="https://github.com/ProReNata/VueRestResource">
    <i>github.com/ProReNata/VueRestResource</i>
  </a>
  <div class="photo-info">
    <div>
      <h3>Choose a photo</h3>
      <select v-model="chosen">
        <option v-for="photo in photos" :value="photo" :key="photo.id"
          >Photo {{ photo.title.slice(0, 30) }}...</option
        >
      </select>
    </div>

    <div v-if="chosen">
      <p>Photo ID: {{ chosen.id }}</p>
      <p>Photo album ID: {{ chosen.albumId }}</p>
      <p>User ID: {{ user ? user.id : "fetching..." }}</p>
      <p>User Name: {{ user ? user.name : "fetching..." }}</p>
      <img :src="chosen.thumbnailUrl" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import vrr, { RootResource } from "./plugins/vrr";

const { asyncResourceGetter } = vrr;
const { Albums, Users, Photos } = RootResource;

export default {
  name: "VRR",
  data() {
    return {
      chosen: null,
    };
  },
  computed: {
    chosenAlbumId() {
      return this.chosen ? this.chosen.albumId : -1;
    },
    ...mapGetters(["photos"]),
    ...asyncResourceGetter("user", [Albums, Users], "this.chosenAlbumId", [
      (data) => data.userId,
      (data) => data,
    ]),
  },
  mounted() {
    Photos.list(this);
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.photo-info {
  text-align: left;
  width: 300px;
  margin-left: auto;
  margin-right: auto;
}
.photo-info label {
  margin-right: 10px;
}
</style>
