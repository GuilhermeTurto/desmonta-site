import type { Metadata } from "next";
import { absoluteUrl, company } from "@/config/company.config";

export function pageMetadata(title: string, description: string, path = ""): Metadata {
  const canonical = absoluteUrl(path || "/");
  return { title, description, alternates: { canonical }, openGraph: { title, description, url: canonical, siteName: company.name, locale: "pt_BR", type: "website" }, twitter: { card: "summary_large_image", title, description } };
}
