import Link from "next/link";
import { ArrowRight } from "@/components/Icons";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata("Área do Cliente — Em breve", "O futuro portal do cliente DESMONTA está em preparação.", "/area-do-cliente");
export default function ClientAreaPage() { return <section className="coming-soon"><div className="coming-visual" aria-hidden="true"><span>PORTAL / 01</span><i /><i /><i /></div><div><span className="eyebrow">Área do Cliente</span><h1>Portal do Cliente.<br /><em>Em breve.</em></h1><p>Estamos preparando um ambiente seguro para acompanhar solicitações e organizar informações do seu atendimento. Nenhum cadastro ou consulta está disponível nesta fase.</p><Link className="text-link" href="/">Voltar para o site <ArrowRight /></Link></div></section>; }
