import { LegalPage } from "@/components/LegalPage";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata("Termos de Uso", "Termos de uso do site institucional da DESMONTA.", "/termos-de-uso");
const sections = [
  { title: "Finalidade do site", content: <p>Este site apresenta informações institucionais e os serviços da DESMONTA. Seu conteúdo tem caráter informativo e não substitui uma avaliação técnica individual.</p> },
  { title: "Uso adequado", content: <p>O visitante deve utilizar o site de forma lícita, sem tentar comprometer sua segurança, funcionamento ou disponibilidade.</p> },
  { title: "Informações e resultados", content: <p>A possibilidade de reclassificação depende de análise técnica, documentação e decisão dos órgãos competentes. Nenhum conteúdo deste site constitui promessa ou garantia de resultado.</p> },
  { title: "Propriedade intelectual", content: <p>Textos, identidade visual e demais conteúdos pertencem aos seus respectivos titulares e não devem ser reproduzidos sem autorização.</p> },
  { title: "Links externos", content: <p>Links para plataformas de terceiros, como WhatsApp e Instagram, são regidos por seus próprios termos e políticas.</p> },
  { title: "Alterações", content: <p>Estes termos poderão ser atualizados para refletir mudanças no site, nos serviços ou em requisitos legais.</p> },
  { title: "Contato", content: <p>Dúvidas sobre estes termos poderão ser encaminhadas pelos canais disponíveis na página de contato.</p> },
];
export default function TermsPage() { return <LegalPage eyebrow="Institucional" title="Termos de Uso" intro="Condições gerais para navegação e uso do site institucional da DESMONTA." sections={sections} />; }
