"use client";

import { useSyncExternalStore } from "react";
import { USERCENTRICS_ANALYTICS_SERVICE_ID, USERCENTRICS_ENABLED, USERCENTRICS_MAPS_SERVICE_ID } from "@/lib/usercentrics";

/**
 * Einwilligung (TDDDG § 25): Google Analytics und Google Maps werden nur nach Zustimmung geladen.
 * Die Auswahl wird lokal im Browser gespeichert (technisch erforderlich, Nachweis der Einwilligung).
 */
export type Consent = { analytics: boolean; maps: boolean; decided: boolean };

const KEY = "tonn-consent-v1";
const EVENT = "tonn-consent-change";
const EMPTY: Consent = { analytics: false, maps: false, decided: false };

let cache: { raw: string | null; value: Consent } | null = null;

/**
 * Mit Usercentrics ist DIESE Auswahl maßgeblich (nur im Speicher, bei jedem Seitenaufruf aus Usercentrics neu gelesen).
 * Der bisherige localStorage-Eintrag bleibt unangetastet und wird in diesem Modus nicht mehr gelesen.
 */
let provider: Consent = EMPTY;

/** Offizielle Programmierschnittstelle der Usercentrics-CMP (window.__ucCmp), siehe usercentrics.com/docs/web/features/api/control-functionality */
type UcCmp = {
  isInitialized(): Promise<boolean>;
  getConsentDetails(): Promise<{ services: Record<string, { consent: { given: boolean } }> }>;
  updateServicesConsents(consents: { id: string; consent: boolean }[]): Promise<void>;
  saveConsents(type?: "EXPLICIT" | "IMPLICIT"): Promise<void>;
  showSecondLayer(): Promise<void>;
};
const uc = (): UcCmp | undefined => (typeof window === "undefined" ? undefined : (window as unknown as { __ucCmp?: UcCmp }).__ucCmp);

/**
 * Liest den Status von "Google Maps" und "Google Analytics" aus Usercentrics in den Store (beide Dienste sind unabhängig).
 * Ohne Ergebnis von Usercentrics oder ohne den Dienst in der Konfiguration bleibt es bei "keine Einwilligung".
 */
export async function syncFromUsercentrics() {
  const cmp = uc();
  if (!cmp || !(await cmp.isInitialized())) return;
  const { services } = await cmp.getConsentDetails();
  const maps = services[USERCENTRICS_MAPS_SERVICE_ID]?.consent.given === true;
  const analytics = services[USERCENTRICS_ANALYTICS_SERVICE_ID]?.consent.given === true;
  if (provider.decided && provider.maps === maps && provider.analytics === analytics) return;
  provider = { analytics, maps, decided: true };
  window.dispatchEvent(new Event(EVENT));
}

function read(): Consent {
  if (USERCENTRICS_ENABLED) return provider;
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
  if (USERCENTRICS_ENABLED) {
    // Einwilligung/Widerruf NUR für den Dienst "Google Maps" (Button "Karte laden"): dokumentierter Weg updateServicesConsents + saveConsents.
    // Alle anderen Dienste, auch Google Analytics, bleiben unverändert (Analytics wird nur im Banner/Einstellungsfenster entschieden). Scheitert das, öffnen wir die Einstellungen, damit der Nutzer selbst entscheidet.
    const cmp = uc();
    if (!cmp || typeof next.maps !== "boolean") return;
    void (async () => {
      try {
        if (!(await cmp.isInitialized())) return;
        await cmp.updateServicesConsents([{ id: USERCENTRICS_MAPS_SERVICE_ID, consent: next.maps === true }]);
        await cmp.saveConsents("EXPLICIT");
        await syncFromUsercentrics();
      } catch {
        void cmp.showSecondLayer();
      }
    })();
    return;
  }
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
export const openConsentSettings = () => (USERCENTRICS_ENABLED ? void uc()?.showSecondLayer() : window.dispatchEvent(new Event(OPEN_EVENT)));
