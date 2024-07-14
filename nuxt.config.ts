import { defineNuxtConfig } from 'nuxt/config'  // Ensure the correct import

import dotenv from 'dotenv'

// Load environment variables from .env file
dotenv.config()

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  plugins: [{ src: '~/plugins/firebase.js', mode: 'client' }],
  head: {
    link: [
      { rel: 'stylesheet', href: 'https://use.typekit.net/wwt7sct.css' }
    ]
  },
  css: [
    '@/assets/css/tailwind.css'
  ],
  build: {
    postcss: {
      postcssOptions: require('./postcss.config.js')
    }
  },
  modules: [
    '@nuxt/test-utils/module'
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
    },
    apiSecret: process.env.API_SECRET,
  }
})