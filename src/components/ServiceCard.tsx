import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/data/services";
import { sitePath } from "@/config/company.config";
import { ArrowUpRight } from "./Icons";
export function ServiceCard({ service }: { service: Service }) { return <article className="service-card"><div className="service-image"><Image src={sitePath(service.image)} alt={service.imageAlt} fill sizes="(max-width: 760px) 100vw, 33vw" /></div><div className="service-card-body"><span className="service-number">{service.number}</span><h3>{service.title}</h3><p>{service.shortDescription}</p><Link href={`/servicos#${service.slug}`}>Ver detalhes <ArrowUpRight /></Link></div></article>; }
