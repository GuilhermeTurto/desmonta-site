import type { MetadataRoute } from "next";
import { company } from "@/config/company.config";
export const dynamic = "force-static";
export default function robots(): MetadataRoute.Robots { return { rules: { userAgent: "*", allow: "/" }, sitemap: new URL("/sitemap.xml", company.url).toString(), host: company.url }; }
