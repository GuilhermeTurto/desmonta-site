import Link from "next/link";
import type { Service } from "@/data/services";
import { ArrowUpRight } from "./Icons";
export function ServiceCard({ service }: { service: Service }) { return <article className="service-card"><span className="service-number">{service.number}</span><div><h3>{service.title}</h3><p>{service.shortDescription}</p><Link href={`/servicos#${service.slug}`}>Ver detalhes <ArrowUpRight /></Link></div></article>; }
