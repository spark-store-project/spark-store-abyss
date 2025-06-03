import { definePreset } from "@primeuix/themes";
import Aura from "@primeuix/themes/aura";
import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxt/eslint",
    "@nuxt/icon",
    "@nuxt/image",
    "@primevue/nuxt-module",
    "@nuxtjs/fontaine",
  ],
  icon: {
    mode: "css",
    cssLayer: "base",
    customCollections: [
      {
        prefix: "s",
        dir: "./assets/icons",
      },
      {
        prefix: "sp",
        dir: "./public/icon",
      },
    ],
  },
  css: ["~/assets/css/main.css"],
  app: {
    head: {
      title: "Spark Store",
      link: [
        {
          rel: "icon",
          type: "image/svg+xml",
          href: "/icon/spark.svg",
        },
      ],
      script: [
        {
          innerHTML: `const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
const darkMode = localStorage.getItem("darkMode");
const sDarkValue =
  darkMode === "auto"
    ? isDarkMode
      ? true
      : false
    : darkMode === "dark"
    ? true
    : false;

document.documentElement.classList.toggle("s-dark", sDarkValue);`,
        },
      ],
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  primevue: {
    /* Configuration */
    options: {
      theme: {
        preset: definePreset(Aura, {
          primitive: {
            secondary: {
              50: "#fdf2ef",
              100: "#f7dcd5",
              200: "#f0c6bc",
              300: "#e9b0a3",
              400: "#da998a",
              500: "#cc8271",
              600: "#ba6b58",
              700: "#a55440",
              800: "#873d2c",
              900: "#5d231a",
              950: "#1b0000",
            },
          },
          semantic: {
            primary: {
              50: "#fff7f2",
              100: "#ffe5da",
              200: "#ffd2c1",
              300: "#ffbda7",
              400: "#ffa891", //← 深色主题色
              500: "#f98c6c",
              600: "#c4320d", //← 浅色主题色
              700: "#9c260a",
              800: "#731c07",
              900: "#4a1204",
              950: "#260902,",
            },
            colorScheme: {
              light: {
                surface: {
                  50: "#f7f7f7",
                  100: "#dadada",
                  200: "#bdbdbd",
                  300: "#a0a0a0",
                  400: "#838383",
                  500: "#666666",
                  600: "#575757",
                  700: "#474747",
                  800: "#383838",
                  900: "#292929",
                  950: "#1a1a1a",
                },
                primary: {
                  color: "{primary.600}",
                },
              },
              dark: {
                surface: {
                  50: "#f7f7f7",
                  100: "#dadada",
                  200: "#bdbdbd",
                  300: "#a0a0a0",
                  400: "#838383",
                  500: "#666666",
                  600: "#575757",
                  700: "#474747",
                  800: "#383838",
                  900: "#292929",
                  950: "#1a1a1a",
                },
              },
            },
          },
        }),
        options: {
          darkModeSelector: ".s-dark",
        },
      },
    },
  },
});
