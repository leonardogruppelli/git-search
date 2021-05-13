<template>
  <div class="intro">
    <div class="intro__content">
      <Container small>
        <Logo />

        <h1 class="intro__title">
          GitSearch
        </h1>

        <Input
          v-model="search"
          placeholder="Pesquisar..."
          full
        />

        <ul class="intro__buttons">
          <li class="intro__buttons__item">
            <Button
              to="/users"
              full
            >
              Ver Todos
            </Button>
          </li>

          <li class="intro__buttons__item">
            <Button
              :to="page"
              :disabled="!search"
              full
              secondary
            >
              Buscar
            </Button>
          </li>
        </ul>
      </Container>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class extends Vue {
  search: string = ''

  get page() {
    return `/users?search=${this.search}`
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/resources/mixins';

.intro {
  width: 100%;
  height: 100%;
  display: table;

  &__content {
    display: table-cell;
    vertical-align: middle;
    padding: rem(0 23px);
    text-align: center;
  }

  &__title {
    margin: rem(37px 0 38px);
  }

  &__buttons {
    margin: rem(0 -10px);
    @include clearfix;

    &__item {
      width: 50%;
      float: left;
      padding: rem(0 10px);
    }
  }
}
</style>