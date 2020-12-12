import Vue from "vue";
import App from "./App.vue";
import ToggleButton from "vue-js-toggle-button";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;
Vue.use(ToggleButton);

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
