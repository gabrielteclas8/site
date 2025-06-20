# Gabriel Rodrigues Oficial

Site oficial do músico, produtor e compositor Gabriel Rodrigues.

## 🚀 Deploy no Vercel

### Comandos para Deploy

1. **Instalar dependências:**
\`\`\`bash
npm install
\`\`\`

2. **Build local (teste):**
\`\`\`bash
npm run build
\`\`\`

3. **Deploy no Vercel:**
\`\`\`bash
vercel --prod
\`\`\`

### Configurações Importantes

- **Domínio:** gabrielrodriguesoficial.com.br
- **Framework:** Next.js 14
- **Node.js:** 18.x
- **Região:** São Paulo (gru1)

### Estrutura do Projeto

\`\`\`
gabriel-rodrigues-oficial/
├── app/
│   ├── page.tsx (Gabriel Rodrigues - Página Principal)
│   ├── bless-records/
│   │   └── page.tsx (Bless Records - Subpágina)
│   ├── layout.tsx
│   ├── globals.css
│   ├── loading.tsx
│   ├── error.tsx
│   └── not-found.tsx
├── public/
│   ├── gabriel-photos/
│   ├── albums/
│   └── logo/
├── components/ui/
├── package.json
├── next.config.js
├── vercel.json
└── tailwind.config.ts
\`\`\`

### Tecnologias

- **Next.js 14** - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **Framer Motion** - Animações
- **Vercel** - Hospedagem

### Funcionalidades

✅ **Página Principal - Gabriel Rodrigues:**
- Hero section com fotos profissionais
- Biografia completa
- Seção dedicada ao álbum "No Reino de Deus"
- Discografia com álbuns
- Galeria fotográfica
- Seção de contato com redes sociais clicáveis

✅ **Subpágina - Bless Records:**
- Informações do estúdio
- Serviços oferecidos
- Portfólio de trabalhos
- Contato do estúdio

✅ **Recursos Técnicos:**
- 100% responsivo (mobile-first)
- Animações suaves com Framer Motion
- Efeitos 3D nos cards
- Menu lateral overlay
- Scroll suave entre seções
- Otimizado para SEO
- Logo da Família Rodrigues integrada

### Comandos de Desenvolvimento

\`\`\`bash
# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Iniciar produção
npm run start

# Verificar erros
npm run lint
\`\`\`

### Configuração de DNS

Para o domínio gabrielrodriguesoficial.com.br:

\`\`\`
Tipo: A
Nome: @
Valor: 76.76.19.61

Tipo: CNAME
Nome: www
Valor: cname.vercel-dns.com
\`\`\`

### Troubleshooting

Se houver erros de build:

1. Limpar cache: `rm -rf .next node_modules package-lock.json`
2. Reinstalar: `npm install`
3. Build novamente: `npm run build`

### Suporte

Para dúvidas ou suporte técnico, entre em contato através do repositório GitHub.
