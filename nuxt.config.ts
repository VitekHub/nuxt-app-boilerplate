// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: ['@nuxt/ui', '@pinia/nuxt', '@vueuse/nuxt', '@nuxtjs/i18n'],
  css: ['~/assets/css/main.css'],
  colorMode: {
    preference: 'dark',
  },

  // i18n configuration
  i18n: {
    defaultLocale: 'en',
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'cs', name: 'Čeština', file: 'cs.json' },
    ],
    lazy: true,
    langDir: 'locales/',
    strategy: 'no_prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
      fallbackLocale: 'en',
    },
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
