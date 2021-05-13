<template>
  <div class="users">
    Users
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Context } from '@nuxt/types'

@Component
export default class extends Vue {
  async asyncData({ $axios, query }: Context) {
    const search: string | undefined = query.search as string || undefined
    const endpoint: string = search ? `/search/users?q=${search}` : '/users'

    console.log({ search })

    try {
      const users = await $axios.get(endpoint)

      console.log(users)
    } catch (error) {
      console.log({ error })
    }
  }
}
</script>