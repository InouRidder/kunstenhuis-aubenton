// @ts-check
import { defineConfig } from 'astro/config';

// Redirect the previous prefixed Dutch URLs (/nl/…) to the new root URLs,
// since NL is now served without a language prefix.
const nlPageSlugs = ['', 'over-ons', 'historie', 'agenda', 'het-huis', 'boekingen', 'gastenboek', 'links-partners', 'contact'];
const legacyNlRedirects = Object.fromEntries(
  nlPageSlugs.map((s) => [`/nl/${s ? s + '/' : ''}`, `/${s ? s + '/' : ''}`])
);

// The bookings page was renamed from /mogelijkheden/ to /boekingen/.
const bookingSlugRedirects = {
  '/mogelijkheden/': '/boekingen/',
  '/en/mogelijkheden/': '/en/boekingen/',
  '/fr/mogelijkheden/': '/fr/boekingen/',
  '/nl/mogelijkheden/': '/boekingen/',
};

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

  redirects: { ...legacyNlRedirects, ...bookingSlugRedirects },

  build: {
    inlineStylesheets: 'auto',
  },
  trailingSlash: 'always',
});
