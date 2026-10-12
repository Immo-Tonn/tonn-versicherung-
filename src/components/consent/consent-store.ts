"use client";

import { useSyncExternalStore } from "react";

/**
 * Einwilligung (TDDDG § 25): Google Analytics und Google Maps werden nur nach Zustimmung geladen.
 * Die Auswahl wird lokal im Browser gespeichert (technisch erforderlich, Nachweis der Einwilligung).
 */
export type Consent = { analytics: boolean; maps: boolean; decided: boolean };

const KEY = "tonn-consent-v1";
const EVENT = "tonn-consent-change";
const EMPTY: Consent = { analytics: false, maps: false, decided: false };

let cache: { raw: string | null; value: Consent } | null = null;

function read(): Consent {
  let raw: string | null = null;
  try {
    raw = window.localStorage.getItem(KEY);
  } catch {
    /* Speicher gesperrt → keine Einwilligung */
  }
  if (cache && cache.raw === raw) return cache.value;
  let value = EMPTY;
  if (raw) {
    try {
      const p = JSON.parse(raw) as Partial<Consent>;
      value = { analytics: p.analytics === true, maps: p.maps === true, decided: p.decided === true };
    } catch {
      value = EMPTY;
    }
  }
  cache = { raw, value };
  return value;
}

function subscribe(cb: () => void) {
  window.addEventListener(EVENT, cb);
  window.addEventListener("storage", cb);
  return () => {
    window.removeEventListener(EVENT, cb);
    window.removeEventListener("storage", cb);
  };
}

/** `undefined` = noch nicht im Browser (Server/Hydration), sonst die gespeicherte Auswahl. */
export function useConsent(): Consent | undefined {
  return useSyncExternalStore(subscribe, read, () => undefined);
}

export function saveConsent(next: Partial<Consent>) {
  const merged = { ...read(), ...next };
  try {
    window.localStorage.setItem(KEY, JSON.stringify(merged));
  } catch {
    /* ohne Speicher bleibt die Auswahl nur für diese Sitzung wirksam */
    cache = { raw: JSON.stringify(merged), value: merged };
  }
  window.dispatchEvent(new Event(EVENT));
}

/** Öffnet das Einstellungsfenster (Footer-Link „Cookie-Einstellungen“). */
export const OPEN_EVENT = "tonn-consent-open";
export const openConsentSettings = () => window.dispatchEvent(new Event(OPEN_EVENT));
