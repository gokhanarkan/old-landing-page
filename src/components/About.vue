<template>
  <article class="article">
    <a
      class="float-left links"
      id="blog"
      href="https://arkan.me"
      target="_blank"
      rel="noreferrer noopener"
    >
      My Blog
    </a>
    <br /><br />

    <h1 id="name">Gökhan Arkan</h1>

    <h3 class="subtitle" id="occupation">
      Software Engineer &amp; {{ second_occupation }}
    </h3>

    <section class="body">
      <p id="body">
        I am a full-stack software engineer based in London, UK. (born &amp;
        raised in Istanbul, Turkey)<br /><br />
        I work in fintech and studying part-time towards my Master's degree at
        the University of Oxford.<br /><br />
        I like video-games, listening<label
          class="margin-toggle sidenote-number"
          for="band"
        ></label
        ><input type="checkbox" id="band" class="margin-toggle" /> or creating
        music,
        <span class="sidenote"
          ><em
            >My favourite band is
            <a
              class="links"
              href="https://americanmary.com/"
              target="_blank"
              rel="noreferrer noopener"
              >The National.</a
            ></em
          ></span
        >
        cycling, and photography. In fact, I'll be glad to accept invitations as
        a volunteer photographer for charity/community.
        <br /><br />
        I like building toy projects; you can check them at
        <a
          class="links"
          href="https://arkan.me"
          target="_blank"
          rel="noreferrer noopener"
        >
          my side projects blog</a
        >
        as well.<span class="marginnote"
          ><Spotify preference="mostRecent"/></span
        ><br />
        <br />
        Although I am not actively using social media, please feel free to email
        me at
        <a class="links" href="mailto:gokhan@hey.com"> gokhan@hey.com</a> if you
        have any enquiries. If you are unreasonable enough,
        <a class="links" href="https://post.arkan.me" target="_blank"
          >you can send me a POST request</a
        >, too. <br /><br />
        Alternatively, use the below button to contact me.
      </p>
    </section>
  </article>
</template>

<script>
  import Spotify from "./Spotify";

  export default {
    name: "About",
    components: {
      Spotify,
    },
    props: {
      second_occupation: String,
    },
  };
</script>

<style scoped>
  .article,
  h1,
  p {
    color: #c8c9cd;
  }
  .article {
    padding: 0;
  }
</style>
