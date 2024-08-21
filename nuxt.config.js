import colors from 'vuetify/es5/util/colors'

export default {
  target: 'static',
  ssr: true,

  generate: {
    fallback: true
  },

  publicRuntimeConfig: {
    telegramBotApiKey: process.env.TELEGRAM_BOT_API_KEY
  },
  privateRuntimeConfig: {
    telegramBotApiKey: "bot876254288:AAG_0vP5LjbpfXrkqMI4X6npOun0NnBOgo0"
  },

  generate: {
    subFolders: false,
    async routes() {
      const { $content } = require('@nuxt/content')
      const files = await $content({ deep: true }).only(['path']).fetch()

      return files.map(file => file.path === '/index' ? '/' : `/content${file.path}`)
    }
  },


  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: 'Some thoughts',
    title: 'bloggy',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/nuxt-content.css',
    '~/assets/css/nuxt-framework.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-atom-dark.css',
      }
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {

    treeShake: true,
    defaultAssets: {
      font: {
        family: 'Azeret Mono'
      }
    },

    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
}
