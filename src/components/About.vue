<template>
    <article class="article">

        <h1 id="name">Gökhan Arkan</h1>

        <h3 class="subtitle" id="occupation"> Software Engineer &amp; {{ second_occupation }} </h3>

        <section class="body">

            <p id="body">I am a backend focused software engineer based in London, UK. (born &amp; raised in Istanbul, Turkey)<br><br>
            I work in the fintech industry and studying towards my Master's degree at the University of Oxford.<br><br>
            My professional interests are; distributed systems, machine learning, cloud computing and human-computer interaction.<br><br>
            I like listening &amp; creating music, cycling and photography/videography.
                In fact, I'll be glad to accompany charity/volunteer work as a photographer.<br><br>
            Although I am not actively using social media, please feel free to
                <a style="text-decoration:underline;background:unset;text-shadow:unset;" href="mailto:hi@gokhanarkan.com">
                    email me</a> if you have any enquiries.<br><br></p>

        </section>

    </article>
</template>


<script>
export default {
    name: 'About',
    props: {
    second_occupation: String
  }
}
</script>


<style scoped>
    :root {
    --main-color: #233646;
    --light-color: #c8c9cd;
    }
    .article, h1, p {
        color: #c8c9cd;
    }
</style>