// https://nuxt.com/docs/api/configuration/nuxt-config
import { readdirSync } from 'fs'
import { join } from 'path'

// Function to automatically detect all .json files in a locale folder
function getLocaleFiles(locale: string): string[] {
  try {
    const localeDir = join(process.cwd(), 'i18n/locales', locale)
    return readdirSync(localeDir)
      .filter((file) => file.endsWith('.json'))
      .map((file) => `${locale}/${file}`)
      .sort() // Sort for consistent order
  } catch (error) {
    console.warn(`Could not read locale directory for ${locale}:`, error)
    return []
  }
}

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: ['@nuxt/ui', '@nuxt/icon', '@pinia/nuxt', '@vueuse/nuxt', '@nuxtjs/i18n'],
  css: ['~/assets/css/main.css'],
  colorMode: {
    preference: 'dark',
  },

  // i18n configuration
  i18n: {
    defaultLocale: 'en',
    locales: [
      {
        code: 'en',
        name: 'English',
        files: getLocaleFiles('en'),
      },
      {
        code: 'cs',
        name: 'Čeština',
        files: getLocaleFiles('cs'),
      },
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

  // Component auto-import configuration:
  //  - Remove '~/pages' if you do not use page specific components.
  //  - Remove the whole 'components' array if you want to prefix component names by their folders (default for `pathPrefix` is true).
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
    {
      path: '~/pages',
      pathPrefix: false,
    },
  ],

  // GitHub Pages configuration
  app: {
    // Use this config for GitHub Pages and replace '/nuxt-app-boilerplate/' with your project name
    // baseURL: process.env.NODE_ENV === 'production' ? '/nuxt-app-boilerplate/' : '/',
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
