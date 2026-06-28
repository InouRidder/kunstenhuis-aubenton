// @ts-check
import { defineConfig } from 'astro/config';

// Redirect the previous prefixed Dutch URLs (/nl/…) to the new root URLs,
// since NL is now served without a language prefix.
const nlPageSlugs = ['', 'over-ons', 'historie', 'agenda', 'het-huis', 'mogelijkheden', 'gastenboek', 'links-partners', 'contact'];
const legacyNlRedirects = Object.fromEntries(
  nlPageSlugs.map((s) => [`/nl/${s ? s + '/' : ''}`, `/${s ? s + '/' : ''}`])
);

// https://astro.build/config
export default defineConfig({
  // The public URL of the finished site. Used for sitemap / canonical / og tags.
  // Served from the custom domain root (see site/public/CNAME).
  site: 'https://www.kunstenhuisaubenton.nl',

  i18n: {
    defaultLocale: 'nl',
    locales: ['nl', 'en', 'fr'],
    routing: {
      prefixDefaultLocale: false, // NL at the root (no /nl/ prefix); EN/FR prefixed
    },
  },

  redirects: legacyNlRedirects,

  build: {
    inlineStylesheets: 'auto',
  },
  trailingSlash: 'always',
});
