/*
  Datele firmei — un singur loc de editat.
  Orice schimbare aici se propagă în toată pagina (header, hero, contact, footer, schema SEO).
*/
export const FIRMA = {
  nume: 'Desfundări Canalizări',
  // Afișare vs. link tel: — păstrează ambele sincronizate
  telefonPrincipal: { afisare: '0760 509 072', tel: '+40760509072' },
  telefonSecundar: { afisare: '0721 933 745', tel: '+40721933745' },
  rating: { valoare: '5.0', numarRecenzii: 18 },
  // TODO: pune link-ul real către profilul Google Business
  googleBusinessUrl: 'https://TODO-link-profil-google-business',
  email: '', // TODO: adresa de email a firmei (primește mesajele din formular via Netlify)
  cui: '', // TODO: CUI firmă (apare în footer)
  adresa: '', // TODO: adresa sediului (apare în footer)
} as const;

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
] as const;
