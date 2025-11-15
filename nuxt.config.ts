// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: [
            '@use "~/assets/normilize.scss" as *;',
            '@use "~/assets/colors.scss" as *;',
            '@use "~/assets/fonts.scss" as *;',
            '@use "~/assets/main.scss" as *;',
          ].join('\n'),
        },
      },
    },
  },

  modules: ['@nuxt/ui'],
})
