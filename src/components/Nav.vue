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
  name: "nav",

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
