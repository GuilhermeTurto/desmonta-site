import { WhatsAppIcon } from "@/components/Icons";
import { company, whatsappUrl } from "@/config/company.config";

export function WhatsAppFloat() {
  return (
    <a
      className="whatsapp-float"
      href={whatsappUrl()}
      target="_blank"
      rel="noreferrer"
      aria-label={`Falar com a ${company.name} pelo WhatsApp`}
    >
      <WhatsAppIcon />
      <span>WhatsApp</span>
    </a>
  );
}
