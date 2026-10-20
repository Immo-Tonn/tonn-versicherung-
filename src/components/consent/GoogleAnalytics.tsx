"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { useConsent } from "./consent-store";
import { trackEvent } from "./track";

const ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

type Win = Window & { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void } & Record<string, unknown>;

/** Nur Ursprung + Pfad, ohne Query/Hash: Parameter und Fragmente könnten Personenbezug enthalten und werden nie an Google gesendet. */
const cleanUrl = (u: string) => {
  if (!u) return "";
  try {
    const x = new URL(u, window.location.origin);
    return `${x.origin}${x.pathname}`;
  } catch {
    return "";
  }
};

/** Alle _ga-Cookies auf Host und übergeordneter Domain löschen. */
function removeGaCookies() {
  const host = window.location.hostname;
  const parts = host.split(".");
  const parent = parts.length > 2 ? parts.slice(-2).join(".") : host;
  document.cookie.split(";").forEach((c) => {
    const name = c.split("=")[0].trim();
    if (name !== "_ga" && !name.startsWith("_ga_")) return;
    for (const domain of [undefined, host, `.${host}`, `.${parent}`]) {
      document.cookie = `${name}=; Max-Age=0; path=/${domain ? `; domain=${domain}` : ""}`;
    }
  });
}

/**
 * Google Analytics 4 im "Basic Consent Mode": Solange der Dienst "Google Analytics" nicht freigegeben ist (erster Besuch, Ablehnung,
 * Widerruf), wird gtag.js gar nicht geladen – es gibt keine Anfragen an Google, auch keine cookielosen Pings.
 * Nach Einwilligung wird einmalig geladen; page_view senden wir selbst (genau einmal je Pfadwechsel, ohne Query/Hash).
 * Kein Google Signals, keine Werbe-Personalisierung, keine User-ID, keine Ereignisse mit Formulardaten.
 */
export default function GoogleAnalytics() {
  const consent = useConsent();
  const pathname = usePathname();
  const on = Boolean(ID && consent?.analytics);
  const loaded = useRef(false);
  const lastPath = useRef<string | null>(null);

  useEffect(() => {
    if (!ID) return;
    const w = window as unknown as Win;
    if (!on) {
      if (consent === undefined) return; // Zustand noch unbekannt (Hydration)
      // Keine Einwilligung / Widerruf: Messung abschalten (falls schon geladen) und Cookies entfernen
      w[`ga-disable-${ID}`] = true;
      removeGaCookies();
      lastPath.current = null;
      return;
    }
    w[`ga-disable-${ID}`] = false;
    if (!loaded.current) {
      loaded.current = true;
      w.dataLayer = w.dataLayer || [];
      w.gtag = function () {
        // gtag erwartet das arguments-Objekt, kein Array
        // eslint-disable-next-line prefer-rest-params
        (w.dataLayer as unknown[]).push(arguments);
      };
      // Der Dienst wird erst nach Einwilligung geladen: Analytics-Speicher erlaubt, alles Werbliche bleibt verweigert.
      w.gtag("consent", "default", { analytics_storage: "granted", ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied" });
      w.gtag("js", new Date());
      w.gtag("config", ID, {
        send_page_view: false,
        allow_google_signals: false,
        allow_ad_personalization_signals: false,
        cookie_flags: "SameSite=Lax;Secure",
      });
      const s = document.createElement("script");
      s.async = true;
      s.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(ID)}`;
      document.head.appendChild(s);
    }
    const path = pathname ?? window.location.pathname;
    if (lastPath.current === path) return; // kein doppelter page_view
    // Kurz warten, bis Next.js den Seitentitel der neuen Seite gesetzt hat; ein erneuter Pfadwechsel verwirft den wartenden Aufruf.
    const t = window.setTimeout(() => {
      const referrer = lastPath.current ? `${window.location.origin}${lastPath.current}` : cleanUrl(document.referrer);
      lastPath.current = path;
      w.gtag?.("event", "page_view", {
        page_location: `${window.location.origin}${path}`,
        page_title: document.title,
        ...(referrer ? { page_referrer: referrer } : {}),
      });
    }, 250);
    return () => window.clearTimeout(t);
  }, [on, consent, pathname]);

  // Klicks auf Telefon- und E-Mail-Links (nur mit Einwilligung); der Linkinhalt selbst wird nie übertragen.
  useEffect(() => {
    if (!on) return;
    const onClick = (e: MouseEvent) => {
      const href = (e.target as Element | null)?.closest?.("a[href]")?.getAttribute("href")?.trim().toLowerCase() ?? "";
      if (href.startsWith("tel:")) trackEvent("click_phone");
      else if (href.startsWith("mailto:")) trackEvent("click_email");
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [on]);

  return null;
}
