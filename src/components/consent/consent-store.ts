"use client";

import { useSyncExternalStore } from "react";
import { USERCENTRICS_ANALYTICS_SERVICE_ID, USERCENTRICS_ENABLED, USERCENTRICS_MAPS_SERVICE_ID } from "@/lib/usercentrics";

/**
 * Einwilligung (TDDDG § 25): Google Analytics und Google Maps werden nur nach Zustimmung geladen.
 * Die Auswahl wird ausschließlich lokal im Browser (localStorage) gespeichert, nichts davon geht an einen Server.
 * Gespeichert werden: Auswahl je Zweck, Version der Einstellungen, Zeitpunkt der Entscheidung.
 * Fehlt der Eintrag oder ist er unlesbar, abgelaufen oder von einer älteren Einstellungsversion, gilt: keine Einwilligung.
 */
export type Consent = { analytics: boolean; maps: boolean; decided: boolean };

/** Version der Einstellungen: bei Änderung von Zwecken oder Diensten erhöhen, dann wird erneut gefragt. */
export const CONSENT_VERSION = 1;
/** Gültigkeit einer Entscheidung in Tagen; danach erscheint der Banner erneut. */
export const CONSENT_MAX_AGE_DAYS = 180;

const KEY = "tonn-consent-v2";
const LEGACY_KEY = "tonn-consent-v1"; // alter Banner ohne Zeitpunkt: wird nie übernommen, nur beim Speichern entfernt
const EVENT = "tonn-consent-change";
const EMPTY: Consent = { analytics: false, maps: false, decided: false };
const DAY = 86_400_000;

type Stored = { v: number; analytics: boolean; maps: boolean; decided: boolean; ts: string };

let cache: { raw: string | null; value: Consent } | null = null;
/** Nur wenn das Schreiben in den Speicher scheitert: Auswahl gilt dann bis zum Schließen des Tabs. */
let memory: Stored | null = null;

function parse(raw: string | null, now = Date.now()): Stored | null {
  if (!raw) return null;
  try {
    const p = JSON.parse(raw) as Partial<Stored>;
    const t = typeof p.ts === "string" ? Date.parse(p.ts) : NaN;
    if (p.v !== CONSENT_VERSION || !Number.isFinite(t)) return null;
    if (typeof p.analytics !== "boolean" || typeof p.maps !== "boolean" || typeof p.decided !== "boolean") return null;
    if (now - t > CONSENT_MAX_AGE_DAYS * DAY || t - now > 5 * 60_000) return null; // abgelaufen oder Zeitpunkt in der Zukunft
    return p as Stored;
  } catch {
    return null;
  }
}

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

function readStored(): Stored | null {
  let raw: string | null = null;
  try {
    raw = window.localStorage.getItem(KEY);
  } catch {
    /* Speicher gesperrt → nur Sitzungsspeicher */
  }
  return parse(raw) ?? (raw === null ? memory : null);
}

function read(): Consent {
  if (USERCENTRICS_ENABLED) return provider;
  let raw: string | null = null;
  try {
    raw = window.localStorage.getItem(KEY);
  } catch {
    /* Speicher gesperrt → keine gespeicherte Einwilligung */
  }
  const key = raw ?? (memory ? JSON.stringify(memory) : null);
  if (cache && cache.raw === key) return cache.value;
  const st = parse(raw) ?? (raw === null ? parse(key) : null);
  const value = st ? { analytics: st.analytics, maps: st.maps, decided: st.decided } : EMPTY;
  cache = { raw: key, value };
  return value;
}

/** Aktueller Stand ohne React (für Ereignisse außerhalb von Komponenten). Auf dem Server: keine Einwilligung. */
export const getConsentSnapshot = (): Consent => (typeof window === "undefined" ? EMPTY : read());

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
  // Eigener Banner. decided:true nur bei einer ausdrücklichen Entscheidung im Banner; "Karte laden" ändert nur Google Maps.
  const prev = readStored();
  const decided = next.decided ?? prev?.decided ?? false;
  const keepTime = prev?.decided && next.decided === undefined; // einzelne Änderung behält den Zeitpunkt der letzten Gesamtentscheidung
  const stored: Stored = {
    v: CONSENT_VERSION,
    analytics: next.analytics ?? prev?.analytics ?? false,
    maps: next.maps ?? prev?.maps ?? false,
    decided,
    ts: keepTime && prev ? prev.ts : new Date().toISOString(),
  };
  memory = null;
  try {
    window.localStorage.setItem(KEY, JSON.stringify(stored));
    window.localStorage.removeItem(LEGACY_KEY);
  } catch {
    memory = stored; // ohne Speicher bleibt die Auswahl nur für diesen Tab wirksam
  }
  window.dispatchEvent(new Event(EVENT));
}

/** Öffnet das Einstellungsfenster (Footer-Link „Cookie-Einstellungen“). */
export const OPEN_EVENT = "tonn-consent-open";
/** Wird gesendet, wenn das erneut geöffnete Fenster geschlossen wurde (mit oder ohne Speichern). */
export const CLOSE_EVENT = "tonn-consent-close";
export const openConsentSettings = () => (USERCENTRICS_ENABLED ? void uc()?.showSecondLayer() : window.dispatchEvent(new Event(OPEN_EVENT)));
