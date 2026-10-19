"use client";

import { useEffect } from "react";
import { syncFromUsercentrics } from "./consent-store";

/** Hält den consent-store mit der Auswahl in Usercentrics synchron. UC_CONSENT feuert beim Laden (gespeicherte Auswahl) und bei jeder Änderung, auch per API. */
export default function UsercentricsBridge() {
  useEffect(() => {
    const sync = () => void syncFromUsercentrics();
    const events = ["UC_CONSENT", "UC_CMP_API_READY", "UC_UI_INITIALIZED", "UC_UI_CMP_EVENT"];
    events.forEach((e) => window.addEventListener(e, sync));
    sync(); // falls Usercentrics schon fertig geladen ist
    return () => events.forEach((e) => window.removeEventListener(e, sync));
  }, []);
  return null;
}
