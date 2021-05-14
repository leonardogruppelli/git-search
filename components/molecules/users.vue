<template>
  <ul class="users">
    <li
      v-for="(user, index) in users"
      :key="user.login"
      v-visible="last(index)"
      class="users__item"
    >
      <User :user="user" />
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { IUser } from '~/types/user'

@Component
export default class extends Vue {
  @Prop({ required: true }) users!: IUser[]

  last(index: number) {
    const last: boolean = index === this.users.length - 1

    if (!last) return

    return this.load
  }

  load(visible: boolean) {
    if (visible) this.$emit('load')
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/resources/variables';
@import '~/assets/scss/resources/breakpoints';
@import '~/assets/scss/resources/mixins';

.users {
  margin: rem(36px 16px);
  @include clearfix;

  @include above(tablet) {
    border-width: 1px 0 0 1px;
    border-style: solid;
    border-color: map-get($map: $border, $key: 'primary');
  }

  @include above(desktop) {
    margin: rem(36px 60px);
  }

  &__item {
    border-width: 0 0 1px 0;
    border-style: solid;
    border-color: map-get($map: $border, $key: 'secondary');

    @include above(tablet) {
      width: 50%;
      float: left;
      border-width: 0 1px 1px 0;
      border-color: map-get($map: $border, $key: 'primary');
    }

    @include above(desktop) {
      width: 33.33%;
    }

    @include above(monitor) {
      width: 20%;
    }

    // @include above(monitor) {
    //   width: 20%;
    // }
  }
}
</style>