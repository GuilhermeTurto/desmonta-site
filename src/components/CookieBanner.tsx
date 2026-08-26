"use client";
import { useSyncExternalStore } from "react";
import Link from "next/link";
export function CookieBanner() {
  const consent = useSyncExternalStore(
    (callback) => { window.addEventListener("cookie-consent-updated", callback); return () => window.removeEventListener("cookie-consent-updated", callback); },
    () => localStorage.getItem("desmonta-cookie-consent"),
    () => "server"
  );
  const visible = consent === null;
  const choose = (value: "necessary" | "analytics") => { localStorage.setItem("desmonta-cookie-consent", value); window.dispatchEvent(new Event("cookie-consent-updated")); };
  if (!visible) return null;
  return <aside className="cookie-banner" aria-label="Preferências de cookies"><div><strong>Sua privacidade importa.</strong><p>Usamos cookies necessários e, com sua permissão, dados anônimos de audiência. <Link href="/politica-de-cookies">Saiba mais</Link>.</p></div><div className="cookie-actions"><button className="button button-ghost" onClick={() => choose("necessary")}>Somente necessários</button><button className="button" onClick={() => choose("analytics")}>Aceitar analytics</button></div></aside>;
}
