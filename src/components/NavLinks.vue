<template>
  <div class="nav-links">
    <router-link to="/" @click.native="$emit('linkClick')">
      Donate
    </router-link>

    <router-link to="/faq" @click.native="$emit('linkClick')">
      FAQ
    </router-link>

    <router-link to="/contact" @click.native="$emit('linkClick')">
      Contact
    </router-link>
  </div>
</template>

<style scoped lang="scss">
@import "../assets/navLinks";
</style>
