<template>
  <div class="home">
    <img
      src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/jupiter20/GWphase2/v2/Phase2_Unrec_PC_1X_Hero_1500x600._CB417374214_.jpg"
      class="home__image"
      alt="Home Banner"
    />
    <!-- Product - id, title, price, rating, image  -->
    <div class="home__row">
      <ProductCard
        :id="3241"
        title="Philips BT3203/15 cordless rechargeable Beard Trimmer - 10 length settings; 45 min run time"
        price="11.96"
        :rating="4"
        image="https://images-na.ssl-images-amazon.com/images/I/61in6iE1B9L._SX450_.jpg"
      />
      <ProductCard
        :id="11"
        title="Philips BT3203/15 cordless rechargeable Beard Trimmer - 10 length settings; 45 min run time"
        price="11.96"
        :rating="4"
        image="https://images-na.ssl-images-amazon.com/images/I/61in6iE1B9L._SX450_.jpg"
      />
    </div>
    <div class="home__row">
      <ProductCard
        :id="112"
        title="Philips BT3203/15 cordless rechargeable Beard Trimmer - 10 length settings; 45 min run time"
        price="11.96"
        :rating="4"
        image="https://images-na.ssl-images-amazon.com/images/I/61in6iE1B9L._SX450_.jpg"
      />
      <ProductCard
        :id="12131"
        title="Philips BT3203/15 cordless rechargeable Beard Trimmer - 10 length settings; 45 min run time"
        price="11.96"
        :rating="4"
        image="https://images-na.ssl-images-amazon.com/images/I/61in6iE1B9L._SX450_.jpg"
      />
      <ProductCard
        :id="34532"
        title="Philips BT3203/15 cordless rechargeable Beard Trimmer - 10 length settings; 45 min run time"
        price="11.96"
        :rating="4"
        image="https://images-na.ssl-images-amazon.com/images/I/61in6iE1B9L._SX450_.jpg"
      />
    </div>
    <br />
    <br />
  </div>
</template>


<script>
// @ is an alias to /src
import ProductCard from "./ProductCard.vue";

export default {
  name: "Home",
  components: {
    ProductCard,
  },
};
</script>

<style scoped>
.home {
  margin: 0 auto;
}

.home__image {
  width: 100%;
  object-fit: contain;
  mask-image: linear-gradient(to bottom, rgb(0 0 0), rgb(12 12 12 / 5%));
  z-index: -1;
  margin-bottom: -300px;
}

.home__row {
  display: flex;
  z-index: 1;
  margin-left: 5px;
  margin-right: 5px;
}
</style>