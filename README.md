# Kunstenhuis Aubenton — website

**🌐 Live: https://inouridder.github.io/kunstenhuis-aubenton/**

A fast, fully static, three-language (🇳🇱 NL · 🇬🇧 EN · 🇫🇷 FR) website for
Kunstenhuis Aubenton, built with [Astro](https://astro.build). It builds to plain
HTML/CSS and is hosted for free on **GitHub Pages** (deployed automatically on
every push to `main` via GitHub Actions).

The site is generated into real localized pages — e.g. `/nl/het-huis/`,
`/en/the-house/`… well, `/en/het-huis/` (the slugs are kept identical across
languages for simplicity) — which is great for search engines and means every
page works without JavaScript.

```
Aubenton/
├── site/                  ← the website project (everything lives here)
│   ├── src/
│   │   ├── pages/[lang]/   ← one file per page, rendered in nl/en/fr
│   │   ├── i18n/           ← all translatable TEXT (nl.ts / en.ts / fr.ts)
│   │   ├── data.ts         ← agenda, partners, gallery, board, contact details
│   │   ├── components/     ← Nav, Footer, icons
│   │   ├── layouts/        ← shared page shell (head, nav, footer)
│   │   └── styles/global.css
│   └── public/
│       ├── images/         ← optimized photos + logo
│       ├── CNAME           ← custom domain (see "Domain" below)
│       └── favicon.png
├── source-material/        ← original brief, old site, full-res photos (not published)
└── .github/workflows/      ← automatic deploy to GitHub Pages
```

## Develop locally

```bash
cd site
npm install        # first time only
npm run dev        # http://localhost:4321
```

Other commands: `npm run build` (output to `site/dist/`), `npm run preview`
(serve the built site).

## Deploy to GitHub Pages

1. Push this repository to GitHub.
2. In the repo: **Settings → Pages → Build and deployment → Source → GitHub Actions**.
3. Every push to `main` then builds and publishes automatically
   (see `.github/workflows/deploy.yml`). The Astro project lives in the `site/`
   subfolder, which the workflow already points to.

### Domain

The site is currently published as a **project page** at
`https://inouridder.github.io/kunstenhuis-aubenton/`. Accordingly
`site/astro.config.mjs` sets `site: 'https://inouridder.github.io'` and
`base: '/kunstenhuis-aubenton/'`, and the custom-domain file is parked at
`site/public/CNAME.disabled`.

**To switch to the custom domain `www.kunstenhuisaubenton.nl` later:**

1. In `site/astro.config.mjs`: set `site: 'https://www.kunstenhuisaubenton.nl'`
   and remove the `base: '/kunstenhuis-aubenton/'` line.
2. Rename `site/public/CNAME.disabled` → `site/public/CNAME`.
3. Point the domain's DNS at GitHub Pages (a `CNAME` record for `www` →
   `inouridder.github.io`) and set the custom domain under **Settings → Pages**.
4. Push — the site rebuilds and serves from the domain root.

## How to update content (no coding background needed)

All wording lives in three matching files — edit the same spot in each language:

- `site/src/i18n/nl.ts` — Dutch
- `site/src/i18n/en.ts` — English
- `site/src/i18n/fr.ts` — French

Structured lists live in `site/src/data.ts`:

| To do this… | Edit |
| --- | --- |
| Add/clear an **agenda** event | `agendaItems` in `data.ts` (+ a title under `agenda.items` in each i18n file) |
| Add a **guestbook** quote | `guestbook` in `data.ts` (+ the quote under `guestbook.entries` in each i18n file) |
| Add a **partner / link** | `partners` in `data.ts` |
| Change **contact details** | `org` in `data.ts` (used everywhere automatically) |
| Add **photos** to the house gallery | drop a file in `site/public/images/`, add it to `galleryImages` in `data.ts`, and add a caption under `gallery` in each i18n file |
| Add info behind a **discipline** tile | expand its text under `possibilities.disciplines` in each i18n file |

After editing, run `npm run build` (or just push — the Action rebuilds).

## Photos

The published, web-optimized images are in `site/public/images/`. The original
full-resolution photos are kept in `source-material/photos/` and are **not**
published.

## Notes for later

- The **iHTs logo** can replace the "Visit iHTs" button on the History page
  (`site/src/pages/[lang]/historie.astro`).
- The contact form opens the visitor's own email program (`mailto:`), so it
  needs no server. To collect submissions directly instead, wire the `<form>` in
  `site/src/pages/[lang]/contact.astro` to a free service like
  [Formspree](https://formspree.io).
- Guest-room photos can be added to the gallery when available.
