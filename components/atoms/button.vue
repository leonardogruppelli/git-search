<template>
  <NuxtLink
    v-if="to"
    :to="to"
    class="button"
    :class="classes"
  >
    <slot />
  </NuxtLink>

  <button
    v-else
    :disabled="disabled"
    class="button"
    :class="classes"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class extends Vue {
  @Prop({ type: String }) to!: string
  @Prop({ type: Boolean, default: false }) full!: false
  @Prop({ type: Boolean, default: false }) secondary!: false
  @Prop({ type: Boolean, default: false }) disabled!: false

  get classes() {
    return {
      'button--full': this.full,
      'button--secondary': this.secondary,
      'button--disabled': this.disabled
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/resources/variables';
@import '~/assets/scss/resources/mixins';
@import '~/assets/scss/resources/breakpoints';

.button {
  width: 125px;
  max-width: 100%;
  display: inline-block;
  padding: rem(14px 15px);
  background-color: map-get($map: $branding, $key: 'primary');
  border-radius: 4px;
  font-family: Montserrat;
  font-weight: 600;
  color: map-get($map: $colors, $key: 'tertiary');
  line-height: rem(22px);
  transition: background-color 0.2s linear, color 0.1s ease;
  cursor: pointer;

  @include above(desktop) {
    width: 200px;
  }

  &--full {
    width: 100%;
  }

  &--secondary {
    background-color: map-get($map: $branding, $key: 'quaternary');
  }

  &:disabled,
  &--disabled {
    background-color: map-get($map: $colors, $key: 'senary');
    color: map-get($map: $colors, $key: 'secondary');
    pointer-events: none;
  }
}
</style>