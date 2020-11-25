<template>
  <div class="product">
    <p>{{ title }}</p>
    <div class="product__price__rating__wrapper">
      <p class="product__price">
        <small>$</small>
        <strong>{{ price }}</strong>
      </p>
      <div class="product__rating">
        <v-icon
          v-for="index in rating"
          :key="index"
          id="product__rating__icon"
          >{{ starIcon }}</v-icon
        >
      </div>
    </div>
    <img :src="image" :alt="title" />
    <button class="add__to__cart__button" @click="addToBasket">
      Add to Cart
    </button>
  </div>
</template>

<script>
import { mdiStar } from "@mdi/js";

export default {
  name: "ProductCardComponent",
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
    addToBasket() {
      this.$store.commit("addItemToBasketMutation", {
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
.product {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: 10px;
  background-color: white;
  z-index: 1;
  padding: 20px;
  width: 100%;
}

.product__info {
  height: 100px;
  margin-bottom: 15px;
}

.product__price {
  margin-top: 5px;
}

.product__rating {
  display: flex;
}

#product__rating__icon {
  color: #f0c14b;
}

.product > img {
  width: 100%;
  max-height: 200px;
  object-fit: contain;
  margin-bottom: 15px;
}

.add__to__cart__button {
  background-color: #f0c14b;
  border: 1px solid;
  padding: 2px 10px;
  border-color: #a88734 #9c7e31 #846a29;
  width: max-content;
  margin: auto;
}

.product__price__rating__wrapper {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
</style>