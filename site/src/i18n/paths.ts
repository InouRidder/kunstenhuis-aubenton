import { locales, type Locale } from '../data';

/** getStaticPaths body shared by every page under /src/pages/[lang]/ */
export function langPaths() {
  return locales.map((l: Locale) => ({ params: { lang: l }, props: { locale: l } }));
}
