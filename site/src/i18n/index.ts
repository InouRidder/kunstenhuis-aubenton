import { nl, type Dict } from './nl';
import { en } from './en';
import { fr } from './fr';
import { slugs, type Locale, type NavKey, defaultLocale } from '../data';

export const dictionaries: Record<Locale, Dict> = { nl, en, fr };

export function useTranslations(locale: Locale): Dict {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}

/** Build a localized, base-aware URL for a page key.
 *  The default locale (nl) is served at the root with no language prefix. */
export function localizedPath(locale: Locale, key: NavKey): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const slug = slugs[key];
  const prefix = locale === defaultLocale ? '' : `/${locale}`;
  return `${base}${prefix}/${slug ? slug + '/' : ''}`;
}

/** Same page in another language (keeps current page key). */
export function switchLocalePath(target: Locale, currentKey: NavKey): string {
  return localizedPath(target, currentKey);
}

/** Localized, human date range, e.g. "2 – 6 apr 2026". */
export function formatRange(locale: Locale, startISO: string, endISO: string): string {
  const start = new Date(startISO + 'T00:00:00');
  const end = new Date(endISO + 'T00:00:00');
  const sameMonth =
    start.getMonth() === end.getMonth() && start.getFullYear() === end.getFullYear();
  const dayFmt = new Intl.DateTimeFormat(locale, { day: 'numeric' });
  const dayMonthFmt = new Intl.DateTimeFormat(locale, { day: 'numeric', month: 'short' });
  const fullFmt = new Intl.DateTimeFormat(locale, {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
  if (sameMonth) {
    return `${dayFmt.format(start)} – ${fullFmt.format(end)}`;
  }
  return `${dayMonthFmt.format(start)} – ${fullFmt.format(end)}`;
}

export function shortDate(locale: Locale, iso: string): { day: string; month: string } {
  const d = new Date(iso + 'T00:00:00');
  return {
    day: new Intl.DateTimeFormat(locale, { day: 'numeric' }).format(d),
    month: new Intl.DateTimeFormat(locale, { month: 'short' }).format(d).replace('.', ''),
  };
}
