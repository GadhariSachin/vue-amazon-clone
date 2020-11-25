<template>
  <nav class="header">
    <!-- logo on left  -->
    <router-link to="/">
      <img
        class="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="amazon india"
      />
    </router-link>

    <!-- serach box  -->
    <div class="header__search">
      <v-text-field solo dense label="Search Product"></v-text-field>
      <v-icon id="header__searchIcon">{{ searchIcon }}</v-icon>
    </div>

    <!-- 3 links  -->
    <div class="header__nav">
      <!-- 1st link  -->
      <router-link to="/signin" class="header__link">
        <div class="header__option">
          <span class="header__optionLineOne">Hello, John</span>
          <span class="header__optionLineTwo">Sign In</span>
        </div>
      </router-link>

      <!-- 2nd link  -->
      <router-link to="/not-found" class="header__link">
        <div class="header__option">
          <span class="header__optionLineOne">Returns</span>
          <span class="header__optionLineTwo">& Orders</span>
        </div>
      </router-link>

      <!-- 3rd link  -->
      <router-link to="/not-found" class="header__link">
        <div class="header__option">
          <span class="header__optionLineOne">Your</span>
          <span class="header__optionLineTwo">Prime</span>
        </div>
      </router-link>
    </div>

    <!-- cart item  -->
    <router-link to="/checkout" class="header__link">
      <div class="header__optionBasket">
        <span class="header__optionLineTwo header__basketCount">
          {{ basketItemCount }}
        </span>
        <v-icon id="header__cartIcon">{{ cartIcon }}</v-icon>
      </div>
    </router-link>
  </nav>
</template>

<script>
import { mdiCartOutline, mdiMagnify } from "@mdi/js";

export default {
  name: "Navbar",
  data: () => ({
    cartIcon: mdiCartOutline,
    searchIcon: mdiMagnify,
  }),
  computed: {
    basketItemCount() {
      return this.$store.getters.basketItemCount;
    },
  },
};
</script>

<style scoped>
.header {
  background-color: #131921;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10000;
}

.header__logo {
  max-width: 100px;
  object-fit: contain;
  margin: 0 20px;
  margin-top: 18px;
}

.header__search {
  display: flex;
  flex: 1;
}

.header__searchInput {
  height: 12px;
  padding: 10px;
  border: none;
  width: 100%;
}

.header__nav {
  display: flex;
  justify-content: space-evenly;
}

.header__link {
  color: white;
  text-decoration: none;
}

.header__option {
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-right: 10px;
}

.header__optionLineOne {
  font-size: 14px;
}

.header__optionLineTwo {
  font-size: 13px;
  font-weight: 800;
}

.header__optionBasket {
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  margin-left: 20px;
}

.header__basketCount {
  margin-left: 10px;
  margin-right: 10px;
}
.v-text-field--outlined,
.v-text-field--solo {
  height: 38px;
}

#header__searchIcon {
  color: #131921;
  background-color: #cd9042;
  padding: 5px;
  height: 38px !important;
  margin-left: -2px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  margin-right: 20px;
}

#header__cartIcon {
  color: white;
}
</style>