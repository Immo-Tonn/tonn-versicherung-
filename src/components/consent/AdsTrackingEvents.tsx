"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

type Win = Window & { dataLayer?: Record<string, unknown>[] };

const push = (data: Record<string, unknown>) => {
  const w = window as Win;
  (w.dataLayer = w.dataLayer || []).push(data);
};

const DANKE_PATH = /^(\/(en|ru))?\/kontakt\/danke\/?$/;
const DANKE_KEY = "tonn-ads-contact-form-submit";
let dankeSent = false; // Rückfall, falls sessionStorage gesperrt ist

/**
 * dataLayer-Ereignisse für Google Ads (nur gerendert, wenn das Tracking eingeschaltet ist, siehe AdsTracking).
 * Es werden keine Formular- oder Kontaktdaten übergeben (kein Name, keine E-Mail, kein Telefon, keine Nachricht).
 */
export default function AdsTrackingEvents() {
  const pathname = usePathname();

  // Danke-Seite: contact_form_submit einmal je Anzeige der Seite. Neuladen auf der Danke-Seite zählt nicht doppelt;
  // verlässt man die Seite, wird die Sperre aufgehoben, damit eine spätere zweite Anfrage wieder zählt.
  useEffect(() => {
    if (!DANKE_PATH.test(pathname ?? "")) {
      dankeSent = false;
      try {
        window.sessionStorage.removeItem(DANKE_KEY);
      } catch {
        /* Speicher gesperrt */
      }
      return;
    }
    try {
      if (window.sessionStorage.getItem(DANKE_KEY)) return;
      window.sessionStorage.setItem(DANKE_KEY, "1");
    } catch {
      if (dankeSent) return;
    }
    dankeSent = true;
    push({ event: "contact_form_submit" });
  }, [pathname]);

  // phone_click bei jedem tel:-Link (Anrufen-Schaltflächen, Header, Kontaktseite, Textlinks); link_url ist die Büro-Nummer aus dem Link
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const href = (e.target as Element | null)?.closest?.("a[href]")?.getAttribute("href")?.trim() ?? "";
      if (href.toLowerCase().startsWith("tel:")) push({ event: "phone_click", link_url: href });
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
