import { LegalPage } from "@/components/LegalPage";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata("Política de Cookies", "Saiba como a DESMONTA utiliza cookies neste site.", "/politica-de-cookies");
const sections = [
  { title: "O que são cookies", content: <p>Cookies são pequenos arquivos armazenados no dispositivo para permitir funções essenciais e, quando autorizados, compreender a audiência do site.</p> },
  { title: "Cookies necessários", content: <p>Usamos armazenamento local para registrar sua escolha de privacidade. Esse recurso é necessário para não solicitar a mesma preferência a cada página.</p> },
  { title: "Cookies de análise", content: <p>O Google Analytics somente será carregado se houver um identificador configurado e se você aceitar essa categoria. Ele ajuda a compreender, de forma agregada, como o site é utilizado.</p> },
  { title: "Como controlar", content: <p>Você pode recusar cookies de análise no aviso exibido pelo site e também apagar dados armazenados nas configurações do navegador.</p> },
  { title: "Serviços de terceiros", content: <p>Ao acessar links externos, como Instagram ou WhatsApp, as políticas de cookies dessas plataformas passam a ser aplicáveis.</p> },
  { title: "Alterações e contato", content: <p>Esta política poderá ser atualizada. Dúvidas podem ser enviadas pelos canais indicados na página de contato.</p> },
];
export default function CookiesPage() { return <LegalPage eyebrow="Privacidade" title="Política de Cookies" intro="Transparência sobre as tecnologias utilizadas durante sua navegação." sections={sections} />; }
