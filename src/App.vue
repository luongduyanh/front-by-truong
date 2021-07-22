<template>
  <v-app>
    <v-main>
      <Header />
      <v-content>
        <router-view />
      </v-content>
      <Footer />
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  data: () => ({
    //
  }),
  computed: {
    currentRouteName() {
      console.log("this.route", this.$route.name);
      return this.$route.name;
    },
    ...mapGetters({
      authUser: "auth/authUser",
    }),
  },
  mounted() {
    //Clear the browser cache data in localStorage when closing the browser window
    window.onbeforeunload = function (e) {
      var storage = window.localStorage;
      storage.clear();
    };
  },
  methods: {
    ...mapActions({
      getUser: "auth/ACTION_SAVE_AUTH_USER",
    }),
  },
  created() {
    if (!this.authUser) {
      this.getUser();
    }
  },
};
</script>
<style lang="scss">
@import "@/assets/scss/index.scss";
</style>
