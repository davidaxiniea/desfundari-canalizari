// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Publicare pe GitHub Pages, pe domeniul propriu al firmei (servit din rădăcină).
// Domeniul e legat prin public/CNAME + înregistrările DNS (A pe apex către GitHub Pages).
const SITE = 'https://desfundari-canalizari.ro';
const BASE = '/';

export default defineConfig({
  site: SITE,
  base: BASE,
  output: 'static',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
