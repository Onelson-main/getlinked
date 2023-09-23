<template>
  <router-view />
</template>

<style lang="scss">
@import '@/assets/sass/base.scss';
@import '@/assets/sass/config.scss';
@import '@/assets/sass/components.scss';
@import '@/assets/fonts/clash-display.css';

#app {
  width: 100% !important;
  max-width: 100% !important;
  margin: 0% !important;
  padding: 0% !important;
  display: grid;
  grid-template-columns: repeat(5, 1fr 20px) 1fr;
  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(11, 1fr 20px) 1fr;
  }

  // grid-template-rows: 100px 100px;
  // grid-gap: 20px;
  > * {
    grid-column: 2 / -2;
  }
  > .stretch {
    grid-column: 1 / -1;
  }
}
</style>
