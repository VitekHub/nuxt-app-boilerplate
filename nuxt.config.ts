// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: ['@nuxt/ui', '@pinia/nuxt', '@vueuse/nuxt', '@nuxtjs/i18n'],
  css: ['~/assets/css/main.css'],
  colorMode: {
    preference: 'dark',
  },

  // GitHub Pages configuration
  app: {
    baseURL: '/',
  },

  // Disable SSR for static generation
  ssr: false,

  // Enable static site generation
  nitro: {
    prerender: {
      routes: ['/'],
    },
  },
})
