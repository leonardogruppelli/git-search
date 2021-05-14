<template>
  <div>
    <Header title="Lista de Usuários" />

    <Container>
      <p v-if="$fetchState.loading">
        loading...
      </p>
      <p v-else-if="$fetchState.error">
        error...
      </p>
      <Users
        v-else
        :users="users"
        @load="load"
      />
    </Container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Fragment } from 'vue-fragment'
import { IUser } from '~/types/user'

@Component({
  components: {
    Fragment
  }
})
export default class extends Vue {
  users: IUser[] = []
  link: string = ''
  limit: number = 10

  load() {
    console.log('load')

    this.$fetch()
  }

  activated() {
    if (this.$fetchState.timestamp <= Date.now() - (60000 * 5)) {
      this.$fetch()
    }
  }

  async fetch() {
    const search: string | undefined = this.$route.query.search as string || undefined
    const endpoint: string = search ? `/search/users?q=${search}&per_page=${this.limit}` : `/users?per_page=${this.limit}`

    console.log('fetch')

    try {
      const response = await this.$axios.get(this.link || endpoint)
      const users: IUser[] = response.data
      const next: string = response.headers.link || ''

      this.users = this.users.concat(users)

      if (next) {
        const link: string = next.split('<')[1].split('>')[0]
        console.log({ link })

        this.link = link
      }
    } catch (error) {
      console.log({ error })
    }
  }
}
</script>