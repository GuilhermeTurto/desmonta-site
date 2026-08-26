import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "@/components/Icons";
import { JsonLd } from "@/components/JsonLd";
import { SectionTitle } from "@/components/SectionTitle";
import { ServiceCard } from "@/components/ServiceCard";
import { company, whatsappUrl } from "@/config/company.config";
import { services } from "@/data/services";

const steps = [
  { number: "01", title: "Entendemos o cenário", text: "Você compartilha as informações iniciais e os documentos disponíveis para uma primeira orientação." },
  { number: "02", title: "Avaliamos tecnicamente", text: "O caso é analisado com critério para identificar o enquadramento e a viabilidade técnica." },
  { number: "03", title: "Conduzimos o processo", text: "Você recebe orientação clara sobre documentos, etapas e próximos passos até a conclusão." },
];
const faqs = [
  ["Todo veículo de média monta pode ser reclassificado?", "Não. A possibilidade depende da condição do veículo, da documentação e de fundamento técnico. Cada caso precisa ser avaliado individualmente."],
  ["A DESMONTA realiza reparos no veículo?", "Nosso foco é a assessoria técnica e documental para reclassificação de danos. Serviços de reparação não fazem parte desta apresentação institucional."],
  ["Quais documentos são necessários?", "A documentação varia conforme o caso. No primeiro contato, analisamos o cenário e informamos os itens necessários para iniciar a avaliação."],
  ["Existe garantia de reclassificação?", "Não é correto prometer resultado antes da análise. O processo depende de critérios técnicos e das decisões dos órgãos competentes."],
];

export default function Home() {
  const serviceSchema = services.map((service) => ({ "@context": "https://schema.org", "@type": "Service", name: service.title, description: service.shortDescription, provider: { "@type": "ProfessionalService", name: company.name } }));
  return <>
    <section className="hero"><Image className="hero-image" src="/images/hero-inspecao-veicular.png" alt="Visualização técnica de um veículo com comparação entre áreas danificadas e restauradas" fill priority sizes="100vw" /><div className="hero-overlay" /><div className="container hero-content"><span className="hero-kicker"><i /> Engenharia e direito de trânsito</span><h1>Seu veículo merece uma <em>segunda análise.</em></h1><p>Reclassificação de danos e perícia de identificação veicular com atuação técnica, jurídica e orientação transparente.</p><div className="hero-actions"><a className="button" href={whatsappUrl()} target="_blank" rel="noreferrer">Falar com especialista <ArrowUpRight /></a><Link className="text-link" href="/servicos">Conhecer os serviços <ArrowRight /></Link></div><div className="hero-proof"><div><strong>Engenharia</strong><span>Profissionais habilitados</span></div><div><strong>Direito</strong><span>Especialistas em trânsito</span></div><div><strong>Análise</strong><span>Fundamentação técnica</span></div></div></div><div className="hero-index" aria-hidden="true">01 <span /> 04</div></section>

    <section className="trust-strip" aria-label="Compromissos da DESMONTA"><div className="container"><span>Engenharia habilitada</span><i /><span>Direito de trânsito</span><i /><span>Orientação especializada</span><i /><span>Segurança documental</span></div></section>

    <section className="section about" id="sobre"><div className="container about-grid"><div><SectionTitle eyebrow="Sobre a DESMONTA" title="Conhecimento técnico e jurídico no mesmo caminho." /><div className="about-stat"><strong>02</strong><span>áreas de expertise,<br />uma assessoria completa</span></div></div><div className="about-copy"><p className="lead">Somos uma empresa técnica especializada em reclassificação de danos em veículos acidentados — a reclassificação de monta.</p><p>Unimos a expertise de engenheiros habilitados ao conhecimento de advogados especializados em direito de trânsito para interpretar e aplicar corretamente as normas legais, com clareza em cada etapa.</p><div className="values"><div><span>Missão</span><p>Oferecer orientação técnica e jurídica completa para tornar o processo mais seguro e compreensível.</p></div><div><span>Visão</span><p>Ser referência em reclassificação de danos e perícia de identificação veicular.</p></div><div><span>Valores</span><p>Ética, clareza, responsabilidade técnica e respeito a cada cliente.</p></div></div></div></div></section>

    <section className="section services-section"><div className="container"><SectionTitle eyebrow="O que fazemos" title="Uma assessoria completa para cada caso." description="Da análise de engenharia à estratégia jurídica, atuamos para dar fundamento, segurança e direção ao processo." light /><div className="services-grid">{services.map((service) => <ServiceCard key={service.slug} service={service} />)}</div><div className="services-bottom"><span>Não sabe por onde começar?</span><a href={whatsappUrl()} target="_blank" rel="noreferrer">Conte seu caso para nossa equipe <ArrowUpRight /></a></div></div></section>

    <section className="section process" id="como-funciona"><div className="container"><SectionTitle eyebrow="Como funciona" title="Um caminho simples para uma questão técnica." description="Você entende cada etapa antes de avançar." /><div className="process-grid">{steps.map((step, index) => <article className="process-step" key={step.number}><div className="step-top"><span>{step.number}</span>{index < steps.length - 1 && <i />}</div><h3>{step.title}</h3><p>{step.text}</p></article>)}</div><div className="process-note"><Check /><p><strong>Responsabilidade em primeiro lugar.</strong> A reclassificação depende de análise e fundamento técnico. A DESMONTA não promete resultados antes de avaliar o caso.</p></div></div></section>

    <section className="section difference"><div className="container difference-grid"><div className="difference-panel"><span className="tech-label">DESMONTA / ANÁLISE TÉCNICA</span><div className="scan-car" aria-hidden="true"><svg viewBox="0 0 520 240"><path d="M45 154c8-31 28-46 58-48l47-49h186c35 1 56 18 82 48l54 17 15 52H35Z"/><circle cx="130" cy="174" r="42"/><circle cx="396" cy="174" r="42"/><path d="m164 60-26 46h232l-55-46M260 60v46M62 135h388M94 116l34 17m298-17-37 17"/></svg></div><div className="measure measure-a">ANÁLISE 360°</div><div className="measure measure-b">EVIDÊNCIA TÉCNICA</div></div><div><SectionTitle eyebrow="Nosso diferencial" title="Engenharia para fundamentar. Direito para conduzir." light /><ul className="difference-list"><li><span>01</span><div><h3>Engenheiros habilitados</h3><p>Conhecimento mecânico aplicado à análise de veículos acidentados.</p></div></li><li><span>02</span><div><h3>Direito de trânsito especializado</h3><p>Interpretação das normas e suporte em recursos administrativos e judiciais.</p></div></li><li><span>03</span><div><h3>Assessoria integrada</h3><p>Visão técnica e jurídica coordenada para conduzir cada caso com responsabilidade.</p></div></li></ul></div></div></section>

    <section className="section faq"><div className="container faq-grid"><SectionTitle eyebrow="Dúvidas frequentes" title="Informação também faz parte do processo." /><div>{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></div></section>
    <section className="final-cta"><div className="container"><span className="eyebrow">Fale com a DESMONTA</span><h2>Tem um veículo classificado<br />como média ou grande monta?</h2><p>Conte o seu caso. Nossa equipe faz uma orientação inicial e explica os próximos passos com transparência.</p><a className="button button-light" href={whatsappUrl()} target="_blank" rel="noreferrer">Iniciar uma conversa <ArrowUpRight /></a></div></section>
    <JsonLd data={serviceSchema} />
  </>;
}
