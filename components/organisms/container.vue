<template>
  <div
    class="container"
    :class="classes"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class extends Vue {
  @Prop({ type: Boolean, default: false }) small!: boolean
  @Prop({ type: Boolean, default: false }) full!: boolean

  get classes() {
    return {
      'container--small': this.small,
      'container--full': this.full
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/resources/variables';

.container {
  width: 100%;
  max-width: map-get($map: $container, $key: 'default');
  margin: 0 auto;

  &--small {
    max-width: map-get($map: $container, $key: 'small');
  }

  &--full {
    height: 100%;
  }
}
</style>