import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import vercel from "@astrojs/vercel/static";

// Detectar automáticamente el dominio de Vercel
const VERCEL_URL = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}/`
  : "https://haion-landing-mvp7-gsoyg8s4r-sadaborras63-gmailcoms-projects.vercel.app/";

export default defineConfig({
  site: VERCEL_URL,
  output: "static",
  adapter: vercel(),
  trailingSlash: "never",
  integrations: [
    tailwind(),
    sitemap(),
    robotsTxt({
      policy: [{ userAgent: "*", allow: "/" }],
      sitemap: `${VERCEL_URL}sitemap-index.xml`,
    }),
  ],
});
