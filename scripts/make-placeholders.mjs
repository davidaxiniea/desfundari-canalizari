/*
  Generează imaginile placeholder pentru galerie (src/assets/galerie/TODO-*.jpg)
  și imaginea Open Graph (public/og.png) din logo-ul principal.

  Rulare: npm run placeholders
  Clientul înlocuiește fișierele TODO-*.jpg cu poze reale (aceleași nume sau
  actualizează lista din src/components/Galerie.astro). Dimensiune recomandată:
  1200×900 (peisaj 4:3), JPG, sub 500KB.
*/
import sharp from 'sharp';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.dirname(fileURLToPath(import.meta.url));
const galerie = path.join(root, '../src/assets/galerie');

const W = 1200;
const H = 900;

const items = [
  ['TODO-desfundare-coloana-inainte', 'Înainte · desfundare coloană'],
  ['TODO-desfundare-coloana-dupa', 'După · desfundare coloană'],
  ['TODO-hidrojet-exterior-inainte', 'Înainte · curățare hidrojet'],
  ['TODO-hidrojet-exterior-dupa', 'După · curățare hidrojet'],
  ['TODO-inspectie-video-inainte', 'Înainte · inspecție video'],
  ['TODO-inspectie-video-dupa', 'După · inspecție video'],
  ['TODO-echipa-la-lucru', 'Echipa la lucru'],
  ['TODO-echipament-hidrojet', 'Echipament hidrojet'],
  ['TODO-duba-echipata', 'Duba echipată'],
];

const placeholderSvg = (label) => `
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <rect width="${W}" height="${H}" fill="#D9E4E4"/>
  <line x1="80" y1="${H / 2}" x2="${W / 2 - 60}" y2="${H / 2}" stroke="#8A939B" stroke-width="6" stroke-dasharray="4 18" stroke-linecap="round"/>
  <circle cx="${W / 2}" cy="${H / 2}" r="14" fill="#E87A2E"/>
  <line x1="${W / 2 + 40}" y1="${H / 2}" x2="${W - 80}" y2="${H / 2}" stroke="#E87A2E" stroke-width="7" stroke-linecap="round"/>
  <text x="${W / 2}" y="${H / 2 + 90}" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="40" fill="#103A43">${label}</text>
  <text x="${W / 2}" y="${H / 2 + 150}" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="28" fill="#8A939B">TODO: înlocuiește cu poză reală · 1200×900 JPG</text>
</svg>`;

for (const [name, label] of items) {
  await sharp(Buffer.from(placeholderSvg(label)))
    .jpeg({ quality: 80 })
    .toFile(path.join(galerie, `${name}.jpg`));
  console.log(`galerie/${name}.jpg`);
}

// Open Graph 1200×630: logo principal centrat pe petrol
const logo = await readFile(path.join(root, '../src/assets/logo-principal-dark.svg'));
const logoPng = await sharp(logo, { density: 150 }).resize({ width: 900 }).png().toBuffer();
await sharp({
  create: { width: 1200, height: 630, channels: 3, background: '#103A43' },
})
  .composite([{ input: logoPng, gravity: 'center' }])
  .png()
  .toFile(path.join(root, '../public/og.png'));
console.log('public/og.png');
