import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";

export default defineConfig({
  site: "https://jborrsad.github.io/haion_landing/", // barra final
  base: "/haion_landing",
  trailingSlash: "ignore", // acepta ambos: /fiscal y /fiscal/
  integrations: [
    tailwind(),
    sitemap(), // genera sitemap-index.xml + sitemap-0.xml
    robotsTxt({
      policy: [{ userAgent: "*", allow: "/" }],
      sitemap: "https://jborrsad.github.io/haion_landing/sitemap-index.xml",
    }),
  ],
});
