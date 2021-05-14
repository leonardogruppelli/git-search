export default {
  head: {
    title: 'GitSearch',
    htmlAttrs: {
      lang: 'pt-BR'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Esta aplicação tem como objeto realizar buscas utilizando a API do GitHub para listar usuários e ter acesso a informações detalhadas sobre usuários específicos, como informações gerais e de projetos.'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  css: ['~/assets/scss/main'],

  plugins: [
    { src: '~/plugins/axios' },
    { src: '~/plugins/visibility', mode: 'client' }
  ],

  components: {
    dirs: [
      '~/components/atoms',
      '~/components/molecules',
      '~/components/organisms'
    ]
  },

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/svg'
  ],

  modules: [
    '@nuxtjs/axios'
  ],

  env: {
    TOKEN: process.env.TOKEN || undefined
  },

  axios: {
    baseURL: process.env.BASE_URL
  }
}