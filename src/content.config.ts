import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";

import { contentsBaseSchema } from "@/schema/contents/base";

const mindPalace = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/contents/mind-palace",
  }),
  schema: contentsBaseSchema,
});

const postmortem = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/contents/post-mortem",
  }),
  schema: contentsBaseSchema,
});

export const collections = {
  mindPalace,
  postmortem,
};
