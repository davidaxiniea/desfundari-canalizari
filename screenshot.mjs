/*
  Screenshot de verificare vizuală (workflow-ul din claudegeneric.md).

  Folosire:
    node screenshot.mjs http://localhost:4321            → desktop 1440px
    node screenshot.mjs http://localhost:4321 hero       → cu etichetă în nume
    node screenshot.mjs http://localhost:4321 mobil 360  → lățime custom (test mobil)

  Salvează în ./temporary screenshots/screenshot-N[-eticheta].png (auto-incrementat).
  Folosește Chrome-ul instalat pe macOS prin puppeteer-core (fără download de browser).
*/
import puppeteer from 'puppeteer-core';
import { mkdir, readdir } from 'node:fs/promises';
import path from 'node:path';

const [url, eticheta, latime] = process.argv.slice(2);
if (!url) {
  console.error('Folosire: node screenshot.mjs <url> [eticheta] [latime]');
  process.exit(1);
}

const dir = path.join(import.meta.dirname, 'temporary screenshots');
await mkdir(dir, { recursive: true });

const existente = (await readdir(dir)).filter((f) => f.startsWith('screenshot-'));
const n = existente.length + 1;
const nume = `screenshot-${n}${eticheta ? `-${eticheta}` : ''}.png`;

const browser = await puppeteer.launch({
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  headless: true,
});
const page = await browser.newPage();
await page.setViewport({ width: Number(latime) || 1440, height: 960, deviceScaleFactor: 1 });
await page.goto(url, { waitUntil: 'networkidle0' });

// Parcurge pagina ca să declanșeze lazy-load-ul imaginilor și reveal-urile,
// apoi revine sus înainte de captură
await page.evaluate(async () => {
  const pas = window.innerHeight / 2;
  for (let y = 0; y <= document.body.scrollHeight; y += pas) {
    window.scrollTo(0, y);
    await new Promise((r) => setTimeout(r, 120));
  }
  window.scrollTo(0, 0);
});
await new Promise((r) => setTimeout(r, 800));
await page.screenshot({ path: path.join(dir, nume), fullPage: true });
await browser.close();
console.log(path.join(dir, nume));
