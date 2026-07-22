# Desfundări Canalizări — site de prezentare

Site one-page, static (Astro + Tailwind), optimizat pentru SEO local și conversie în apel telefonic. Non-stop, București, Ilfov și ~20 km în jur.

**Live:** https://davidaxiniea.github.io/desfundari-canalizari/

## Rulare locală

```bash
npm install
npm run dev        # http://localhost:4321/desfundari-canalizari/
npm run build      # generează site-ul static în dist/
npm run preview    # servește build-ul local
```

## Ce mai e de completat (caută „TODO" în cod)

| Ce | Unde |
|----|------|
| CUI firmă | `src/lib/firma.ts` |
| Email firmă | `src/lib/firma.ts` |
| Domeniul propriu (când se cumpără) | `astro.config.mjs` (`SITE` + `BASE`) și `public/robots.txt` |

Deja completate din profilul Google Business (iulie 2026): telefoane, adresă, rating **5.0 din 18 recenzii**, link-ul profilului și 3 recenzii reale.

## Pozele

Toate pozele primesc automat un **duotone petrol** (`.duotone` din `src/styles/global.css`),
ca să arate ca un sistem unitar indiferent de sursă. La hover — și în lightbox — revin la
culoarea reală.

### Galerie (`src/components/Galerie.astro`)

Conține **doar poze reale ale firmei**, preluate de pe profilul ei de Google Business.
Secțiunea afirmă „din lucrările noastre", deci nu pune niciodată stock aici.

1. Pune JPG-uri peisaj în `src/assets/galerie/` (ideal **1200×900**, sub 500KB).
2. Adaugă-le în lista `poze`, cu `alt` descriptiv + localitate (contează la SEO).

Nu există perechi înainte/după, așa că sliderul de comparație nu e folosit.
Componenta `BeforeAfter.astro` a rămas în repo: dacă primești o pereche reală
(aceeași încadrare, înainte și după), o poți reactiva.

### Servicii (`src/components/Servicii.astro`)

Patru poze sunt reale, două sunt ilustrații stock gratuite (Pexels), marcate în cod cu
`stock: true` — pentru serviciile fără poză proprie (reparații, vidanjare). Sunt ilustrații,
nu sunt prezentate ca lucrări ale firmei. Când clientul trimite poze reale, înlocuiește-le
în `src/assets/servicii/` și șterge `stock: true`.

Surse stock: [Pexels 9389356](https://www.pexels.com/photo/9389356/) (reparații),
[Pexels 37432988](https://www.pexels.com/photo/37432988/) (vidanjare) — licență gratuită, uz comercial.

## Schimbarea textelor

- Telefoane, zone acoperite, rating, rază: `src/lib/firma.ts` (un singur loc, se propagă peste tot).
- Textele secțiunilor: fiecare secțiune are componenta ei în `src/components/`
  (Hero, Proces, Galerie, Servicii, Despre, Zone, FAQ, Recenzii, Contact, Footer).
- Regulile de brand (culori, fonturi, trepte de text): `src/styles/global.css`.
  Cinci culori, două fonturi — nu adăuga altele.

## Deploy (GitHub Pages)

Deploy automat la fiecare push:

```bash
git add -A && git commit -m "mesaj" && git push origin main
```

Workflow-ul `.github/workflows/deploy.yml` face build-ul și publică. Pages source = GitHub Actions.

Fiind site de proiect (servit dintr-un subfolder), `astro.config.mjs` are
`base: '/desfundari-canalizari/'`, iar căile absolute trec prin helperul `withBase`.
`public/.nojekyll` e obligatoriu (altfel GitHub ignoră folderul `_astro`).

**La mutarea pe domeniu propriu:** pune `BASE = '/'`, schimbă `SITE` cu domeniul real
și actualizează `Sitemap:` din `public/robots.txt`.

**Formularul de contact** nu funcționează pe GitHub Pages (nu există backend) — telefonul
e oricum CTA-ul principal. Pentru un formular funcțional: Netlify (`netlify.toml` e deja
în repo) sau Formspree.

## SEO — deja inclus

- Schema.org `Plumber`: telefon, adresă, program 24/7, rating real 5.0/18,
  zone (București + Ilfov) și `GeoCircle` cu raza de 20 km. Plus `FAQPage`.
- Sitemap (`/sitemap-index.xml`), robots.txt, canonical, Open Graph (`public/og.png`).
- Un singur H1, heading-uri semantice, alt-uri descriptive locale pe imagini.

## Verificare vizuală (dezvoltare)

```bash
node screenshot.mjs http://localhost:4321/desfundari-canalizari/            # desktop 1440px
node screenshot.mjs http://localhost:4321/desfundari-canalizari/ mobil 360  # mobil 360px
```

Capturile se salvează în `temporary screenshots/` (folosește Chrome-ul instalat).
