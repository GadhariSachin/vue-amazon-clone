<template>
  <div class="notFound">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "NotFound",
  data() {
    return {
      msg: "Coming Soon....",
    };
  },
};
</script>

<style scoped>
.notFound {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
}
.notFound h1 {
  font-size: 4rem;
}
</style>