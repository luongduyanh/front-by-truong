<template>
  <div class="container">
    <!-- Image start -->
    <div class="images">
      <h1>Ảnh ở đây</h1>
    </div>
    <!-- Image end -->
    <v-spacer></v-spacer>
    <!-- Information start -->
    <div class="information">
      <!-- Name -->
      <div class="name">
        <h1>Garmin Fenix 6</h1>
      </div>
      <!-- Brand -->
      <div class="brand">
        <p>Thương hiệu: Garmin</p>
      </div>
      <!-- Code Product -->
      <div class="code">Mã sản phẩm: 010-02157-45</div>
      <!-- Options -->
      <div class="options">
        <h2>Tùy chọn sản phẩm</h2>
        <div class="op1">
          <h3>color</h3>
          <div class="option-value">
            <v-radio-group v-model="row" row>
              <v-radio label="black" value="1"></v-radio>
              <v-radio label="gold" value="2"></v-radio>
              <v-radio label="grey" value="3"></v-radio>
              <v-radio label="silver" value="4"></v-radio>
            </v-radio-group>
          </div>
        </div>
        <div class="op2">
          <h3>material</h3>
          <div class="option-value">
            <v-radio-group v-model="row" row>
              <v-radio label="sapphire" value="1"></v-radio>
              <v-radio label="glass" value="2"></v-radio>
            </v-radio-group>
          </div>
        </div>
        <div class="op2">
          <h3>albert</h3>
          <div class="option-value">
            <v-radio-group v-model="row" row>
              <v-radio label="leather" value="1"></v-radio>
              <v-radio label="silicone" value="2"></v-radio>
              <v-radio label="titanium" value="3"></v-radio>
            </v-radio-group>
          </div>
        </div>
      </div>
      <!-- Price -->
      <div class="text-center price flat red--text">Giá viết ở đây</div>
      <!-- Add cart -->
      <div class="addCart">
        <v-btn color="primary" elevation="2" large @click="findVariantCode">
          Add to cart <v-icon right dark> mdi-cart </v-icon></v-btn
        >
      </div>
    </div>
    <!-- Information End -->
    <!-- Description Start -->
    <div class="description">
      <ul>
        <h2>Thông số kĩ thuật</h2>
        <br />
        <li>Kích thước: 51mm</li>
        <li>Mặt kính: power class / sapphire</li>
        <li>Dây: titanium / silicone / da</li>
        <li>Chống nước: 10ATM</li>
        <li>Pin: lên đến 21 ngày</li>
        <li>ProSolar</li>
      </ul>
    </div>
    <!-- Description End -->
  </div>
</template>

<script>
export default {
  name: "productDetail",
  data() {
    return {
      productImages: [
        {
          productID: 1,
          productImage:
            "https://cdn.techzones.vn/Data/Sites/1/Product/20205/techzones-garmin-fenix-6-silver-with-black-band.png",
          productName: "Garmin Fenix 6",
          items: [
            {
              itemID: 1,
            },
          ],
        },
      ],
      variants: [
        {
          variantId: 0,
          variantCode: "",
          variantName: "Garmin Fenix 6",
          price: "12.670.000 ₫",
        },
        {
          variantId: 1,
          variantCode: 111,
          variantName: "Garmin Fenix 6 var111",
          price: "Giá của 111",
        },
        {
          variantId: 2,
          variantCode: 112,
          variantName: "Garmin Fenix 6 var112",
          price: "Giá của 112",
        },
        {
          variantId: 3,
          variantCode: 113,
          variantName: "Garmin Fenix 6 var113",
          price: "Giá của 113",
        },
      ],
      //  options : map[key: option_name, value: map.option_value]
      //  optionValue : map[key: option_value_name, value: piece of variant's code]
      // It be like: 1 variant is:
      // Name product: Garmin Fenix 6,
      // Option: color = gold, material = sapphire, albert = titanium
      // => Code: 213
      // Compare with map[key: code, value: price], we have price of each variant
      options: {
        color: {
          black: "1",
          gold: "2",
          grey: "3",
          silver: "4",
        },
        material: {
          sapphire: "1",
          glass: "2",
        },
        albert: {
          leather: "1",
          silicone: "2",
          titanium: "3",
        },
      },
      priceOfVariant: {
        111: "Giá của code 111",
        112: "Giá của code 112",
        113: "Giá của code 113",
        121: "Giá của code 121",
        122: "Giá của code 122",
        123: "Giá của code 123",

        211: "Giá của code 211",
        212: "Giá của code 212",
        213: "Giá của code 213",
        221: "Giá của code 221",
        222: "Giá của code 222",
        223: "Giá của code 223",

        311: "Giá của code 311",
        312: "Giá của code 312",
        313: "Giá của code 313",
        321: "Giá của code 321",
        322: "Giá của code 322",
        323: "Giá của code 323",

        411: "Giá của code 411",
        412: "Giá của code 412",
        413: "Giá của code 413",
        421: "Giá của code 421",
        422: "Giá của code 422",
        423: "Giá của code 423",
      },
      radioGroup: 1,
    };
  },
  method: {
    findVariantCode() {
      console.log("run rui ne");
      console.log(this.radioGroup);
    },
    updatePrice() {},
  },
};
</script>

<style scoped>
.container {
  display: flex;
}
</style>