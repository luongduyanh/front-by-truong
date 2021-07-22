<template>
  <div id="app">
    <v-row class="navbar">
      <v-col cols="4" lg="4" md="2" sm="2" xs="2">
        <div class="route-home" @click="$router.push({ name: 'home' })">
          DuyAnh|Truong
        </div>
      </v-col>
      <v-col lg="4" md="4" sm="4" xs="4" class="category">
        <v-row>
          <v-col class="nav-hover"></v-col>
          <v-col class="nav-hover">Men</v-col>
          <v-col class="nav-hover">Women</v-col>
          <v-col class="nav-hover">Sale</v-col>
          <v-col class="nav-hover">Contact</v-col>
          <v-col class="nav-hover"></v-col>
        </v-row>
      </v-col>
      <v-col cols="4" lg="4" md="6" sm="6" xs="6" class="nav-right">
        <v-row class="search">
          <v-col cols="6">
            <v-text-field
              class="border-input input-edit search-bar"
              filled
              rounded
              dense
              height="44"
              color="#171717"
              placeholder="Search"
              hide-details
            >
              <template v-slot:prepend-inner>
                <img
                  width="22"
                  height="30"
                  style="margin-right: 5px"
                  src="@/assets/svg/ic_searchBar.svg"
                />
              </template>
            </v-text-field>
          </v-col>
          <v-col cols="6" v-if="user">
            <v-row class="row-margin">
              <v-col cols="7" class="text-center nav-hover"> My Cart </v-col>
              <v-col cols="5">
                <button class="btn-logout" @click="logout()">LOGOUT</button>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="6" v-else>
            <v-row class="row-margin">
              <v-col cols="12">
                <button
                  class="btn-logout"
                  @click="$router.push({ name: 'sign-up' })"
                >
                  SIGN UP
                </button>
                <button
                  class="btn-login"
                  @click="$router.push({ name: 'login' })"
                >
                  LOGIN
                </button>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
      <v-col lg="10" md="10" sm="10" xs="10" class="respon-item">
        <v-row class="row-margin">
          <v-col lg="8" md="8" sm="8" xs="8"></v-col>
          <v-col lg="2" xs="2" class="respon-menu">
            <v-row>
              <v-col cols="6">
                <img width="30" height="40" src="@/assets/svg/ic_search.svg" />
              </v-col>
              <v-col cols="6"
                ><img
                  width="40"
                  height="40"
                  style="margin-right: 5px"
                  src="@/assets/svg/ic_menu.svg"
              /></v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Header",
  components: {},
  methods: {
    ...mapActions({ logoutUser: "auth/logout" }),
    logout() {
      this.logoutUser().then(() => {
        this.$router.push({ name: "home" }, () => {});
      });
    },
  },
  computed: {
    ...mapGetters({
      user: "auth/authUser",
    }),

    id() {
      return this.$route.params.id;
    },
    nameRoute() {
      return this.$route.name;
    },
    mini() {
      return this.toggleMini;
    },
  },
};
</script>
<style lang="scss">
.v-image__image {
  background-position: none !important;
}
.row-margin {
  margin-top: 0 !important;
  margin-bottom: 0 !important;
}
.text-center {
  display: flex;
  align-items: center;
}
.nav-hover {
  cursor: pointer;
}
.navbar {
  padding-left: 5%;
  padding-right: 5%;
  align-items: center;
  margin: 0 !important;
  border-bottom: 1px solid #dbdbdb;
  font-size: 18px;
}

.route-home {
  font-size: 26px;
  font-weight: 700;
}
.route-home:hover {
  cursor: pointer;
}
.search-bar {
  font-size: 20px !important;
}
.search {
  justify-content: center;
  align-items: center;
  .border-input {
    border-color: #dbdbbd !important;
  }
  .border-input:hover {
    border-color: #dbdbbd !important;
  }
}
.respon-item {
  display: none !important;
  justify-content: flex-end;
}
.btn-logout {
  height: 44px;
  width: 6rem;
  text-align: center;
  border-radius: 20px;
  border: none;
  background-color: #0a0101;
  color: #fafafa;
  font-size: 1rem;
  font-weight: 700;
}
.btn-login {
  margin-left: 1rem;
  height: 44px;
  width: 6rem;
  text-align: center;
  border-radius: 20px;
  border: none;
  background-color: #ffffff;
  color: #0a0101;
  border: 1px solid #dbdbdb;
  font-size: 1rem;
  font-weight: 700;
}
@media screen and (max-width: 568px) {
  //   .icon-bag{
  //   display: none;
  // }
  .respon-menu {
    display: flex;
    justify-content: flex-end;
  }
}
@media screen and (max-width: 1176px) {
  .category {
    display: none;
  }
  .nav-right {
    display: none;
  }
  .respon-item {
    display: flex !important;
  }
}
@media screen and (min-width: 1000px) {
  .btn-login {
    width: 4.5rem !important;
  }
  .btn-logout {
    width: 4.5rem !important;
  }
}
</style>
