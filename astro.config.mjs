import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  site: "https://haion-landing.vercel.app/", // Cambia esto por tu dominio final
  output: "server",
  adapter: vercel(),
  trailingSlash: "never",
  integrations: [
    tailwind(),
    sitemap(),
    robotsTxt({
      policy: [{ userAgent: "*", allow: "/" }],
      sitemap: "https://haion-landing.vercel.app/sitemap-index.xml", // Cambia esto por tu dominio final
    }),
  ],
});
