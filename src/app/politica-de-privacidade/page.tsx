import { LegalPage } from "@/components/LegalPage";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata("Política de Privacidade", "Modelo inicial de política de privacidade e LGPD da DESMONTA.", "/politica-de-privacidade");
const sections = [
  { title: "Escopo", content: <p>Esta política descreve as práticas desta versão institucional do site. Nesta fase, não há cadastro de usuários, área autenticada, consulta veicular ou integração com a SENATRAN.</p> },
  { title: "Dados que podem ser tratados", content: <><p>O site não coleta dados por formulário próprio. Se você iniciar contato por e-mail, WhatsApp ou Instagram, os dados que decidir fornecer serão tratados nessas plataformas para responder à solicitação.</p><p>Dados técnicos agregados de navegação poderão ser coletados pelo Google Analytics somente após consentimento e quando a integração estiver configurada.</p></> },
  { title: "Finalidades", content: <p>As informações voluntariamente enviadas serão utilizadas para responder ao contato, prestar orientação inicial e manter a comunicação solicitada. Dados de audiência, quando autorizados, servem para medir e melhorar o site.</p> },
  { title: "Cookies", content: <p>Cookies necessários registram sua preferência. Cookies analíticos são opcionais. Consulte a Política de Cookies para mais detalhes.</p> },
  { title: "Armazenamento e retenção", content: <p>Os prazos e meios de armazenamento dos canais de contato ainda deverão ser definidos na versão jurídica final. Dados não devem ser mantidos além do necessário para a finalidade informada ou obrigação legal aplicável.</p> },
  { title: "Compartilhamento", content: <p>Não comercializamos dados pessoais. Informações poderão transitar pelos provedores dos canais escolhidos pelo titular e por fornecedores técnicos necessários, sujeitos às respectivas políticas e medidas de segurança.</p> },
  { title: "Segurança", content: <p>Adotamos medidas técnicas e organizacionais compatíveis com esta fase institucional. Nenhuma transmissão é absolutamente infalível, e as medidas serão revistas conforme a plataforma evoluir.</p> },
  { title: "Direitos do titular", content: <p>Nos termos da LGPD, o titular pode solicitar informações, confirmação, acesso, correção, eliminação quando cabível, oposição e revogação do consentimento pelos canais oficiais.</p> },
  { title: "Contato e encarregado", content: <p>O canal formal de privacidade e a identificação do encarregado deverão ser informados pelo cliente antes da publicação definitiva. Até lá, utilize a página de contato.</p> },
  { title: "Alterações", content: <p>A política poderá ser atualizada quando houver novos recursos, tratamentos de dados ou mudanças legais. A data da versão será mantida no topo desta página.</p> },
];
export default function PrivacyPage() { return <LegalPage eyebrow="Privacidade e LGPD" title="Política de Privacidade" intro="Como as informações são tratadas nesta fase institucional do site." sections={sections} />; }
