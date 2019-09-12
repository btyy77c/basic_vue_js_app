<template>
  <nav id="nav">
    <div class="logo">
      <span>Hurricane Dorian</span>
      <i class="material-icons icon-image-preview">favorite_border</i>
      <span>Relief</span>
    </div>

    <i
      @click="displayLinks = !displayLinks"
      class="material-icons icon-image-preview menu"
    >
      menu
    </i>

    <div :class="[displayLinks ? 'display' : 'hidden', 'links']">
      <router-link to="/" @click.native="displayLinks = false">
        Donate
      </router-link>

      <router-link to="/faq" @click.native="displayLinks = false">
        FAQ
      </router-link>

      <router-link to="/contact" @click.native="displayLinks = false">
        Contact
      </router-link>
    </div>
  </nav>
</template>

<style scoped lang="scss">
@import "../assets/nav";
@import "../assets/nav_desktop";
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
