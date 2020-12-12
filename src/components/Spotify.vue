<template>
  <div v-if="title">
    Most recently played song on Spotify:<br />
    <SpotifyCard
      :album="album"
      :albumImageUrl="albumImageUrl"
      :artist="artist"
      :songUrl="songUrl"
      :title="title"
    />
    <br />
    <small
      >PS:
      <a
        href="https://github.com/gokhj/lambda-spotify"
        class="links"
        target="_blank"
        rel="noreferrer noopener"
        >More info</a
      >
      about this card and how I did it.</small
    >
  </div>
</template>

<script>
  import axios from "axios";
  import SpotifyCard from "./SpotifyCard";
  export default {
    name: "Spotify",
    props: {
      preference: String,
    },
    components: {
      SpotifyCard,
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
        if (response.data.success) {
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
      /*
       * I am not showing the Spotify track on mobile;
       * so, no need to call the endpoint!
       * thought this would be a performance bump
       */
      if (window.innerWidth > 899) {
        this.getSpotifyData();
      }
    },
  };
</script>
