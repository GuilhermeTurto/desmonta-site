import type { Metadata } from "next";
import Link from "next/link";
import { whatsappUrl } from "@/config/company.config";

export const metadata: Metadata = {
  title: "Página não encontrada",
  description: "A página solicitada não foi encontrada no site da DESMONTA.",
};

export default function NotFound() {
  return (
    <section className="not-found-page">
      <div className="container not-found-content">
        <span className="eyebrow">Erro 404</span>
        <p className="not-found-code" aria-hidden="true">404</p>
        <h1>Esta página saiu da rota.</h1>
        <p>
          O endereço pode ter mudado ou não existe. Você pode voltar ao início
          ou falar diretamente com a nossa equipe.
        </p>
        <div className="not-found-actions">
          <Link className="button button-light" href="/">Voltar ao início</Link>
          <a href={whatsappUrl()} target="_blank" rel="noreferrer">
            Falar com a DESMONTA
          </a>
        </div>
      </div>
    </section>
  );
}
