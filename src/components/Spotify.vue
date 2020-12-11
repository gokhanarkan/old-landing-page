<template>
  <div v-if="album">
    Most recently played song on Spotify:<br />
    <em
      ><a :href="songUrl" class="links" target="_blank">{{ title }}</a> by
      {{ artist }}</em
    >
    <br />
  </div>
</template>

<script>
  import axios from "axios";
  export default {
    name: "Spotify",
    props: {
      preference: String,
    },
    data: function() {
      return {
        album: "",
        albumImageUrl: "",
        artist: "",
        songUrl: "",
        title: "",
      };
    },
    methods: {
      async getSpotifyData() {
        const response = await axios.get(
          "https://4tiumvx0uh.execute-api.eu-west-2.amazonaws.com/what-im-listening?preference=mostRecent"
        );
        if (response.status === 200) {
          const data = response.data.data;
          this.album = data.album;
          this.albumImageUrl = data.albumImageUrl;
          this.artist = data.artist;
          this.songUrl = data.songUrl;
          this.title = data.title;
        }
      },
    },
    mounted() {
      this.getSpotifyData();
    },
  };
</script>

<style scoped>
  .links {
    text-decoration: underline;
    background: unset;
    text-shadow: unset;
  }
</style>
