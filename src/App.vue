<template>
  <div id="app">
    <toggle-button @change="changeTheme()" :value="true"
               :labels="{checked: 'Dark Mode', unchecked: 'Light Mode'}" :color="{checked: '#c8c9cd', unchecked: '#233646'}" :width="80" class="toggle-button"/>
    <About second_occupation="Tea Lover"/>
  </div>
</template>

<script>
import About from './components/About.vue'

export default {
  name: 'App',
  components: {
    About
  },
  methods: {
    changeTheme: function() {
      document.body.classList.toggle("light-background");
      document.getElementById("name").classList.toggle("dark-text");
      document.getElementById("occupation").classList.toggle("dark-text");
      document.getElementById("body").classList.toggle("dark-text");
    }
  }
}
</script>

<style>
  body {
    background-color: #233646;
  }
  .light-background {
    background-color: #c8c9cd;
  }
  .dark-text {
    color: #233646 !important;
  }
  .toggle-button {
    float: right;
  }
  @media only screen and (min-width: 760px) {
    .toggle-button {
      float: left;
    }
  }
  @import './assets/styles/tufte.min.css';
</style>
