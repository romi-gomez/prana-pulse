import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  css: [
    '@/assets/css/tailwind.css'
  ],
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
    transpile: ['@nuxt/postcss8'],
  },
  head: {
    link: [
      { rel: 'stylesheet', href: 'https://use.typekit.net/wwt7sct.css' }
    ]
  },
  modules: ['@nuxtjs/tailwindcss'],
  plugins: [
    { src: '~/plugins/firebase.js', mode: 'client' },
    '~/plugins/i18n.js'
  ],
  runtimeConfig: {
    public: {
      googleApiKey: process.env.GOOGLE_API_KEY,
      googleAuthDomain: process.env.GOOGLE_AUTH_DOMAIN,
      googleProjectId: process.env.GOOGLE_PROJECT_ID,
      googleStorageBucket: process.env.GOOGLE_STORAGE_BUCKET,
      googleMessagingSenderId: process.env.GOOGLE_MESSAGING_SENDER_ID,
      googleAppId: process.env.GOOGLE_APP_ID,
      measurementId: process.env.MEASUREMENT_ID,
    }
  },
  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.json' },
      { code: 'es', iso: 'es-ES', file: 'es.json' }
    ],
    defaultLocale: 'en',
    langDir: 'content/',
    vueI18n: {
      fallbackLocale: 'en'
    }
  }
});