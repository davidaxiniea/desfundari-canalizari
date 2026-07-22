# Promovare prin Google Ads — plan de pornire

Serviciu de urgență, cu decizie luată în câteva minute și pe telefon. Deci: **campanii Search,
optimizate pe apel**, nu pe trafic. Restul (Display, Performance Max, remarketing) vine mai târziu,
după ce avem date.

---

## 1. De rezolvat ÎNAINTE de prima reclamă

Fără astea, banii se duc degeaba.

### 1.1. Domeniu propriu — blocant real
Acum site-ul e la `davidaxiniea.github.io/desfundari-canalizari/`. În reclame, URL-ul afișat trebuie
să corespundă domeniului final, deci în anunț ar apărea un subdomeniu personal de GitHub. Pentru o
firmă care cere încredere la 2 noaptea, e o pierdere directă de click-uri și de credibilitate.

Un `.ro` costă puțin. După cumpărare: `BASE = '/'` și `SITE` = domeniul real în `astro.config.mjs`,
plus `Sitemap:` în `public/robots.txt` (5 minute de lucru).

### 1.2. CUI + verificarea advertiserului
Google cere verificarea identității advertiserului. E nevoie de datele firmei (CUI-ul lipsește și
din `src/lib/firma.ts`). Fără verificare, contul poate fi limitat.

### 1.3. Măsurarea conversiilor
Altfel nu știm ce cuvânt aduce clienți. Minimul necesar:
- eticheta Google (gtag.js) pe site;
- o conversie **„Apel telefonic"** declanșată de click pe orice link `tel:` (inclusiv bara sticky
  de pe mobil — cel mai apăsat element de pe site);
- **„Apeluri din anunțuri"**, dacă numerele de redirecționare Google sunt disponibile pentru România
  (de verificat în cont); se pot număra doar apelurile mai lungi de ~60 s, ca să nu contorizăm greșelile.

### 1.4. Consimțământ pentru cookie-uri (GDPR)
Fiind trafic din UE, etichetele de măsurare cer consimțământ. Se implementează **Consent Mode v2**
cu o bandă simplă de accept/refuz. Pentru audiențe de remarketing, verifică dacă e nevoie de un CMP
certificat.

### 1.5. Google Business Profile — gratuit, cel mai bun raport efort/rezultat
Profilul „Desfundare canale țevi" are deja 5.0 din 18 recenzii. De făcut:
- urcă pozele reale (le avem deja pregătite în `src/assets/`);
- setează program **non-stop** și zona deservită (București, Ilfov, 20 km);
- completează lista de servicii;
- cere activ recenzii după fiecare lucrare — 18 recenzii e puțin pentru a domina harta.

Local pack-ul aduce apeluri gratuit, în paralel cu reclamele plătite.

---

## 2. Structura campaniilor

Începem cu 2 campanii. Simplu, controlabil.

### Campania A — „Desfundări · Urgență" (Search)
Bugetul principal. Grupuri de anunțuri pe intenție:

| Grup | Exemple de cuvinte cheie |
|------|--------------------------|
| Desfundare generală | `[desfundare canalizare bucuresti]`, `[desfundari canalizare bucuresti]`, `"desfundare canalizare non stop"` |
| Urgențe | `"desfundare canalizare urgent"`, `"desfundare canalizare acum"`, `"instalator urgent canalizare"` |
| Pe obiect | `[desfundare wc bucuresti]`, `[desfundare chiuveta bucuresti]`, `"desfundare coloana bloc"` |
| Ilfov + localități | `[desfundare canalizare voluntari]`, `… popesti leordeni`, `… otopeni`, `… bragadiru`, `… chiajna` |

### Campania B — „Servicii conexe" (Search)
Buget mai mic, intenție diferită, deci separat ca să nu-i fure bugetul urgențelor:

| Grup | Exemple |
|------|---------|
| Vidanjare | `[vidanjare bucuresti]`, `[vidanjare ilfov]`, `"vidanjare fosa septica"` |
| Inspecție video | `[inspectie video canalizare]`, `"camera inspectie canalizare"` |
| Curățare / hidrojet | `"curatare canalizare presiune"`, `"hidrojet canalizare"`, `"spalare canalizare"` |

**Potriviri:** exact și frază la început. Fără potrivire amplă până nu avem date de conversie —
altfel se consumă bugetul pe căutări fără legătură.

### Mai târziu, după ~30 de conversii
- Campanie **doar-apel** (call-only) pe mobil, pentru intervalul de noapte.
- Remarketing pe cei care au deschis site-ul dar n-au sunat (util pentru administratori, care compară).

---

## 3. Cuvinte cheie negative (de pus din prima zi)

Blochează cererile care nu cumpără serviciul:

```
gratis, gratuit, cum sa, cum se, singur, diy, reteta, forum
angajare, angajez, salariu, job, cariere, curs, scoala
vand, cumpar, magazin, pret spirala, inchiriere, second hand
desfundator, soda caustica, chimic, cartus, produs
```

Atenție la `desfundator` și `spirala`: de obicei sunt oameni care caută **produsul**, nu serviciul.
Verifică lunar raportul de termeni de căutare și adaugă ce apare irelevant.

---

## 4. Textele anunțurilor (în vocea brandului)

Google Ads permite 15 titluri (max 30 caractere) și 4 descrieri (max 90). Propuneri gata de folosit:

**Titluri**
- Desfundări Canalizare 24/7
- Ajungem Azi. Rezolvăm Azi.
- Preț Spus Înainte, Nu După
- Non-Stop București & Ilfov
- Sună 0760 509 072
- Inspecție Video Canalizare
- 5.0 din 18 Recenzii Google
- Fără Taxe de Urgență
- Intervenție în Aceeași Zi
- Desfundare Coloane de Bloc
- Vidanjare și Hidrojet
- Factură la Fiecare Lucrare

**Descrieri**
- Desfundăm canalizări non-stop în București și Ilfov. Preț spus înainte să începem.
- Venim azi, cu inspecție video dacă e nevoie. Factură la fiecare intervenție.
- Noapte, weekend, sărbători — același preț, fără taxe surpriză de urgență.
- Contracte pentru asociații de proprietari și restaurante. Sună acum.

**Asset-uri (extensii)**
- *Apel:* 0760 509 072 — cea mai importantă, activă non-stop.
- *Locație:* conectează profilul Google Business.
- *Sitelink-uri:* Servicii · Cum lucrăm · Lucrări · Contact (cu ancore către secțiuni).
- *Callout-uri:* Non-stop 24/7 · Preț spus înainte · Inspecție video · Factură · București & Ilfov.
- *Fragmente structurate* (Servicii): Desfundări canalizare, Inspecție video, Curățare țevi,
  Vidanjare, Reparații canalizare.

Vocea rămâne calmă: fără „!!!", fără majuscule agresive. Diferențiatorul e **prețul spus înainte**
și **fără taxe de urgență** — exact ce caută cineva speriat că va fi jecmănit la 2 noaptea.

---

## 5. Setări de campanie

| Setare | Valoare | De ce |
|--------|---------|-------|
| Rețea | Doar Search (fără Search Partners, fără Display) | control pe intenție |
| Locație | București + Ilfov + rază 20 km | acoperirea reală |
| Tip locație | **„Persoane aflate în zonă"**, nu „interesate de" | altfel plătim clicuri din toată țara |
| Limbă | Română | |
| Program | 24/7 | non-stop e diferențiatorul; noaptea concurența licitează mai puțin |
| Dispozitive | accent pe mobil | urgențele se caută de pe telefon |
| Licitare | „Maximizează clicurile" cu plafon CPC → „Maximizează conversiile" după ~15–30 conversii | fără date, licitarea automată pe conversii nu are pe ce învăța |

**Buget:** pornește modest și concentrat pe grupul de urgențe, nu împrăștiat pe toate serviciile.
Pentru costul real per click în această nișă, verifică **Keyword Planner** direct în cont — variază
mult și n-are rost să pornim de la cifre inventate.

---

## 6. Ce urmărim

- **Cost per apel** (nu cost per click).
- **Apeluri → lucrări încheiate** — se ține manual, într-un tabel simplu, la început.
- **Valoarea medie a unei lucrări** → de aici rezultă cât ne permitem să plătim pe un apel.

Regula de decizie: dacă un apel costă mai puțin decât marja pe o lucrare medie înmulțită cu rata de
închidere, campania merită scalată. Altfel se taie cuvintele scumpe și neproductive.

Verifică săptămânal raportul de termeni de căutare în prima lună — acolo se văd banii pierduți.

---

## 7. Ce NU aș face la început

- **Performance Max** — consumă buget fără să arate unde; are sens abia după ce avem conversii.
- **Display / YouTube** — nu se potrivesc cu o nevoie urgentă.
- **Potrivire amplă fără măsurare** — cel mai rapid mod de a arde bugetul.
- **Licitare pe numele concurenței** — scump și provoacă represalii.

O notă realistă: în această nișă din București concurența pe reclame e agresivă. Google filtrează
automat clicurile invalide, dar merită urmărit dacă apar tipare ciudate în primele săptămâni.

---

## 8. Ordinea pașilor

1. Domeniu propriu + mutarea site-ului pe el.
2. CUI în `firma.ts` și verificarea contului de advertiser.
3. Bandă de consimțământ + etichetă Google + conversia pe click `tel:`.
4. Google Business Profile completat (poze reale, program, zonă, servicii) + campanie de recenzii.
5. Campania A pornită mic, doar pe urgențe, cu lista de negative de la punctul 3.
6. După 2–3 săptămâni: raport de termeni de căutare, tăiat ce nu merge, apoi Campania B.
7. După ~30 de conversii: trecere pe licitare automată și campanie doar-apel pentru noapte.

---

## 9. Pași opționali pe site, care ajută reclamele

- **Pagini dedicate per serviciu** (`/desfundari`, `/vidanjare`, `/inspectie-video`): cresc relevanța
  și scorul de calitate față de trimiterea tuturor anunțurilor în aceeași pagină. Se adaugă ușor,
  structura Astro e deja pregătită.
- **Pagini pe localitate** pentru Ilfov (Voluntari, Otopeni, Popești-Leordeni): ajută și la SEO local,
  nu doar la Ads.
- Site-ul se încarcă foarte repede (sub 100 ms în teste locale) și e complet pe mobil — ambele
  contează în scorul de calitate, deci partea tehnică nu ne frânează.
