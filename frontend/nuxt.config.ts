export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "~/assets/styles/normalize.scss" as *;
            @use "~/assets/styles/colors.scss" as *;
            @use "~/assets/styles/mixins.scss" as *;
          `,
        },
      },
    },
  },

  css: ['~/assets/styles/variables.scss','~/assets/styles/fonts.scss', '~/assets/styles/main.scss'],

  routeRules: {
    '/api/**': { proxy: 'http://127.0.0.1:8000/api/**' }
  }
})