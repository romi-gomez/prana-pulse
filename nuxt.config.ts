// https://nuxt.com/docs/api/configuration/nuxt-config
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
  }
})
