"use client";

import { useSyncExternalStore } from "react";
import { USERCENTRICS_ENABLED, USERCENTRICS_MAPS_SERVICE_ID } from "@/lib/usercentrics";

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

type UcService = { id: string; categorySlug?: string; consent: { status: boolean } };
type UcUi = {
  isInitialized(): boolean;
  getServicesBaseInfo(): Promise<UcService[]> | UcService[];
  acceptAllConsents(): Promise<unknown>;
  showSecondLayer(): void;
};
const uc = (): UcUi | undefined => (typeof window === "undefined" ? undefined : (window as unknown as { UC_UI?: UcUi }).UC_UI);

/** Liest den Status von "Google Maps" aus Usercentrics in den Store. Ohne Usercentrics-Ergebnis bleibt "keine Einwilligung". */
export async function syncFromUsercentrics() {
  const ui = uc();
  if (!ui?.isInitialized()) return;
  const services = await ui.getServicesBaseInfo(); // je nach SDK-Version synchron oder als Promise
  const maps = services.find((s) => s.id === USERCENTRICS_MAPS_SERVICE_ID)?.consent.status === true;
  if (provider.decided && provider.maps === maps) return;
  provider = { analytics: false, maps, decided: true };
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
    // Einwilligung (Button "Karte laden") läuft über Usercentrics; der Store folgt danach per syncFromUsercentrics().
    // Hinweis: acceptService() speichert in der eingesetzten SDK-Version NICHT dauerhaft (nur acceptAllConsents()). Solange "Google Maps" der einzige
    // nicht notwendige Dienst ist, entspricht "alle akzeptieren" genau dieser Einwilligung; sonst öffnen wir die Einstellungen.
    const ui = uc();
    if (!ui?.isInitialized() || next.maps !== true) return;
    void (async () => {
      const others = (await ui.getServicesBaseInfo()).filter((s) => s.id !== USERCENTRICS_MAPS_SERVICE_ID && s.categorySlug !== "essential");
      if (others.length > 0) return ui.showSecondLayer();
      await ui.acceptAllConsents();
      await syncFromUsercentrics();
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
export const openConsentSettings = () => (USERCENTRICS_ENABLED ? uc()?.showSecondLayer() : window.dispatchEvent(new Event(OPEN_EVENT)));
