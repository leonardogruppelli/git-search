<template>
  <main
    role="main"
    class="main"
  >
    <Nuxt keep-alive />
  </main>
</template>

<style lang="scss" scoped>
@import '~/assets/scss/resources/variables';
@import '~/assets/scss/resources/breakpoints';

.main {
  height: 100%;
  padding-top: map-get($map: $header, $key: 'mobile');

  @include above(desktop) {
    padding-top: map-get($map: $header, $key: 'desktop');
  }
}
</style>