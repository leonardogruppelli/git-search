<template>
  <header class="header">
    <div class="header__content">
      <Container>
        <div class="header__info header__info--mobile">
          <Back class="header__back" />

          <h4 class="header__title">
            {{ title }}
          </h4>
        </div>

        <div class="header__info header__info--desktop">
          <NuxtLink
            to="/"
            class="header__link"
          >
            <Logo
              small
              class="header__logo"
            />

            <h4 class="header__title">
              GitSearch
            </h4>
          </NuxtLink>
        </div>
      </Container>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class extends Vue {
  @Prop({ type: String, required: true }) title!: string
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/resources/variables';
@import '~/assets/scss/resources/mixins';
@import '~/assets/scss/resources/breakpoints';

.header {
  width: 100%;
  height: map-get($map: $header, $key: 'mobile');
  padding: rem(0 10px);
  position: fixed;
  top: 0;
  left: 0;
  background-color: map-get($map: $colors, $key: 'tertiary');

  @include above(desktop) {
    height: map-get($map: $header, $key: 'desktop');
    padding: rem(5px 20px);
    box-shadow: map-get($map: $shadow, $key: 'offset')
  }

  &__content {
    height: 100%;
    border-bottom: 1px solid map-get($map: $colors, $key: 'denary');

    @include above(desktop) {
      border-bottom: 0;
    }
  }

  &__info {
    height: 100%;
    align-items: center;

    &--mobile {
      display: flex;

      @include above(desktop) {
        display: none;
      }
    }

    &--desktop {
      display: none;

      @include above(desktop) {
        display: flex;
      }
    }
  }

  &__link {
    display: inline-block;
  }

  &__logo,
  &__back,
  &__title {
    display: inline-block;
    vertical-align: middle;
  }

  &__back {
    margin: rem(0 14px 0 4px);
  }

  &__title {
    color: map-get($map: $colors, $key: 'secondary');
  }
}
</style>