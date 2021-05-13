<template>
  <img
    :src="logo"
    alt="GitSearch"
    class="logo"
  >
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class extends Vue {
  @Prop({ type: Boolean, default: false }) small!: boolean

  logo: string = require('~/assets/images/logo.png')

  get classes() {
    return {
      'logo--small': this.small
    }
  }
}
</script>

<style lang="scss" scoped>
.logo {
  width: 140px;
  height: 140px;

  &--small {
    width: 50px;
    height: 50px;
  }
}
</style>