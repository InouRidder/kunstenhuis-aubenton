// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // The public URL of the finished site. Used for sitemap / canonical / og tags.
  //
  // Currently deployed as a GitHub Pages PROJECT page:
  site: 'https://inouridder.github.io',
  base: '/kunstenhuis-aubenton/',
  //
  // To switch to the custom domain later: set site to
  // 'https://www.kunstenhuisaubenton.nl', remove the `base` line above, and
  // restore site/public/CNAME (kept as site/public/CNAME.disabled).

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
