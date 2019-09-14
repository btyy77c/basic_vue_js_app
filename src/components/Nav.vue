<template>
  <nav id="nav">
    <div class="logo">
      <span>Hurricane Dorian</span>
      <i class="material-icons icon-image-preview">favorite_border</i>
      <span>Relief</span>
    </div>

    <i
      @click="updateDisplayLink"
      class="material-icons icon-image-preview menu"
    >
      menu
    </i>

    <transition name="slide">
      <div class="mobile-links" v-if="displayLinks">
        <router-link to="/" @click.native="resetdisplayLinks">
          Donate
        </router-link>

        <router-link to="/faq" @click.native="resetdisplayLinks">
          FAQ
        </router-link>

        <router-link to="/contact" @click.native="resetdisplayLinks">
          Contact
        </router-link>
      </div>
    </transition>

    <div class="desktop-links">
      <router-link to="/">
        Donate
      </router-link>

      <router-link to="/faq">
        FAQ
      </router-link>

      <router-link to="/contact">
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
  },
  methods: {
    resetdisplayLinks() {
      this.displayLinks = false;
    },

    updateDisplayLink() {
      this.displayLinks = !this.displayLinks;
    }
  }
};
</script>
