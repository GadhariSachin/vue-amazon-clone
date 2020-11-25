<template>
  <div>
    <HomeWrapper />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeWrapper from "@/components/HomeWrapper.vue";

export default {
  name: "Home",
  components: {
    HomeWrapper,
  },
};
</script>