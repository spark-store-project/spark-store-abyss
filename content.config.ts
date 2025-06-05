import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    download: defineCollection({
      source: "download/*.md",
      type: "page",
      schema: z.object({
        rawbody: z.string(),
      }),
    }),
  },
});
