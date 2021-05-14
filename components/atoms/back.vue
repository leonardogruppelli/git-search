<template>
  <button
    class="back"
    @click="back"
  >
    <Arrow class="back__icon" />
  </button>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Arrow from '~/assets/vectors/arrow.svg?inline'

@Component({
  components: {
    Arrow
  }
})
export default class extends Vue {
  back() {
    this.$router.go(-1)
  }
}
</script>

<style lang="scss" scoped>
.back {
  display: inline-block;
  cursor: pointer;

  &__icon {
    display: block;
  }
}
</style>