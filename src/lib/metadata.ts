import type { Metadata } from "next";
import { company } from "@/config/company.config";

export function pageMetadata(title: string, description: string, path = ""): Metadata {
  const canonical = new URL(path || "/", company.url);
  return { title, description, alternates: { canonical }, openGraph: { title, description, url: canonical, siteName: company.name, locale: "pt_BR", type: "website" }, twitter: { card: "summary_large_image", title, description } };
}
