const PurgecssPlugin = require('purgecss-webpack-plugin')
const glob = require('glob-all')
const path = require('path')
require('dotenv').config()

export default {
  env: {
    SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID,
    BASE_URL: process.env.BASE_URL,
    GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID,
    FUNCTIONS_BASE_URL: process.env.FUNCTIONS_BASE_URL
  },

  head: {
    title: 'CV - Matthieu d’Oultremont',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#4E8FD6' },
      { hid: 'description', name: 'description', content: 'Site de Matthieu d’Oultremont: CV' },
      // OG TAGS
      { hid: 'og:url', poperty: 'og:url', content: process.env.BASE_URL },
      { hid: 'og:type', poperty: 'og:type', content: 'website' },
      { hid: 'og:title', poperty: 'og:title', content: 'Site de Matthieu d’Oultremont: CV' },
      { hid: 'og:description', poperty: 'og:description', content: 'Site de Matthieu d’Oultremont: CV' },
      { hid: 'og:image', poperty: 'og:image', content: process.env.BASE_URL + '/profil.jpg' },
      // TWITTER TAGS
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:title', name: 'twitter:title', content: 'Site de Matthieu d’Oultremont: CV' },
      { hid: 'twitter:description', name: 'twitter:description', content: 'Site de Matthieu d’Oultremont: CV' },
      { hid: 'twitter:image', name: 'twitter:image', content: process.env.BASE_URL + '/profil.jpg' },
      // GOOGLE TAGS
      { hid: 'google:name', itemprop: 'name', content: 'Site de Matthieu d’Oultremont: CV' },
      { hid: 'google:description', itemprop: 'description', content: 'Site de Matthieu d’Oultremont: CV' },
      { hid: 'google:image', itemprop: 'image', content: process.env.BASE_URL + '/profil.jpg' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/icon.png' }
    ]
  },

  css: [
    '~/assets/styles/main.css'
  ],

  loading: { color: '#3B8070' },

  plugins: [
    { src: '~/plugins/svg-icon.js' }
  ],

  modules: [
    [
      '@nuxtjs/google-analytics',
      {
        id: process.env.GOOGLE_ANALYTICS_ID,
        dev: false
      }
    ],
    [
      '@nuxtjs/axios',
      {
        proxy: true
      }
    ]
  ],

  proxy: {
    '/.netlify': {
      target: 'http://localhost:9000',
      pathRewrite: { '^/.netlify/functions': '' }
    }
  },

  build: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer')
      ]
    },

    extractCSS: true,

    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      if (!isDev) {
        config.plugins.push(
          new PurgecssPlugin({
            paths: glob.sync([
              path.join(__dirname, './pages/**/*.vue'),
              path.join(__dirname, './layouts/**/*.vue'),
              path.join(__dirname, './components/**/*.vue')
            ]),
            extractors: [
              {
                extractor: class {
                  static extract (content) {
                    return content.match(/[A-z0-9-:/]+/g) || []
                  }
                },
                extensions: ['vue']
              }
            ],
            whitelist: ['html', 'body']
          })
        )
      }
    }
  }
}
