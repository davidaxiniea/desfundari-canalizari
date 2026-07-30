/*
  Datele firmei — un singur loc de editat.
  Orice schimbare aici se propagă în toată pagina (header, hero, contact, footer, schema SEO).
*/
export const FIRMA = {
  nume: 'Desfundări Canalizări',
  // Afișare vs. link tel: — păstrează ambele sincronizate
  telefonPrincipal: { afisare: '0760 509 072', tel: '+40760509072' },
  telefonSecundar: { afisare: '0721 933 745', tel: '+40721933745' },
  /*
    WhatsApp — CTA-ul principal de contact. `numar` e în format wa.me:
    fără „+" și fără „0" la început (prefix de țară 40 + numărul).
    Confirmat activ prin test extern (iulie 2026).
  */
  whatsapp: {
    numar: '40760509072',
  },
  // Verificate pe profilul Google Business (iulie 2026)
  rating: { valoare: '5.0', numarRecenzii: 18 },
  googleBusinessUrl: 'https://maps.app.goo.gl/d9JxamrdGJ5Do4J1A',
  adresa: 'Strada Tămâioarei 49, sector 2, București',
  email: '', // TODO: adresa de email a firmei
  cui: '', // TODO: CUI firmă (apare în footer)
} as const;

/*
  Măsurarea conversiilor (vezi docs/masurare-conversii.md).
  Cât timp ID-urile sunt goale NU se încarcă niciun script Google și NU apare
  banda de cookie-uri — nimic de urmărit, deci nimic de consimțit (corect GDPR).
  Completează ID-urile după ce firma își face conturile, apoi redeploy.
*/
export const ANALYTICS = {
  ga4Id: 'G-J5H0V9PWWK', // Google Analytics 4 — proprietatea „Site desfundari"
  adsId: '', // TODO opțional: „AW-XXXXXXXXX" din Google Ads (conversia de apel/WhatsApp)
  adsConversieContact: '', // TODO opțional: eticheta conversiei, ex. „AbCd_EfGhIjk1234"
} as const;

export const analyticsActiv = Boolean(ANALYTICS.ga4Id || ANALYTICS.adsId);

/*
  Construiește linkul wa.me. Fără `?text=` — conversația se deschide goală,
  ca omul să scrie cu ce se confruntă, în cuvintele lui.
*/
export const waUrl = (): string => `https://wa.me/${FIRMA.whatsapp.numar}`;

/*
  Acoperire: București (toate sectoarele) + Ilfov + o rază de ~20 km în jurul Bucureștiului.
  Raza e declarată și în schema.org (GeoCircle, vezi src/layouts/Base.astro).
*/
export const RAZA_KM = 20;

export const ZONE_BUCURESTI = [
  'Sector 1',
  'Sector 2',
  'Sector 3',
  'Sector 4',
  'Sector 5',
  'Sector 6',
] as const;

export const ZONE_ILFOV = [
  'Voluntari',
  'Popești-Leordeni',
  'Chiajna',
  'Bragadiru',
  'Buftea',
  'Otopeni',
  'Pantelimon',
  'Chitila',
  'Măgurele',
  'Domnești',
  'Mogoșoaia',
  'Tunari',
  'Dobroești',
  'Jilava',
  'Afumați',
  'Berceni',
  'Balotești',
  'Cernica',
  'Clinceni',
  'Corbeanca',
  'Glina',
  'Ștefăneștii de Jos',
  'Brănești',
  'Vidra',
  'Cornetu',
  '1 Decembrie',
] as const;
