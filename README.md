# Desfundări Canalizări — site de prezentare

Site one-page, static (Astro + Tailwind), optimizat pentru SEO local și conversie în apel telefonic. Non-stop, București & Ilfov.

## Rulare locală

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # generează site-ul static în dist/
npm run preview    # servește build-ul local
```

## Ce mai e de completat (caută „TODO" în cod)

| Ce | Unde |
|----|------|
| CUI, adresă sediu, email | `src/lib/firma.ts` |
| Link profil Google Business | `src/lib/firma.ts` (`googleBusinessUrl`) |
| 3 recenzii reale de pe Google | `src/components/Recenzii.astro` |
| Pozele din galerie | `src/assets/galerie/` (vezi mai jos) |
| Domeniul real | `astro.config.mjs` (`SITE`) și `public/robots.txt` |

## Înlocuirea pozelor din galerie

1. Pune pozele în `src/assets/galerie/` — JPG peisaj, ideal **1200×900** (4:3), sub 500KB.
2. Deschide `src/components/Galerie.astro`:
   - **Sliderele înainte/după** (lista `perechi`): poza „înainte" + poza „după",
     făcute din același unghi — altfel comparația nu are efect.
   - **Pozele simple** (lista `simple`): echipa, echipamentul, duba.
   - Scrie alt-uri descriptive cu localitatea (contează la SEO).
3. Build-ul le convertește automat în WebP, cu lazy-load și dimensiuni responsive.

## Schimbarea textelor

- Telefoane, zone acoperite, rating: `src/lib/firma.ts` (un singur loc, se propagă peste tot).
- Textele secțiunilor: fiecare secțiune are componenta ei în `src/components/`
  (Hero, Despre, Servicii, Proces, Galerie, Zone, Recenzii, FAQ, Contact, Footer).
- Regulile de brand (culori, fonturi, trepte de text): `src/styles/global.css`.
  Cinci culori, două fonturi — nu adăuga altele.

## Deploy pe Netlify

1. Urcă proiectul într-un repo (GitHub/GitLab) și conectează-l în Netlify —
   `netlify.toml` e deja configurat (build `npm run build`, publish `dist/`).
2. După primul deploy, activează notificările formularului:
   **Netlify → Forms → Notifications → Email** (emailul firmei).
   Formularul „cerere-oferta" e detectat automat.
3. Setează domeniul real în Netlify, apoi actualizează `SITE` din
   `astro.config.mjs` și `Sitemap:` din `public/robots.txt` și fă un redeploy.

## SEO — deja inclus

- Schema.org `Plumber` (telefon, zone, program 24/7, rating 5.0/18) + `FAQPage`.
- Sitemap (`/sitemap-index.xml`), robots.txt, canonical, Open Graph (`public/og.png`).
- Un singur H1, heading-uri semantice, alt-uri descriptive locale pe imagini.

## Verificare vizuală (dezvoltare)

```bash
node screenshot.mjs http://localhost:4321            # desktop 1440px
node screenshot.mjs http://localhost:4321 mobil 360  # mobil 360px
```

Capturile se salvează în `temporary screenshots/` (folosește Chrome-ul instalat).
