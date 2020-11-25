import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/signin",
    name: "Signin",
    component: () =>
      import(/* webpackChunkName: "signin" */ "../views/Signin.vue"),
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: () =>
      import(/* webpackChunkName: "checkout" */ "../views/Checkout.vue"),
  },
  {
    path: "/not-found",
    name: "NotFound",
    component: () =>
      import(/* webpackChunkName: "notfound" */ "../views/NotFound.vue"),
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
