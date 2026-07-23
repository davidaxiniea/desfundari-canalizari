/// <reference types="astro/client" />

// gtag.js e injectat de Analytics.astro doar când măsurarea e activă.
interface Window {
  gtag?: (...args: unknown[]) => void;
  dataLayer?: unknown[];
}
