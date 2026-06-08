# 🚀 Financielo - Front-end

Este repositório contém a interface de usuário do projeto **Financielo**, focada em uma experiência de autenticação moderna, limpa e funcional. A branch atual (`refactor/login-mainpage`) apresenta uma reformulação completa da tela de login e registro, utilizando uma estética profissional voltada para o setor financeiro.

---

## 🎨 Identidade Visual e Paleta de Cores

O design utiliza uma abordagem "Split-Screen" com equilíbrio entre espaços em branco e áreas de destaque em tons de azul petróleo, transmitindo segurança e modernidade.

| Elemento | Hexadecimal | Pré-visualização |
| :--- | :--- | :--- |
| Principal (Dark Teal) | `#004853` | !#004853 |
| Fundo/Texto Claro | `#FFFFFF` | !#FFFFFF |
| Inputs/Placeholders | `#EDEDED` | !#EDEDED |
| Texto de Suporte | `#555555` | !#555555 |

---

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estruturação semântica dos formulários e containers.
- **CSS3** (Custom Properties & Flexbox): Todo o alinhamento e estilização dos componentes foram feitos utilizando Flexbox para garantir centralização perfeita (conforme implementado no componente `.btn-Login`).
- **JavaScript**: Lógica de validação de formulários, transições entre telas de login/registro, controle do menu hambúrguer, abertura/fechamento de modais e atualização dinâmica de dados (como saldo e transações no mockup do celular).
- **Fontes**: Utilização de tipografia sem serifa via Google Fonts:
  - **Syne** (wght@700;800) para títulos e destaques.
  - **DM Sans** (wght@300;400;500;600) para corpo de texto.
- **Ícones Sociais**: Integração com [Font Awesome 6.4.2](https://fontawesome.com/) para Login via Google, Facebook, GitHub e LinkedIn.
- **Design Responsivo**: Layout adaptável para dispositivos móveis e desktop, com menu hambúrguer em telas menores.
- **PWA Pronta**: Inclusão de `manifest.webmanifest` e ícones para instalação como aplicação web progressiva.

---

## 📂 Estrutura de Pastas

```text
Financielo-front/
├── index.html                 # Página inicial (hero, funcionalidades, planos, depoimentos, CTA final e footer)
├── login.html                 # Página de autenticação (login e registro com opções sociais)
├── README.md                  # Este arquivo
├── /Estilos/
│   ├── style.css              # Estilos principais para index.html (layout, cores, componentes, animações)
│   └── script.js              # JavaScript para index.html (menu móvel, modal de transação, atualização de saldo)
├── /Login/
│   ├── style.css              # Estilos específicos para login.html (formulários, toggle, botões sociais, animações)
│   └── script.js              # JavaScript para login.html (validação de formulário, troca entre login/registro)
└── /Imagens/
    ├── favicon.ico            # Ícone da aba do navegador
    ├── android-chrome-192x192.png
    ├── android-chrome-512x512.png
    ├── apple-touch-icon.png
    ├── favicon-16x16.png
    ├── favicon-32x32.png
    └── site.webmanifest       # Manifest para PWA
```

---

## 🚀 Como Executar Localmente

1. Clone este repositório:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd Financielo-front
   ```
3. Abra o arquivo `index.html` no seu navegador para visualizar a página inicial.
4. Para acessar a tela de autenticação, abra `login.html` ou clique nos botões "Começar grátis" / "Entrar" presentes na página inicial.

> **Nota**: O projeto utiliza apenas tecnologias frontend estáticas, não requerendo servidor ou build steps. Basta abrir os arquivos HTML em qualquer navegador moderno.

---

## 📱 Responsividade

A interface foi desenvolvida com abordagem mobile-first, garantindo uma experiência adequada em:
- Telas móveis (≥320px de largura)
- Tablets
- Desktops

Elementos como o menu de navegação se adaptam para um ícone hambúrguer em telas menores, e o layout das seções (funcionalidades, planos, depoimentos) ajusta o número de colunas conforme o espaço disponível.

---

## 🎯 Próximos Passos (Melhorias Futuras)

- Integração com uma API backend para autenticação real e persistência de dados.
- Implementação de armazenamento local (localStorage) para simular estado de usuário entre sessões.
- Adicionar validação de formulários mais robusta (ex: regex para e-mail, força de senha).
- Incluir animações de transição entre páginas usando CSS ou pequenas bibliotecas como [Barba.js](https://barba.js.org/).
- Testar acessibilidade com ferramentas como Lighthouse e melhorar contraste/foco onde necessário.
- Internacionalização (i18n) para suportar múltiplos idiomas.

---

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se livre para utilizá-lo, modificá-lo e distribuí-lo conforme os termos da licença.

---

*Desenvolvido com ❤️ por Marcello Maciel para o projeto acadêmico de Projeto WEB.*