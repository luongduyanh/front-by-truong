<template>
  <v-container>
    <v-layout row wrap>
      <v-flex
        xs12
        sm6
        md4
        lg2
        v-for="product in products"
        :key="product.name"
        class="cart"
      >
        <form @click="$router.push({ name: 'product-detail' })">
          <v-card class="mx-auto">
            <v-img :src="product.image" height="200px"></v-img>

            <v-card-title>
              <div color="blue darken-2">{{ product.name }}</div>
            </v-card-title>

            <v-card-subtitle>
              <div class="price">
                <div class="new-price">{{ product.newPrice }}</div>
                <div class="old-price">{{ product.oldPrice }}</div>
              </div>
              <div v-if="product.discount != ''" class="discount">
                <v-avatar color="red light-1" size="40">{{
                  product.discount
                }}</v-avatar>
              </div>
            </v-card-subtitle>
          </v-card>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "ProductList",
  data() {
    return {
      products: [
        {
          name: "Garmin Fenix 6",
          newPrice: "12.670.000 ₫",
          oldPrice: "14.990.000 ₫",
          discount: "- 15%",
          image:
            "https://cdn.techzones.vn/Data/Sites/1/Product/20205/techzones-garmin-fenix-6-silver-with-black-band.png",
        },
        {
          name: "Amazfit GTS 2",
          newPrice: "3.590.000 ₫",
          oldPrice: "",
          discount: "",
          image:
            "https://cdn.techzones.vn/Data/Sites/1/Product/27840/thumbs/320xtechzones-xiaomi-huami-amazfit-gts-2-1.png",
        },
        {
          name: "Garmin Instinct - Esports Edition",
          newPrice: "7.390.000 ₫",
          oldPrice: "10.300.000 ₫",
          discount: "- 30%",
          image:
            "https://cdn.techzones.vn/Data/Sites/1/Product/27829/thumbs/320xtechzones-garmin-instinct-esports-edition.jpg",
        },
        {
          name: "Apple Watch Series 6 Edition",
          newPrice: "12.990.000 ₫",
          oldPrice: "13.990.000 ₫",
          discount: "- 7%",
          image:
            "https://cdn.techzones.vn/Data/Sites/1/Product/27592/thumbs/320xtechzones-apple-watch-series-6-edition-1.jpg",
        },
        {
          name: "Garmin Forerunner 745",
          newPrice: "11.241.000 ₫",
          oldPrice: "15.420.000 ₫",
          discount: "- 15%",
          image:
            "https://cdn.techzones.vn/Data/Sites/1/Product/25707/thumbs/320xtechzones-garmin-forerunner-745.png",
        },
        {
          name: "Garmin Instinct Solar - Tactical Edition",
          newPrice: "9.830.000 ₫",
          oldPrice: "",
          discount: "",
          image:
            "https://cdn.techzones.vn/Data/Sites/1/Product/25014/thumbs/320xtechzones-garmin-instinct-solar-tactical-edition.png",
        },
        {
          name: "Garmin Fenix 6S - Pro Solar Edition",
          newPrice: "19.170.000 ₫",
          oldPrice: "23.170.000 ₫",
          discount: "- 15%",
          image:
            "https://cdn.techzones.vn/Data/Sites/1/Product/25004/thumbs/320xtechzones-garmin-fnix-6s-pro-solar-edition.jpg",
        },
        {
          name: "Apple Watch Series 5 Hermes",
          newPrice: "39.500.000 ₫",
          oldPrice: "",
          discount: "",
          image:
            "https://cdn.techzones.vn/Data/Sites/1/Product/23977/thumbs/320xtechzones-apple-watch-series-5-hermes-1.jpg",
        },
        {
          name: "Garmin MARQ Golfer",
          newPrice: "49.990.000 ₫",
          oldPrice: "53.990.000",
          discount: "- 10%",
          image:
            "https://cdn.techzones.vn/Data/Sites/1/Product/24932/thumbs/320xtechzones-garmin-marq-golfer-1.jpg",
        },
        {
          name: "Garmin Fenix 5X",
          newPrice: "Liên hệ",
          oldPrice: "",
          discount: "",
          image:
            "https://cdn.techzones.vn/Data/Sites/1/Product/960/thumbs/320xtechzones-garmin-fenix-5x-sport-band-1.jpg",
        },
        {
          name: "Garmin Fenix 5S",
          newPrice: "Liên hệ",
          oldPrice: "",
          discount: "",
          image:
            "https://cdn.techzones.vn/Data/Sites/1/Product/957/thumbs/320xtechzones-garmin-fenix-5s-sport-band-2.jpg",
        },
      ],
    };
  },
};
</script>

<style scoped>
.cart {
  margin: 1rem !important;
}
.v-card {
  height: 300px;
}
.v-card__title {
  line-height: 18px;
}
.v-card__subtitle {
  display: flex;
  justify-content: space-between;
}
.old-price {
  font-size: 12px;
  text-decoration: line-through;
}
</style>