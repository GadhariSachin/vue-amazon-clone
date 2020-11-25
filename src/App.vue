<template>
  <div id="app">
    <Navbar v-if="this.$route.path !== '/signin'" />
    <router-view></router-view>
    <Footer v-if="this.$route.path === '/'" />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style>
body {
  background-color: #eaeded;
}
</style>

