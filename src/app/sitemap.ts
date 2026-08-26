import type { MetadataRoute } from "next";
import { company } from "@/config/company.config";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap { return ["", "/servicos", "/contato", "/area-do-cliente", "/termos-de-uso", "/politica-de-privacidade", "/politica-de-cookies"].map((path) => ({ url: new URL(path || "/", company.url).toString(), lastModified: new Date(), changeFrequency: path === "" ? "weekly" : "monthly", priority: path === "" ? 1 : path === "/servicos" ? 0.8 : 0.5 })); }
