// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // The public URL of the finished site. Used for sitemap / canonical / og tags.
  // Served from the custom domain root (see site/public/CNAME).
  site: 'https://www.kunstenhuisaubenton.nl',

  i18n: {
    defaultLocale: 'nl',
    locales: ['nl', 'en', 'fr'],
    routing: {
      prefixDefaultLocale: true, // /nl/ , /en/ , /fr/  — root redirect handled by src/pages/index.astro
      redirectToDefaultLocale: false,
    },
  },

  build: {
    inlineStylesheets: 'auto',
  },
  trailingSlash: 'always',
});
