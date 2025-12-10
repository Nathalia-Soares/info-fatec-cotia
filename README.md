<div align="center">

# 📱 Info Fatec Cotia

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![OpenAI](https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white)

Um aplicativo móvel completo com informações sobre a Fatec Cotia e a cidade de Cotia, SP.

[Sobre](#-sobre) • [Features](#-features) • [Tecnologias](#-tecnologias) • [Instalação](#-instalação) • [Uso](#-uso) • [Estrutura](#-estrutura-do-projeto)

</div>

---

## 📖 Sobre

**Info Fatec Cotia** é um aplicativo desenvolvido em React Native com Expo que centraliza informações sobre a Faculdade de Tecnologia de Cotia e a cidade. O app oferece uma interface intuitiva para explorar cursos, cultura, educação, empregos, segurança e inclui um chatbot inteligente powered by OpenAI para responder dúvidas sobre a instituição.

## ✨ Features

### 🎓 Cursos da Fatec
- **Ciência de Dados**
- **Comércio Exterior**
- **Desenvolvimento de Software Multiplataforma**
- **Design de Produto**
- **Gestão da Produção Industrial**
- **Gestão Empresarial**

Cada curso possui uma página dedicada com informações detalhadas.

### 🏙️ Informações sobre Cotia
- **🎭 Cultura**: Eventos culturais, museus e patrimônios históricos
- **📚 Educação**: Escolas, universidades e programas educacionais
- **💼 Empregos**: Vagas e oportunidades profissionais
- **🛡️ Segurança**: Informações sobre segurança pública e serviços de emergência

### 💬 Chat com IA
Assistente virtual especializado em responder perguntas sobre a Fatec Cotia, integrado com a API do ChatGPT.

### ℹ️ Sobre a Desenvolvedora
Página com informações sobre Nathália Soares, desenvolvedora do aplicativo.

## 🛠 Tecnologias

- **[React Native](https://reactnative.dev/)** - Framework para desenvolvimento mobile
- **[Expo](https://expo.dev/)** - Plataforma para desenvolvimento React Native
- **[TypeScript](https://www.typescriptlang.org/)** - Superset JavaScript com tipagem estática
- **[Expo Router](https://expo.github.io/router/)** - Roteamento baseado em sistema de arquivos
- **[OpenAI API](https://platform.openai.com/)** - Integração com ChatGPT
- **React Navigation** - Navegação entre telas

### Principais Dependências

```json
{
  "expo": "~54.0.21",
  "react": "19.1.0",
  "react-native": "0.81.5",
  "expo-router": "~6.0.14",
  "typescript": "~5.9.2"
}
```

## 📦 Instalação

### Pré-requisitos

- **Node.js** (versão 16 ou superior)
- **npm** ou **yarn**
- **Expo Go** app instalado no celular (para testes)

### Passo a passo

1. **Clone o repositório**
```bash
git clone https://github.com/Nathalia-Soares/info-fatec-cotia.git
cd info-fatec-cotia
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
```

3. **Configure as variáveis de ambiente**

Crie um arquivo `.env` na raiz do projeto:
```bash
cp .env.example .env
```

Edite o arquivo `.env` e adicione sua chave da OpenAI:
```env
EXPO_PUBLIC_OPENAI_API_KEY=sk-proj-sua-chave-aqui
```

> 💡 Obtenha sua chave em: https://platform.openai.com/api-keys

4. **Inicie o servidor de desenvolvimento**
```bash
npm run start
# ou
yarn start
```

## 📱 Uso

Após iniciar o servidor Expo:

1. **No celular**: 
   - Abra o app **Expo Go**
   - Escaneie o QR code exibido no terminal

2. **No emulador**:
   - Pressione `a` para Android
   - Pressione `i` para iOS (apenas no macOS)

3. **No navegador**:
   - Pressione `w` para abrir no navegador web

## 📁 Estrutura do Projeto

```
info-fatec-cotia/
├── app/
│   ├── (stack)/              # Páginas de stack
│   │   ├── cultura.tsx
│   │   ├── educacao.tsx
│   │   ├── empregos.tsx
│   │   ├── seguranca.tsx
│   │   └── cursos/
│   │       ├── index.tsx
│   │       ├── ciencia-de-dados.tsx
│   │       ├── comercio-exterior.tsx
│   │       ├── desenvolvimento-de-software-multiplataforma.tsx
│   │       ├── design-de-produto.tsx
│   │       ├── gestao-da-producao-industrial.tsx
│   │       └── gestao-empresarial.tsx
│   ├── (tabs)/               # Tabs principais
│   │   ├── _layout.tsx
│   │   └── index.tsx
│   ├── _layout.tsx           # Layout raiz
│   ├── index.tsx             # Tela inicial
│   ├── login.tsx             # Tela de login
│   ├── cadastro.tsx          # Tela de cadastro
│   ├── perfil.tsx            # Tela de perfil
│   ├── chat.tsx              # Chat com IA
│   └── sobre.tsx             # Sobre a desenvolvedora
├── assets/                   # Imagens e recursos
│   └── profile.jpg
├── .env                      # Variáveis de ambiente (não commitado)
├── .env.example              # Template de variáveis
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

## 🎨 Design

O aplicativo segue uma paleta de cores baseada na identidade visual da Fatec:

- **Vermelho Fatec**: `#B11116`
- **Cinza**: `#60737E`
- **Branco**: `#FFFFFF`
- **Verde (Chat)**: `#25D366`
- **Azul (Sobre)**: `#0a84ff`

### Componentes de UI

- Cards com bordas coloridas e sombras
- Header com gradiente arredondado
- Ícones emoji para identificação visual
- Layout responsivo e adaptável

## 🤖 Chat com IA

O chatbot utiliza a API do ChatGPT (modelo `gpt-3.5-turbo`) com um prompt especializado:

- Responde perguntas sobre cursos, processo seletivo e infraestrutura
- Fornece informações sobre a localização e história da Fatec Cotia
- Interface de chat intuitiva com mensagens do usuário e do bot diferenciadas
- Indicador de digitação durante o processamento

### Limitações
- Requer chave válida da OpenAI API
- Consome créditos por mensagem (~$0.002 por interação)
- Conexão com internet necessária

## 👩‍💻 Desenvolvedora

**Nathália Soares - Eni Essi**

## 📝 Licença

Este projeto foi desenvolvido como trabalho acadêmico para a disciplina de Laboratório de Desenvolvimento Mobile da Fatec Cotia.

---

<div align="center">

**Desenvolvido com ❤️ por [Nathália Soares](https://github.com/Nathalia-Soares)**

⭐ Se este projeto foi útil, considere dar uma estrela!

</div>
