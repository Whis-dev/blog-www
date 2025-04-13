import { reference, z } from "astro:content";

export const contentsBaseSchema = z.object({
  title: z.string(),
  description: z.string(),
  version: z.number(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  tags: z.string().array().optional(),
});
