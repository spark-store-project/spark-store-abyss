import type { Release } from "./app.vue";

declare module "nuxt/schema" {
  interface AppConfigInput {
    latestRelease?: Release;
    latestNews: {
      title: string;
      link: string;
    };
  }

  type AppConfig = AppConfigInput;
}

// It is always important to ensure you import/export something when augmenting a type
export {};
