<template>
  <div class="container" style="padding: 30px">
    <div class="row d-flex justify-content-center">
      <div class="list-group col-8">
        <router-link
          v-for="item in cart"
          :key="item.ID"
          :to="'/details/' + item.ID"
          class="
            list-group-item list-group-item-action
            d-flex
            justify-content-between
            align-items-center
          "
        >
          <v-col>
            <img :src="item.image_cover" alt height="60" width="60" />
          </v-col>
          <v-col>
            <p>{{ item.name }}</p>
          </v-col>
          <v-col>
            <p>Unique Price</p>
            <p>{{ item.price_cover }}</p></v-col
          >
          <v-col
            ><p>Total Price</p>
            <p>
              {{
                Intl.NumberFormat("en-US").format(
                  parseFloat(item.price_cover.replace(/\D/g, "")) *
                    item.quantity
                )
              }}
              đ
            </p>
          </v-col>
        </router-link>
        <div
          class="
            list-group-item list-group-item-action
            d-flex
            justify-content-between
            align-items-center
          "
        >
          <v-col> <p class="h4">Total</p></v-col>
          <v-col></v-col>
          <v-col></v-col>
          <v-col>
            <p>Total Price</p>
            <p>{{ Intl.NumberFormat("en-US").format(totalPrice) }} đ</p></v-col
          >
        </div>
        <button
          @click="checkout()"
          type="button"
          class="btn btn-primary btn-lg btn-block mt-4"
        >
          Checkout
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Cart",
  data() {
    return {
      totalPrice: 0,
    };
  },
  computed: {
    ...mapGetters("product", ["cart"]),
    ...mapGetters("account", ["user"]),
  },
  methods: {
    ...mapActions("product", ["removeCart"]),
    calcPrice() {
      this.cart.forEach((element) => {
        this.totalPrice +=
          parseFloat(element.price_cover.replace(/\D/g, "")) * element.quantity;
      });
    },
    checkout() {
      const vm = this;
      setTimeout(() => {
        vm.removeCart();
        alert("Purchase successful!");
        vm.$router.push("/");
      }, 2000);
    },
  },
  mounted() {
    this.calcPrice();
  },
};
</script>

<style>
@import url(../../assets/css/bootstrap.min.css);
</style>