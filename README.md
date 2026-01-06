🧪 API Dog CEO – Testes Automatizados

Cypress

    Este repositório contém a automação de testes de API, utilizando Cypress.
    O objetivo é validar fluxos dos EndPoints da API https://dog.ceo/api.

📌 Tecnologias Utilizadas

    Node.js
    Cypress
    JavaScript
    GitHub Actions (CI/CD)

🧠 Abordagem de Teste

    Testes de API
    Escrita dos cenários em Mocha
    Separação clara entre:


🚀 Pipeline CI/CD (GitHub Actions)

Este projeto possui uma pipeline configurada no GitHub Actions, que executa os testes automaticamente.

▶️ Trigger manual da pipeline

    A pipeline pode ser executada manualmente através de um botão:
    Acesse o repositório no GitHub
    Clique em Actions
    Selecione o workflow Cypress Tests
    Clique em Run workflow
    Confirme a execução
    Isso permite que o avaliador execute os testes sem rodar nada localmente.
<img src="docs/images/pipeline-run.png" alt="Run workflow Cypress" width="1000"/>


✅ Pré-requisitos (Linux e Windows)

Antes de iniciar, é necessário ter instalado:

Node.js Versão 18 ou superior
👉 https://nodejs.org

Navegador Google Chrome ou Edge

🔍 Verificando versões

    node -v
    npm -v
    git --version

▶️ Como rodar o projeto localmente
1️⃣ Clonar o repositório

```bash
git clone https://github.com/wictor23/blogdoagi.git
cd blogdoagi
```

2️⃣ Instalar as dependências

```bash
npm install
```
🧪 Executando os testes
🔹 Abrir o Cypress (modo interativo)

Funciona igual no Linux e no Windows:

```bash
npx cypress open
```
Depois:

Selecione E2E Testing
Escolha o navegador
Clique no cenário desejado

![installing-cli e1693232](https://user-images.githubusercontent.com/1271364/31740846-7bf607f0-b420-11e7-855f-41c996040d31.gif)
