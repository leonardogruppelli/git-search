<template>
  <NuxtLink
    :to="link"
    class="user"
  >
    <img
      :src="user.avatar_url"
      :alt="user.login"
      class="user__image"
    >

    <h4 class="user__name">
      {{ user.login }}
    </h4>
  </NuxtLink>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { IUser } from '~/types/user'

@Component
export default class extends Vue {
  @Prop({ required: true }) user!: IUser

  get link() {
    return `/users/${this.user.login}`
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/resources/variables';
@import '~/assets/scss/resources/breakpoints';
@import '~/assets/scss/resources/mixins';

.user {
  width: 100%;
  display: block;
  padding: rem(11px 8px);

  @include above(tablet) {
    text-align: center;
  }

  @include above(desktop) {
    padding: rem(41px 20px);
  }

  &__image {
    width: 50px;
    height: 50px;
    margin-bottom: rem(10px);
    border-radius: 50%;

    @include above(desktop) {
      width: 100px;
      height: 100px;
    }
  }

  &__name {
    max-width: 100%;
    color: map-get($map: $branding, $key: 'secondary');
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
}
</style>