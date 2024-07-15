import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  devtools: { enabled: true },
  plugins: [
    { src: '~/plugins/firebase.js', mode: 'client' }
  ],
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
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
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
  }
});