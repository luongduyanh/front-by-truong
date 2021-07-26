<template>
  <v-container>
    <v-layout row wrap>
      <v-flex
        xs12
        sm6
        md4
        lg2
        v-for="product in productsByBrand"
        :key="product.ID"
        class="cart"
      >
        <Product :product="product" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Product from "./Product.vue";
export default {
  name: "ProductListByBrand",
  computed: {
    ...mapGetters("product", ["productsByBrand"]),
  },
  components: {
    Product,
  },
  methods: {
    ...mapActions("product", ["getProductsByBrand", "addCart", "removeCart"]),
  },
  mounted() {
    this.getProductsByBrand(this.$route.params.idBrand);
  },
};
</script>

<style scoped>
.cart {
  margin: 1rem !important;
}
</style>