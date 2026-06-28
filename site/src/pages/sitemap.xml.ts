import type { APIRoute } from 'astro';
import { locales, navOrder } from '../data';
import { localizedPath } from '../i18n';

export const GET: APIRoute = ({ site }) => {
  const origin = (site?.href ?? 'https://www.kunstenhuisaubenton.nl/').replace(/\/$/, '');
  const urls: string[] = [];

  for (const key of navOrder) {
    const alternates = locales
      .map(
        (l) =>
          `    <xhtml:link rel="alternate" hreflang="${l}" href="${origin}${localizedPath(l, key)}"/>`
      )
      .join('\n');
    for (const l of locales) {
      urls.push(
        `  <url>\n    <loc>${origin}${localizedPath(l, key)}</loc>\n${alternates}\n  </url>`
      );
    }
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`;

  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
};
