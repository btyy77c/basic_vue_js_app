<template>
  <main id="app">
    <NavSite />
    <router-view />
  </main>
</template>

<style lang="scss">
@import "~material-design-icons/iconfont/material-icons.css";
@import "./assets/colors";

body {
  background-color: lighten($black, 85%);
  font-family: sans-serif;
  margin: 0;
  padding: 0;
}
</style>

<script>
// @ is an alias to /src
import NavSite from "@/components/Nav.vue";

export default {
  name: "app",
  components: {
    NavSite
  }
};
</script>
