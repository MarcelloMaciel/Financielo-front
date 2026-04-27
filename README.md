# 🚀 Financielo - Front-end

Este repositório contém a interface de usuário do projeto Financielo, focada em uma experiência de autenticação moderna, limpa e funcional. A branch atual (refactor/login-mainpage) apresenta uma reformulação completa da tela de login e registro, utilizando uma estética profissional voltada para o setor financeiro.

🎨 Identidade Visual e Paleta de Cores
O design utiliza uma abordagem "Split-Screen" com um equilíbrio entre espaços em branco e áreas de destaque em tons de azul petróleo, transmitindo segurança e modernidade.

| Elemento | Hexadecimal | Pré-visualização |
| :--- | :--- | :--- |
| Principal (Dark Teal) | #004853 | !#004853 |
| Fundo/Texto Claro | #FFFFFF | !#FFFFFF |
| Inputs/Placeholders | #EDEDED | !#EDEDED |
| Texto de Suporte | #555555 | !#555555 |

🛠️ Tecnologias Utilizadas:

HTML5: Estruturação semântica dos formulários e containers.

CSS3 (Custom Properties & Flexbox): Todo o alinhamento e estilização dos componentes foram feitos utilizando Flexbox para garantir centralização perfeita (conforme implementado no componente .btn-Login).

Fontes: Utilização de tipografia sem serifa para melhor legibilidade.

Ícones Sociais: Integração com bibliotecas de ícones para Login via Google, Facebook, GitHub e LinkedIn.

📂 Estrutura de Pastas
```text
Financielo-front/
├── assets/             # Imagens, logos e ícones sociais
├── css/                # Arquivos de estilização
│   └── style.css       # Estilos principais (Refatorados para a nova UI)
├── js/                 # Lógica de validação e transições
└── index.html          # Estrutura principal da página de login
