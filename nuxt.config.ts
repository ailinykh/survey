// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  css: ["@/assets/styles/main.scss"],
  devtools: { enabled: true },
  runtimeConfig: {
    tokenSecret: process.env.JWT_SECRET,
    tokenExpiration: process.env.JWT_EXPIRES,
  },
});
