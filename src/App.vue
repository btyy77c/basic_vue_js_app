<template>
  <div id="app">
    <Nav />
    <router-view />
  </div>
</template>

<style lang="scss">
@import "~material-design-icons/iconfont/material-icons.css";

body {
  font-family: sans-serif;
  margin: 0;
  padding: 0;
}
</style>

<script>
// @ is an alias to /src
import Nav from "@/components/Nav.vue";

export default {
  name: "main",
  components: {
    Nav
  }
};
</script>
