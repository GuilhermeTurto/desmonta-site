import type { Metadata, Viewport } from "next";
import { Analytics } from "@/components/Analytics";
import { CookieBanner } from "@/components/CookieBanner";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { company } from "@/config/company.config";
import "./globals.css";

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#06111f" };
export const metadata: Metadata = {
  metadataBase: new URL(company.url),
  title: { default: `${company.name} | Reclassificação de danos`, template: `%s | ${company.name}` },
  description: company.description,
  applicationName: company.name,
  authors: [{ name: company.name }],
  creator: company.name,
  manifest: "/manifest.webmanifest",
  icons: { icon: "/favicon.ico" },
  verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION },
};
const organization = { "@context": "https://schema.org", "@type": "ProfessionalService", name: company.name, url: company.url, description: company.description, taxID: company.cnpj, email: company.email, telephone: company.phone, sameAs: [company.instagram], address: { "@type": "PostalAddress", streetAddress: company.address.street, addressLocality: company.address.city } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="pt-BR"><body><a className="skip-link" href="#conteudo">Pular para o conteúdo</a><Header /><main id="conteudo">{children}</main><Footer /><CookieBanner /><Analytics /><JsonLd data={organization} /></body></html>; }
