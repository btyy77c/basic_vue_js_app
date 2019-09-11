<template>
  <nav id="nav">
    <div class="logo">
      <span>Hurricane Dorian</span>
      <span>Relief</span>
    </div>

    <div class="links">
      <p>Donate</p>
      <p>FAQ</p>
      <p>Contact</p>
      <router-link to="/">Donate</router-link> |
      <router-link to="/about">About</router-link>
    </div>
  </nav>
</template>

<style scoped lang="scss">
nav {
  background-color: #00788c;
  color: #fff;
  display: flex;
}

.links {
  align-items: center;
  display: flex;
  flex-grow: 1;
  justify-content: center;
}

.logo {
  align-items: center;
  background-color: #ffc827;
  color: #000;
  display: flex;
  flex-direction: column;
  padding: 10px 15px;
}
</style>
