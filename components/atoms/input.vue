<template>
  <label
    class="input"
    :class="classes"
  >
    <input
      type="text"
      :placeholder="placeholder"
      class="input__field"
      @input="update"
    >
  </label>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class extends Vue {
  @Prop({ type: String }) value!: string
  @Prop({ type: String, required: true }) placeholder!: string
  @Prop({ type: Boolean, default: false }) full!: boolean

  get classes() {
    return {
      'input--full': this.full
    }
  }

  update(event: Event) {
    this.$emit('input', (event.target as HTMLInputElement).value)
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/resources/variables';
@import '~/assets/scss/resources/mixins';
@import '~/assets/scss/resources/breakpoints';

.input {
  width: 100%;
  display: block;
  position: relative;
  margin-bottom: rem(20px);
  background-color: map-get($map: $colors, $key: 'tertiary');
  border: 1px solid map-get($map: $colors, $key: 'nonary');
  border-radius: 4px;

  @include above(desktop) {
    width: 245px;
  }

  &--full {
    width: 100%;
  }

  &__field {
    width: 100%;
    min-height: 40px;
    padding: rem(5px 24px);
    font-size: rem(15px);
    color: map-get($map: $colors, $key: 'quaternary');
    line-height: rem(29px);
  }
}
</style>