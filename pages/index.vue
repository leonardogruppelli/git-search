<template>
  <Intro />
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class extends Vue {
  layout() {
    return 'home'
  }
}
</script>