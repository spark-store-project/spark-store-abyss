import Aura from "@primeuix/themes/aura";
import tailwindcss from "@tailwindcss/vite";
import svgLoader from "vite-svg-loader";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxt/eslint",
    "@nuxt/icon",
    "@nuxt/image",
    "@primevue/nuxt-module",
  ],
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss(), svgLoader()],
  },
  primevue: {
    /* Configuration */
    options: {
      theme: {
        preset: Aura,
      },
    },
  },
});
