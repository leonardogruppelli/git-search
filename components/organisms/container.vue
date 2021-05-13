<template>
  <div class="container">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@import '~/assets/scss/resources/variables';

.container {
  width: 100%;
  height: 100%;
  max-width: $container;
  margin: 0 auto;
}
</style>
