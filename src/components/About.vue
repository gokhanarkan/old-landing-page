<template>
    <article class="article">

        <h1>Gökhan Arkan</h1>

        <p class="subtitle"> Software Engineer & {{ second_occupation }} </p>

        <section class="body">

            <p>I am a backend focused software engineer based in London, UK. (born & raised in Istanbul, Turkey)</p>
            <p>I work in the fintech industry and studying towards my Master's degree at the University of Oxford.</p>
            <p>My professional interests are; distributed systems, machine learning, cloud computing and human-computer interaction.</p>
            <p>I like listening and creating music, cycling and photography/videography.
                In fact, I'll be glad to accompany charity/volunteer work as a photographer.</p>
            <p>Although I am not actively using social media, please feel free to 
                <a style="text-decoration:underline;background:unset;text-shadow:unset;" href="mailto:gokhanarkan@me.com">
                    email me</a> if you have any enquiries.</p>

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
    .article, h1, p {
        color:#c8c9cd;;
    }

    @media only screen and (max-width: 768px) {
        h1 {
            margin-top: 0 !important;
        }
    }
</style>