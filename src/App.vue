<template>
  <div id="app">
    <v-divider></v-divider>
    <toggle-button @change="changeTheme()" :value="true"
               :labels="{checked: 'Dark Mode', unchecked: 'Light Mode'}" :color="{checked: '#6e6e6e', unchecked: '#233646'}" :width="80" class="toggle-button"/>
    <About second_occupation="Tea Lover"/>
      <Contact />
      <div class="handout"></div>
  </div>
</template>

<script>
import About from './components/About.vue'
import Contact from './components/Contact'

export default {
  name: 'App',
  components: {
    About,
    Contact
  },
  methods: {
    changeTheme: function() {
      document.body.classList.toggle("light-background");
      document.getElementById("name").classList.toggle("dark-text");
      document.getElementById("occupation").classList.toggle("dark-text");
      document.getElementById("body").classList.toggle("dark-text");
      document.getElementById("body-other").classList.toggle("dark-text");
      document.getElementById("projects").classList.toggle("dark-text");
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
  .handout {
    padding-bottom: 5rem;
  }
  @import './assets/styles/tufte.min.css';
</style>
