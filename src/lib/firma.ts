/*
  Datele firmei — un singur loc de editat.
  Orice schimbare aici se propagă în toată pagina (header, hero, contact, footer, schema SEO).
*/
export const FIRMA = {
  nume: 'Desfundări Canalizări',
  // Afișare vs. link tel: — păstrează ambele sincronizate
  telefonPrincipal: { afisare: '0760 509 072', tel: '+40760509072' },
  telefonSecundar: { afisare: '0721 933 745', tel: '+40721933745' },
  // Verificate pe profilul Google Business (iulie 2026)
  rating: { valoare: '5.0', numarRecenzii: 18 },
  googleBusinessUrl: 'https://maps.app.goo.gl/d9JxamrdGJ5Do4J1A',
  adresa: 'Strada Tămâioarei 49, sector 2, București',
  email: '', // TODO: adresa de email a firmei
  cui: '', // TODO: CUI firmă (apare în footer)
} as const;

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
