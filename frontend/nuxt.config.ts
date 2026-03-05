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

  modules: ['@nuxtjs/supabase'],

  supabase: {
    // можно оставить по умолчанию
    redirect: false, // мы сами будем делать редиректы middleware'ом
  },

  runtimeConfig: {
    public: {
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseAnonKey: process.env.SUPABASE_ANON_KEY,
    },
  },
})