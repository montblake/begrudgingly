export {};

declare global {
  interface Window {
    gtag: (...args: Parameters<typeof window.gtag>) => void;
    dataLayer: Parameters<typeof window.dataLayer>[0];
  }
}
