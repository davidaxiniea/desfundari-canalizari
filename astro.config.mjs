// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Publicare pe GitHub Pages (site de proiect → servit din subfolderul /BASE/).
// TODO: când firma cumpără domeniul, schimbă SITE cu domeniul real și pune BASE = '/'.
const SITE = 'https://davidaxiniea.github.io';
const BASE = '/desfundari-canalizari/';

export default defineConfig({
  site: SITE,
  base: BASE,
  output: 'static',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
