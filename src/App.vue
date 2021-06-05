<template>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $default-text-color;

  @media screen and (min-width: 500px) {
    margin: 30px;
  }
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: $title-text-color;
}

a {
  color: $link-color;
  text-decoration: unset;

  &:hover {
    text-decoration: underline;
  }
}
</style>
