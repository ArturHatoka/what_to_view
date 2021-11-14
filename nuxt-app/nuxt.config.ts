import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  modules: [
  // With options
    [
      '@dansmaculotte/nuxt-security',
      {
        additionalHeaders:true
      }
    ]
  ],
})
