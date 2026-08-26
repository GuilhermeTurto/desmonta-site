# DESMONTA — Site institucional

Fase 1 do site institucional da DESMONTA, construída com Next.js e TypeScript para exportação estática. Não inclui autenticação, banco de dados, consultas veiculares ou integração com SENATRAN.

## Requisitos

- Node.js 20.9 ou superior
- npm

## Configuração local

1. Instale as dependências com `npm install`.
2. Copie `.env.example` para `.env.local`.
3. Preencha somente os dados confirmados pelo cliente.
4. Execute `npm run dev` e acesse `http://localhost:3000`.

Variáveis disponíveis:

- `NEXT_PUBLIC_SITE_URL`: domínio canônico com protocolo.
- `NEXT_PUBLIC_BASE_PATH`: subdiretório de publicação, usado no GitHub Pages; deixe vazio em domínio próprio ou desenvolvimento local.
- `NEXT_PUBLIC_COMPANY_NAME`: nome público da empresa.
- `NEXT_PUBLIC_WHATSAPP`: número com DDI e DDD, somente dígitos ou formato internacional.
- `NEXT_PUBLIC_CONTACT_EMAIL`: e-mail público.
- `NEXT_PUBLIC_GA_ID`: ID do Google Analytics 4; o script só carrega após consentimento.
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`: código de verificação do Search Console.

## Qualidade e build

```bash
npm run lint
npm run build
```

O build gera o diretório `out/`, pronto para hospedagem estática. No Cloudflare Pages, use `npm run build` como comando e `out` como diretório de saída. Variáveis públicas devem ser cadastradas no painel do ambiente de deploy.

## Prévia no GitHub Pages

O workflow `.github/workflows/deploy-pages.yml` publica automaticamente as branches `master` ou `main` em `https://guilhermeturto.github.io/desmonta-site/`.

1. No GitHub, abra `Settings → Pages`.
2. Em `Source`, selecione `GitHub Actions`.
3. Faça commit e push dos arquivos pelo GitHub Desktop.
4. Acompanhe o processo na aba `Actions` do repositório.

O workflow executa lint, gera a exportação estática com o prefixo `/desmonta-site` e publica o diretório `out`.

## Arquitetura

- `src/app`: rotas, metadata, sitemap, robots e manifest.
- `src/components`: componentes reutilizáveis e consentimento/Analytics.
- `src/config/company.config.ts`: fonte única de dados empresariais.
- `src/data/services.ts`: cadastro reutilizável dos serviços.
- `public`: favicon, `llms.txt` e imagens públicas.

A futura área autenticada deve ser implementada como uma fase separada. Se exigir renderização dinâmica ou APIs, reavalie o alvo de deploy e adote um adaptador compatível com Cloudflare Workers; não inclua credenciais em variáveis `NEXT_PUBLIC_*`.

## Antes de publicar

- Confirmar domínio, razão social/nome empresarial, área atendida e horário.
- Substituir ou aprovar os textos de história, missão, visão e valores.
- Validar todos os textos legais com assessoria jurídica e definir canal LGPD/encarregado.
- Confirmar marca/logotipo oficial e autorização de uso da identidade.
- Configurar Search Console, Analytics e política interna de retenção de contatos.
