import type { MetadataRoute } from "next";
import { absoluteUrl, company } from "@/config/company.config";
export const dynamic = "force-static";
export default function robots(): MetadataRoute.Robots { return { rules: { userAgent: "*", allow: "/" }, sitemap: absoluteUrl("/sitemap.xml"), host: company.url }; }
