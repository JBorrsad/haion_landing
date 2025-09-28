import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";

// Detección automática del entorno de deployment
const isVercel = process.env.VERCEL === "1";
const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

// Configuración dinámica según el entorno
const siteConfig = isVercel
  ? {
      site: process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}/`
        : "https://haion-landing.vercel.app/",
      base: undefined,
    }
  : {
      site: "https://jborrsad.github.io/haion_landing/",
      base: "/haion_landing",
    };

const sitemapUrl = isVercel
  ? `${siteConfig.site}sitemap-index.xml`
  : "https://jborrsad.github.io/haion_landing/sitemap-index.xml";

export default defineConfig({
  ...siteConfig,
  trailingSlash: "never", // URLs sin barra final para GSC
  integrations: [
    tailwind(),
    sitemap(), // genera sitemap-index.xml + sitemap-0.xml
    robotsTxt({
      policy: [{ userAgent: "*", allow: "/" }],
      sitemap: sitemapUrl,
    }),
  ],
});
