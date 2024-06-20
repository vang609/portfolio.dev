import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

const BASE_URO = "https://github.com/vang609/portfolio.dev";

// https://astro.build/config
export default defineConfig({
  site: "https://vang609.github.io",
  base: "portfolio.dev",
  integrations: [tailwind()],
});