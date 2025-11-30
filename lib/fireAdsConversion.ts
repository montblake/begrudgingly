// lib/adsConversion.ts
export function fireAdsConversion() {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", "conversion", {
    send_to: "AW-17754632246/FYKrCJb8ysUbELbgiJJC",
    value: 1.0,
    currency: "USD",
  });
}
