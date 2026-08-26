"use client";
import Script from "next/script";
import { useSyncExternalStore } from "react";
export function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const allowed = useSyncExternalStore(
    (callback) => { window.addEventListener("cookie-consent-updated", callback); return () => window.removeEventListener("cookie-consent-updated", callback); },
    () => localStorage.getItem("desmonta-cookie-consent") === "analytics",
    () => false
  );
  if (!gaId || !allowed) return null;
  return <><Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" /><Script id="google-analytics" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${gaId}',{anonymize_ip:true});`}</Script></>;
}
