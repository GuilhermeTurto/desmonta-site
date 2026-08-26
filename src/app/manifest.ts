import type { MetadataRoute } from "next";
import { company } from "@/config/company.config";
export const dynamic = "force-static";
export default function manifest(): MetadataRoute.Manifest { return { name: company.legalName, short_name: company.name, description: company.description, start_url: "/", display: "standalone", background_color: "#06111f", theme_color: "#06111f", icons: [{ src: "/favicon.ico", sizes: "any", type: "image/x-icon" }] }; }
