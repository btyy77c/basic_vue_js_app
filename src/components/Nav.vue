<template>
  <nav id="nav">
    <div class="logo">
      <span>Hurricane Dorian</span>
      <i class="material-icons icon-image-preview">favorite_border</i>
      <span>Relief</span>
    </div>

    <i
      @click="updateDisplayLink"
      @keyup.enter="updateDisplayLink"
      aria-atomic="true"
      aria-live="polite"
      class="material-icons icon-image-preview menu"
      role="button"
      tabindex="0"
    >
      menu
    </i>

    <transition name="slide">
      <div class="mobile-links" v-if="displayLinks">
        <NavLinks @linkClick="resetdisplayLinks" />
      </div>
    </transition>

    <div class="desktop-links">
      <NavLinks />
    </div>
  </nav>
</template>

<style scoped lang="scss">
@import "../assets/nav";
</style>

<script>
import NavLinks from "@/components/NavLinks.vue";

export default {
  name: "nav-site",

  components: {
    NavLinks
  },

  created() {
    window.addEventListener("resize", () => {
      this.resetdisplayLinks();
    });
  },

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
