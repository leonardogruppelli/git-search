import { Context } from '@nuxt/types'

export default ({ $axios }: Context) => {
  const token: string | undefined = process.env.TOKEN && `token ${process.env.TOKEN}`

  if (token) $axios.setHeader('Authorization', token)
}