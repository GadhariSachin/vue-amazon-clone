import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
    basket: [],
  },
  getters: {
    basketItemCount(state) {
      return state.basket.length;
    },
  },
  mutations: {
    userMutation(state, response) {
      state.user = response;
    },
    addItemToBasketMutation(state, response) {
      state.basket.push(response);
    },
    removeItemFromBasketMutation(state, response) {
      state.basket = state.basket.filter((item) => item.id !== response.id);
    },
  },
  actions: {
    // addItemToBasket(context, payload) {
    //   // ajax call
    // },
    // removeItemFromBasket(context, payload) {
    //   // ajax call
    // },
  },
  modules: {},
});
