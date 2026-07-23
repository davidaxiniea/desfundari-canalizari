# Măsurarea conversiilor — cum se activează

Stratul de măsurare e **deja implementat în cod**, dar **dormant**: cât timp ID-urile
din [`src/lib/firma.ts`](../src/lib/firma.ts) (`ANALYTICS`) sunt goale, nu se încarcă
niciun script Google și nu apare banda de cookie-uri. Nimic de urmărit → nimic de
consimțit (corect din punct de vedere GDPR).

Ca să pornească măsurarea, completezi ID-urile și redeployezi. Atât.

---

## Ce se măsoară automat

La fiecare click pe un CTA de contact se trimite un eveniment. Elementele sunt deja
marcate în cod cu `data-track`:

- `data-track="whatsapp"` → eveniment **`contact_whatsapp`**
- `data-track="telefon"` → eveniment **`contact_telefon`**

Sunt marcate: butoanele din hero, bara sticky de pe mobil, panoul și numerele din
secțiunea Contact, butonul din header, numerele din footer și cele de pe cardurile
de servicii. Adaugi urmărirea pe orice link nou punându-i `data-track="whatsapp"`
sau `data-track="telefon"`.

Dacă e configurat și Google Ads (vezi mai jos), aceleași click-uri trimit și
conversia de apel/WhatsApp în cont.

---

## Pasul 1 — Google Analytics 4 (recomandat, gratuit)

1. Creează o proprietate GA4 în [analytics.google.com](https://analytics.google.com).
2. Din **Admin → Data streams → Web**, ia ID-ul de forma **`G-XXXXXXXXXX`**.
3. Pune-l în `src/lib/firma.ts`:
   ```ts
   export const ANALYTICS = {
     ga4Id: 'G-XXXXXXXXXX',
     ...
   } as const;
   ```
4. Redeploy (`git push`). Din acest moment se încarcă gtag.js și apare banda de cookie-uri.
5. Verifică live cu extensia **Google Tag Assistant** sau în GA4 → **Realtime**: dă un
   click pe „Scrie pe WhatsApp" și vezi evenimentul `contact_whatsapp`.

În GA4, marchează `contact_whatsapp` și `contact_telefon` ca **Key events** (Admin →
Events) ca să le poți folosi drept conversii și să le legi de Google Ads.

---

## Pasul 2 — Google Ads (opțional, doar dacă rulezi reclame)

Necesar ca să vezi **ce cuvânt-cheie aduce apeluri** (vezi și
[`promovare-google-ads.md`](./promovare-google-ads.md)).

1. În Google Ads → **Goals → Conversions → New**, creează o conversie
   „Contact" (categoria *Contact* sau *Phone call lead*).
2. Ia **Conversion ID** (`AW-XXXXXXXXX`) și **Conversion label** (ex. `AbCd_EfGhIjk1234`).
3. Completează în `src/lib/firma.ts`:
   ```ts
   export const ANALYTICS = {
     ga4Id: 'G-XXXXXXXXXX',
     adsId: 'AW-XXXXXXXXX',
     adsConversieContact: 'AbCd_EfGhIjk1234',
   } as const;
   ```
4. Redeploy. Fiecare click pe WhatsApp/telefon trimite acum și
   `gtag('event', 'conversion', { send_to: 'AW-.../etichetă' })`.

> Notă: un click pe `tel:` nu garantează o convorbire. Pentru numărul real de apeluri
> conectate, folosește **numerele de redirecționare Google (call tracking)** din Ads,
> dacă sunt disponibile pentru România — se numără doar apelurile peste ~60 s. Vezi
> `promovare-google-ads.md`, secțiunea 1.3.

---

## Consimțământ (Consent Mode v2)

- Implicit, totul e pe **`denied`** (nu se scriu cookie-uri de măsurare până la accept).
- Banda de jos scrie alegerea în `localStorage` (`consimtamant-cookie` = `accept`/`refuz`)
  și, la accept, ridică consimțământul. Alegerea se reține la vizitele următoare.
- Textul benzii e în [`ConsentBanner.astro`](../src/components/ConsentBanner.astro);
  logica de încărcare e în [`Analytics.astro`](../src/components/Analytics.astro).
- Pentru audiențe de remarketing în UE poate fi nevoie de un **CMP certificat** Google —
  de verificat dacă ajungi acolo. Pentru măsurare simplă GA4 + conversii, setarea de aici
  e suficientă.

---

## Ordinea reală (context)

Măsurarea are sens după ce firma are **domeniu propriu** (nu subdomeniul de GitHub) și,
pentru Ads, **contul de advertiser verificat cu CUI**. Vezi ordinea completă în
[`promovare-google-ads.md`](./promovare-google-ads.md), secțiunea 8. Codul e gata; ce
lipsește sunt conturile Google — pe care le face clientul.
