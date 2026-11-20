import type { Metadata } from "next";
import { absoluteUrl, company } from "@/config/company.config";

export function pageMetadata(title: string, description: string, path = ""): Metadata {
  const canonical = absoluteUrl(path || "/");
  const socialImage = absoluteUrl("/opengraph-image.png");
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: company.name,
      locale: "pt_BR",
      type: "website",
      images: [
        {
          url: socialImage,
          width: 1734,
          height: 907,
          alt: "DESMONTA — Reclassificação de danos e perícia veicular",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage],
    },
  };
}
