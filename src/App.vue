<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  <AppLayout />
</template>

<script>
import AppLayout from "@/components/AppLayout.vue";
export default {
  name: "App",
  components: {
    AppLayout,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: map-get($text-gray, 900);
}
body {
  margin: 0;
  background: $light;
}
</style>
