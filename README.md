<div align="center">

<br/>

```
███████╗██╗███╗   ██╗ █████╗ ███╗   ██╗ ██████╗██╗███████╗██╗      ██████╗
██╔════╝██║████╗  ██║██╔══██╗████╗  ██║██╔════╝██║██╔════╝██║     ██╔═══██╗
█████╗  ██║██╔██╗ ██║███████║██╔██╗ ██║██║     ██║█████╗  ██║     ██║   ██║
██╔══╝  ██║██║╚██╗██║██╔══██║██║╚██╗██║██║     ██║██╔══╝  ██║     ██║   ██║
██║     ██║██║ ╚████║██║  ██║██║ ╚████║╚██████╗██║███████╗███████╗╚██████╔╝
╚═╝     ╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝╚═╝╚══════╝╚══════╝ ╚═════╝
```

**Sistema web de gestão financeira pessoal com autenticação, CRUD de usuários e dashboard.**

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Java](https://img.shields.io/badge/Java-ED8B00?style=flat-square&logo=openjdk&logoColor=white)](https://www.java.com/)
[![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)](LICENSE)

</div>

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Estrutura de Arquivos](#-estrutura-de-arquivos)
- [Telas](#-telas)
- [API — Integração com Backend](#-api--integração-com-backend)
- [Autenticação](#-autenticação)
- [CRUD de Usuários](#-crud-de-usuários)
- [Como Executar](#-como-executar)
- [Tecnologias](#-tecnologias)

---

## 💡 Sobre o Projeto

O **Financielo** é uma aplicação frontend de gestão financeira pessoal, desenvolvida em HTML, CSS e JavaScript puro. O sistema se comunica com uma API REST em Java (Spring Boot) para operações de usuários, e conta com telas de login, registro e painel administrativo.

---

## ✨ Funcionalidades

### 🔐 Autenticação
| Função | Descrição |
|--------|-----------|
| **Login com credenciais** | Valida e-mail e senha contra credenciais mock; redireciona para o painel em caso de sucesso |
| **Exibição de erro** | Mensagem de feedback inline quando as credenciais são inválidas |
| **Formulário de registro** | Coleta nome, e-mail e senha para criação de conta |
| **Toggle de painéis** | Animação de slide entre os formulários de Login e Cadastro |
| **Links de redes sociais** | Ícones para login social (Google, Facebook, GitHub, LinkedIn) |
| **Recuperação de senha** | Link "Esqueceu sua senha?" disponível no formulário de login |

### 👥 Gestão de Usuários (CRUD)
| Função | Método HTTP | Endpoint |
|--------|-------------|----------|
| **Listar todos os usuários** | `GET` | `/findAll` |
| **Buscar usuário por ID** | `GET` | `/findById?id={id}` |
| **Criar usuário** | `POST` | `/create` |
| **Editar usuário** | `PUT` | `/update` |
| **Excluir usuário** | `DELETE` | `/delete?id={id}` |

### 📊 Dashboard / Painel
| Função | Descrição |
|--------|-----------|
| **Cards de estatísticas** | Exibe total de usuários, quantidade de admins e de usuários comuns |
| **Tabela paginada** | Lista usuários com paginação de 8 registros por página |
| **Busca em tempo real** | Filtro por nome ou e-mail sem recarregar a página |
| **Recarregar dados** | Botão para refazer a chamada `GET /findAll` manualmente |
| **Sidebar de navegação** | Menu lateral com links para as seções do sistema |
| **Topbar com usuário logado** | Exibe nome e avatar com inicial do usuário autenticado |

### 🪟 Modais
| Modal | Descrição |
|-------|-----------|
| **Modal Criar Usuário** | Formulário com campos: nome, sobrenome, e-mail, senha, perfil e CPF |
| **Modal Editar Usuário** | Pré-popula os dados via `GET /findById` para edição |
| **Modal Detalhes** | Exibe todos os campos do usuário em grid de leitura |
| **Modal Confirmar Exclusão** | Solicita confirmação antes de executar o `DELETE` |

### 🎨 UI/UX
| Função | Descrição |
|--------|-----------|
| **Toasts de feedback** | Notificações temporárias de sucesso, erro e informação |
| **Máscara de CPF** | Formatação automática `000.000.000-00` ao digitar |
| **Estado de loading** | Spinner animado durante chamadas à API |
| **Estado vazio** | Mensagem amigável quando não há usuários na listagem |
| **Fallback mock** | Dados fictícios exibidos quando o backend não está disponível |
| **Tema escuro** | Interface completa em dark mode com paleta consistente |

---

## 📁 Estrutura de Arquivos

```
Financielo/
│
├── login.html              # Tela de login e registro
├── index.html              # Dashboard principal
├── usuarios.html           # CRUD de usuários
│
├── Login/
│   ├── script.js           # Lógica de toggle + validação de login
│   └── style.css           # Estilos da tela de autenticação
│
├── Estilos/
│   ├── script.js           # Scripts globais do painel
│   └── style.css           # Estilos globais do painel
│
├── API/
│   ├── ConexaoAPI.js       # Módulo com todas as chamadas REST
│   └── Auth.js             # Mock de autenticação (bypass dev)
│
├── Imagens/
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── apple-touch-icon.png
│   ├── android-chrome-192x192.png
│   ├── android-chrome-512x512.png
│   └── site.webmanifest
│
└── README.md
```

---

## 🖥️ Telas

### Login / Registro — `login.html`
Tela dupla com animação de transição entre os painéis de **Entrar** e **Criar Conta**. Suporte a ícones de login social e validação de credenciais.

### Painel de Usuários — `usuarios.html`
Painel administrativo completo com topbar, sidebar, cards de estatísticas, tabela paginada com busca e todas as operações CRUD via modais.

---

## 🔌 API — Integração com Backend

**Base URL:** `http://localhost:8080/usuario-controller`

Todas as chamadas estão centralizadas em `API/ConexaoAPI.js`:

```js
// Listar todos
GET  /findAll

// Buscar por ID
GET  /findById?id={id}

// Criar
POST /create
Body: { nome, sobrenome, email, senha, perfil, cpf }

// Editar
PUT  /update
Body: { id, nome, sobrenome, email, senha?, perfil, cpf }

// Excluir
DELETE /delete?id={id}
```

> **Fallback:** Quando o backend não está disponível, a tela exibe dados mock automaticamente para permitir desenvolvimento e testes do frontend de forma independente.

---

## 🔐 Autenticação

O projeto utiliza **bypass de autenticação** por mock para desenvolvimento:

```js
// API/Auth.js
const MOCK_USER = {
  id: 1,
  nome: 'Admin Financielo',
  email: 'admin@financielo.com',
  perfil: 'ADMIN',
};
```

**Credenciais de acesso:**

| Campo | Valor |
|-------|-------|
| E-mail | `adm123@gmail.com` |
| Senha | `123456` |

---

## 👤 CRUD de Usuários

### Campos do modelo `Usuario`

| Campo | Tipo | Obrigatório |
|-------|------|-------------|
| `id` | Long | — (gerado pelo backend) |
| `nome` | String | ✅ |
| `sobrenome` | String | ❌ |
| `email` | String | ✅ |
| `senha` | String | ✅ (criação) |
| `perfil` | Enum: `USER` / `ADMIN` | ✅ |
| `cpf` | String | ❌ |
| `dataCadastro` | Date | — (gerado pelo backend) |

---

## 🚀 Como Executar

### Pré-requisitos
- Navegador moderno (Chrome, Firefox, Edge)
- Backend Java rodando em `http://localhost:8080`

### Passos

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/financielo.git

# 2. Acesse a pasta
cd financielo

# 3. Abra a tela de login em um servidor local
# Opção A — VS Code Live Server: clique em "Go Live"
# Opção B — Python:
python -m http.server 5500

# 4. Acesse no navegador
http://localhost:5500/login.html
```

> ⚠️ O projeto **não requer build**. É 100% HTML/CSS/JS puro.  
> ⚠️ Para usar sem o backend, o frontend exibe dados mock automaticamente.

---

## 🛠️ Tecnologias

| Tecnologia | Uso |
|-----------|-----|
| **HTML5** | Estrutura das telas |
| **CSS3** | Estilização, animações, dark theme |
| **JavaScript ES6+** | Lógica, integração com API, manipulação do DOM |
| **Font Awesome 6** | Ícones da interface |
| **Google Fonts** | Tipografia (DM Sans + DM Serif Display) |
| **Fetch API** | Chamadas REST ao backend |
| **Java / Spring Boot** | Backend (externo a este repositório) |

---

<div align="center">

Feito com 💙 — **Financielo**

</div>
