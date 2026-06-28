// Language-neutral structured data. Translatable text lives in src/i18n/*.
// Editing tips for the owners:
//  - Add an agenda item -> add an object to `agendaItems` (+ a title in nl/en/fr).
//  - Add a guestbook entry -> add an object to `guestbook` (+ quote in nl/en/fr).
//  - Add a partner -> add an object to `partners`.

export type Locale = 'nl' | 'en' | 'fr';
export const locales: Locale[] = ['nl', 'en', 'fr'];
export const defaultLocale: Locale = 'nl';

export const localeNames: Record<Locale, string> = {
  nl: 'Nederlands',
  en: 'English',
  fr: 'Français',
};

// Site-wide pages, in nav order. `key` maps to a label in the i18n dictionary.
export const navOrder = [
  'home',
  'about',
  'history',
  'agenda',
  'house',
  'possibilities',
  'guestbook',
  'partners',
  'contact',
] as const;
export type NavKey = (typeof navOrder)[number];

// slug per page (same across languages, prefixed by /<lang>/)
export const slugs: Record<NavKey, string> = {
  home: '',
  about: 'over-ons',
  history: 'historie',
  agenda: 'agenda',
  house: 'het-huis',
  possibilities: 'mogelijkheden',
  guestbook: 'gastenboek',
  partners: 'links-partners',
  contact: 'contact',
};

// ── The house: photo gallery ───────────────────────────────────────────────
// `cap` is a key into i18n `gallery` captions.
export const galleryImages: { src: string; cap: string }[] = [
  { src: 'binnenplaats-1', cap: 'courtyard' },
  { src: 'entree', cap: 'entrance' },
  { src: 'bar-1', cap: 'bar' },
  { src: 'eetkamer', cap: 'dining' },
  { src: 'theaterzaal-vloer', cap: 'stageFloor' },
  { src: 'theaterzaal-tribune', cap: 'tribune' },
  { src: 'theaterzaal-stoelen', cap: 'seating' },
  { src: 'studio', cap: 'studio' },
  { src: 'binnenplaats-2', cap: 'courtyard' },
  { src: 'bar-2', cap: 'bar' },
  { src: 'tuin', cap: 'garden' },
  { src: 'binnenplaats-3', cap: 'courtyard' },
];

// ── Possibilities: disciplines (clickable tiles) ───────────────────────────
// `icon` is an inline SVG id defined in components/Icon.astro.
export const disciplines: { id: string; icon: string }[] = [
  { id: 'dance', icon: 'dance' },
  { id: 'theatre', icon: 'masks' },
  { id: 'stage', icon: 'stage' },
  { id: 'music', icon: 'music' },
  { id: 'improv', icon: 'spark' },
  { id: 'photography', icon: 'camera' },
  { id: 'drawing', icon: 'pencil' },
  { id: 'painting', icon: 'palette' },
  { id: 'sculpture', icon: 'chisel' },
  { id: 'modelling', icon: 'hands' },
  { id: 'yoga', icon: 'lotus' },
  { id: 'writing', icon: 'pen' },
];

// ── Workshop coordinators (Mogelijkheden page) ─────────────────────────────
// `area` is a key into i18n possibilities.coord. Add more lines here as they come.
export const coordinators: { area: string; email: string }[] = [
  { area: 'danceMovement', email: 'sophieilona@kunstenhuisaubenton.nl' },
];

// ── Agenda 2026 ────────────────────────────────────────────────────────────
export const agendaYear = 2026;
export const agendaItems: {
  start: string; // ISO
  end: string; // ISO
  org: string; // proper name, not translated
  titleKey: string; // key into i18n agenda.items
}[] = [
  { start: '2026-04-02', end: '2026-04-06', org: 'Het Amsterdams Lyceum', titleKey: 'lyceum' },
  { start: '2026-07-03', end: '2026-07-06', org: 'Toneelgroep Hades', titleKey: 'hades' },
  { start: '2026-07-19', end: '2026-08-09', org: 'Sjoerd Holsbergen', titleKey: 'expo' },
];

// ── Board ──────────────────────────────────────────────────────────────────
export const board: { roleKey: 'chair' | 'treasurer' | 'secretary'; name: string }[] = [
  { roleKey: 'chair', name: 'Willem van de Kar' },
  { roleKey: 'treasurer', name: 'Barend van de Kar' },
  { roleKey: 'secretary', name: 'Floor van de Kar' },
];

// ── Partners ────────────────────────────────────────────────────────────────
export const partners: { name: string; url?: string; descKey?: string }[] = [
  { name: 'Het Amsterdams Lyceum', url: 'https://www.hetamsterdamslyceum.nl', descKey: 'lyceum' },
  { name: 'iHTs — internationale school voor theaterstudies', url: 'https://www.ihts.nl', descKey: 'ihts' },
];

// ── Guestbook ───────────────────────────────────────────────────────────────
// Add entries here; the quote text lives in i18n under guestbook.entries[id].
export const guestbook: { id: string; group: string; dates: string }[] = [
  // Example entries — replace with real ones as they come in.
  { id: 'lyceum2025', group: 'Het Amsterdams Lyceum — Theaterklas', dates: '2025' },
  { id: 'hades2025', group: 'Toneelgroep Hades', dates: '2025' },
];

// ── Organisation / contact details (language-neutral) ───────────────────────
export const org = {
  name: 'Stichting Kunstenhuis Aubenton',
  street: 'Logger 191',
  postal: '1186 RR Amstelveen',
  phone: '+31 6 20195247',
  phoneHref: '+31620195247',
  email: 'info@kunstenhuisaubenton.nl',
  iban: 'NL88 TRIO 0321 2638 12',
  vat: 'NL8693.74.308.B01',
  coc: '42028151',
};
