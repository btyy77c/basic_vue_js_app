<template>
  <nav id="nav">
    <div class="logo">
      <span>Hurricane Dorian</span>
      <span>Relief</span>
    </div>

    <i
      @click="displayLinks = !displayLinks"
      class="material-icons icon-image-preview"
    >
      menu
    </i>

    <div :class="[displayLinks ? 'display' : 'hidden', 'links']">
      <router-link to="/">Donate</router-link>
      <router-link to="/faq">FAQ</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
  </nav>
</template>

<style scoped lang="scss">
@import "../assets/nav";
@import "../assets/nav_desktop";

/*

a {
  align-items: center;
  display: flex;
  height: 100%;
  padding: 0 10px;
}

.links {
  align-items: center;
  flex-grow: 1;
  justify-content: flex-end;
}
*/
</style>

<script>
export default {
  name: "nav",
  data() {
    return {
      displayLinks: false
    };
  }
};
</script>
