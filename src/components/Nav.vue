<template>
  <nav id="nav">
    <div class="logo">
      <span>Hurricane Dorian</span>
      <span>Relief</span>
    </div>

    <div class="links">
      <router-link to="/">Donate</router-link>
      <router-link to="/faq">FAQ</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
  </nav>
</template>

<style scoped lang="scss">
$blue: #00788c;
$yellow: #ffc827;

nav {
  background-color: $blue;
  color: #fff;
  display: flex;
}

a {
  align-items: center;
  color: #fff;
  display: flex;
  height: 100%;
  padding: 0 10px;
  text-decoration: none;

  &:hover {
    background-color: darken($blue, 1%);
  }
}

.links {
  align-items: center;
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
}

.logo {
  align-items: center;
  background-color: $yellow;
  color: #000;
  display: flex;
  flex-direction: column;
  padding: 10px 15px;
  width: 70vw;

  @media (min-width: 700px) {
    width: auto;
  }
}

.router-link-exact-active {
  color: $yellow;
}
</style>
