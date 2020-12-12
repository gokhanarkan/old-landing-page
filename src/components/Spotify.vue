<template>
  <div>
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
          return true;
        }
        // In case if the Spotify API is broken
        this.album = "Not available";
        this.albumImageUrl =
          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+";
        this.artist = "Not available";
        this.songUrl = "/";
        this.title = "Not available";
        return false;
      },
    },
    mounted() {
      this.getSpotifyData();
    },
  };
</script>
