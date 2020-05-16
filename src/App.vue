<template>
  <div id="app">
    <About second_occupation="Tea Lover"/>
  </div>
</template>

<script>
import About from './components/About.vue'

export default {
  name: 'App',
  components: {
    About
  }
}
</script>

<style>
  body {
    background-color: #233646;
  }
  @import './assets/styles/tufte.min.css';
</style>
