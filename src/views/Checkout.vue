<template>
  <div class="checkout row">
    <div class="checkout__left col-9">
      <div class="checkout__container">
        <div v-if="basket.length === 0">
          <h1 class="checkout__title">Your Amazon Cart is empty</h1>
          <p>Shop today’s deals</p>
        </div>
        <div v-else>
          <h1 class="checkout__title">Your Shopping Cart</h1>
          <template v-for="item in basket">
            <CheckoutItem
              :id="item.id"
              :title="item.title"
              :price="item.price"
              :rating="item.rating"
              :image="item.image"
              :key="item.id"
            />
          </template>
        </div>
      </div>
    </div>
    <div v-if="basket.length !== 0" class="checkout__right col-3">
      <SubTotal :basket="basket" />
    </div>
  </div>
</template>

<script>
import CheckoutItem from "@/components/CheckoutItem.vue";
import SubTotal from "@/components/SubTotal.vue";

export default {
  name: "Checkout",
  computed: {
    basket() {
      return this.$store.state.basket;
    },
  },
  components: {
    CheckoutItem,
    SubTotal,
  },
};
</script>


<style scoped>
.checkout {
  display: flex;
  padding: 20px;
  height: max-content;
}

.checkout__container {
  margin: 10px 10px;
}

.checkout__title {
  margin-right: 10px;
  padding: 10px 0px;
  border-bottom: 1px solid lightgray;
}

.checkout__ad {
  width: 100%;
  margin-bottom: 10px;
}
</style>