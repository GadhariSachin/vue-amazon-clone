<template>
  <div class="subtotal">
    <div class="subtotal__helptext__container">
      <p class="subtotal__helptext">
        <v-icon>{{ infoIcon }}</v-icon> Add ₹ 20.00 of eligible items to your
        order to qualify for FREE Delivery. Details
      </p>
    </div>
    <div class="subtotal__price__container">
      <p class="subtotal__heading">Subtotal ({{ basket.length }} item):</p>
      <p class="subtotal__price">
        <span class="subtotal__currency">$</span> {{ totalPrice }}
      </p>
      <div class="proceed__to__buy__button">Proceed to Buy</div>
    </div>
  </div>
</template>

<script>
import { mdiInformation } from "@mdi/js";

export default {
  name: "SubTotal",
  props: ["basket"],
  data() {
    return {
      infoIcon: mdiInformation,
    };
  },
  computed: {
    totalPrice() {
      let basketItems = this.basket;
      let amount = 0;
      basketItems.forEach((item) => (amount = amount + parseFloat(item.price)));
      return amount;
    },
  },
};
</script>

<style scoped>
.proceed__to__buy__button {
  background-color: #f0c14b;
  border: 1px solid;
  padding: 5px 20px;
  border-color: #a88734 #9c7e31 #846a29;
  width: auto;
  margin: auto;
  text-align: center;
}
.subtotal {
  display: flex;
  border: 1px solid lightgrey;
  flex-direction: column;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
}
.subtotal__helptext {
  font-size: 14px;
}
.subtotal__heading {
  font-size: 26px;
  font-weight: 400;
  margin-bottom: 5px;
}
.subtotal__price {
  font-size: 30px;
  font-weight: bold;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}
.subtotal__currency {
  font-size: 16px;
  margin-right: 5px;
}
.subtotal__helptext__container {
  border-bottom: 1px solid lightgray;
  padding: 15px 20px;
}
.subtotal__price__container {
  padding: 20px;
  background-color: #f0f2f2;
  border-bottom-right-radius: 14px;
  border-bottom-left-radius: 14px;
}
</style>