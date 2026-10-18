"use client";

import { useEffect } from "react";
import { syncFromUsercentrics } from "./consent-store";

/** Hält den consent-store mit der Auswahl in Usercentrics synchron (Start, Annahme/Ablehnung/Einstellungen, Widerruf). */
export default function UsercentricsBridge() {
  useEffect(() => {
    const sync = () => void syncFromUsercentrics();
    const events = ["UC_UI_INITIALIZED", "UC_UI_CMP_EVENT", "UC_UI_VIEW_CHANGED", "UC_CONSENT"];
    events.forEach((e) => window.addEventListener(e, sync));
    sync(); // falls Usercentrics schon fertig geladen ist
    return () => events.forEach((e) => window.removeEventListener(e, sync));
  }, []);
  return null;
}
