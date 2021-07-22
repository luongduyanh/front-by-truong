<template>
  <div class="home">
    <Category />
    <Banner />
    <Product />
    <ProductList />
  </div>
</template>

<script>
import Banner from "../components/home/Banner";
import Product from "../components/products/Product.vue";
import ProductList from "../components/products/ProductList.vue";
import Category from "../components/home/Category.vue";
export default {
  name: "Home",
  components: {
    Banner,
    Product,
    ProductList,
    Category,
  },
};
</script>
