import { defineConfig } from "astro/config";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel";
import tailwind from "@astrojs/tailwind";


// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), icon(), tailwind({
    nesting: true
  })],
  output: "server",
  adapter: vercel(),
});