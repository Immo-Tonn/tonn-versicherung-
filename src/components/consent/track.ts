import { getConsentSnapshot } from "./consent-store";

const ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

type Win = Window & { gtag?: (...args: unknown[]) => void } & Record<string, unknown>;

/**
 * Sendet ein Google-Analytics-Ereignis nur, wenn Analytics freigegeben und geladen ist (sonst passiert nichts).
 * Absichtlich ohne Parameter: Es werden weder Formularwerte noch Kontaktdaten übertragen.
 */
export function trackEvent(name: "generate_lead" | "click_phone" | "click_email") {
  if (!ID || typeof window === "undefined") return;
  const w = window as unknown as Win;
  if (!getConsentSnapshot().analytics || w[`ga-disable-${ID}`] === true || typeof w.gtag !== "function") return;
  w.gtag("event", name);
}
