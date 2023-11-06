// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath, URL } from 'node:url'

export default defineNuxtConfig({
  devtools: { enabled: false },
  alias: {
    "~": fileURLToPath(new URL(".", import.meta.url)),
    "~/*": fileURLToPath(new URL("./*", import.meta.url)),
    "@": fileURLToPath(new URL(".", import.meta.url)),
    "@/*": fileURLToPath(new URL("./*", import.meta.url)),
  },
  css: ['~/assets/index.css'],
  modules: ['@nuxtjs/tailwindcss'],
  components: [
    {
      path: '~/components',
      // this is required else Nuxt will autoImport `.ts` file
      extensions: ['.vue'],
      // prefix for your components, eg: UIButton
      // prefix: 'UI'
    },
  ],

  devServer: {
    port: 8000
  }

})


