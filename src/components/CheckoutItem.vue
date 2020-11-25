<template>
  <div class="checkoutProduct">
    <img class="checkoutProduct__image" :src="image" :alt="title" />
    <div class="checkoutProduct__info">
      <p class="checkoutProduct__title">{{ title }}</p>

      <p class="checkoutProduct__price">
        <small>$</small>
        <strong>{{ price }}</strong>
      </p>
      <div class="checkoutProduct__rating">
        <v-icon
          v-for="index in parseInt(rating)"
          :key="index"
          id="product__rating__icon"
          >{{ starIcon }}</v-icon
        >
      </div>
      <button @click="removeFromBasket">Remove from cart</button>
    </div>
  </div>
</template>
<script>
import { mdiStar } from "@mdi/js";

export default {
  name: "CheckoutItem",
  data: () => ({
    starIcon: mdiStar,
  }),
  props: {
    id: {
      type: [Number, String],
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    rating: {
      type: [Number, String],
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  methods: {
    removeFromBasket() {
      this.$store.commit("removeItemFromBasketMutation", {
        id: this.id,
        title: this.title,
        price: this.price,
        rating: this.rating,
        image: this.image,
      });
    },
  },
};
</script>

<style scoped>
.checkoutProduct {
  display: flex;
  margin-bottom: 20px;
  margin-top: 20px;
}

.checkoutProduct__image {
  object-fit: contain;
  width: 180px;
  margin: 0;
}

.checkoutProduct__info {
  padding-left: 20px;
}

.checkoutProduct__rating {
  display: flex;
}

.checkoutProduct__title {
  font-size: 17px;
  font-weight: 800;
}

.checkoutProduct__info > button {
  background-color: #f0c14b;
  border: 1px solid;
  padding: 2px 10px;
  border-color: #a88734 #9c7e31 #846a29;
  width: max-content;
  margin: auto;
}

#product__rating__icon {
  color: #f0c14b;
}
</style>