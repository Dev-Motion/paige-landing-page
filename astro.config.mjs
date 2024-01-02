import { defineConfig } from "astro/config";
import icon from "astro-icon";
import tailwind from "@astrojs/tailwind";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    icon({
      iconDir: "./src/assets/icons",
      include: {
        mdi: ["twitter", "github", "linkedin"],
      },
    }),
    mdx(),
  ],
});
