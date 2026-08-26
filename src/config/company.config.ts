export const company = {
  name: process.env.NEXT_PUBLIC_COMPANY_NAME || "DESMONTA",
  legalName: "DESMONTA — Reclassificação de Danos",
  description:
    "Empresa técnica especializada em reclassificação de danos e perícia de identificação veicular, com atuação integrada de engenheiros habilitados e advogados especializados em direito de trânsito.",
  cnpj: "41.818.421/0001-01",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "empresadesmontareclassificacao@gmail.com",
  phone: "+55 34 9779-0930",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || "+55 34 9779-0930",
  instagram: "https://www.instagram.com/des_monta/",
  address: {
    street: "Rua Major Gote, 1022, sala 304",
    city: "Patos de Minas",
    formatted: "Rua Major Gote, 1022, sala 304, Patos de Minas",
  },
  hours: "Horário de atendimento a confirmar",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://desmonta.example",
} as const;

export function whatsappUrl(message = "Olá! Gostaria de entender como funciona a reclassificação de danos.") {
  const digits = company.whatsapp.replace(/\D/g, "");
  return digits ? `https://wa.me/${digits}?text=${encodeURIComponent(message)}` : `${company.instagram}`;
}
