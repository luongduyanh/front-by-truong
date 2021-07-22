import Vue from "vue";
import App from "./App.vue";
import router from "./routers";
import store from "./stores";
import vuetify from "./plugins/vuetify";
import Vuelidate from "vuelidate";
import "vuetify/dist/vuetify.min.css";
import "@mdi/font/css/materialdesignicons.css";

Vue.use(Vuelidate);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
