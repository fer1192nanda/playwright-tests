# 🎭 Playwright Automation Project

## 📌 Sobre o projeto

Este projeto tem como objetivo automatizar cenários de teste end-to-end utilizando o **Playwright**, simulando ações reais de um usuário em uma aplicação web.

Os testes foram desenvolvidos com foco em boas práticas de QA, garantindo validações confiáveis e código organizado.

---

## 🚀 Tecnologias utilizadas

* Node.js
* Playwright
* JavaScript
* TypeScript

---

## 📂 Estrutura do projeto

```
📁 tests
 ┣ 📄 login.spec.js

 ┣ 📄 LoginPage.js


```

---

## ✅ Cenários automatizados

* ✔ Login com usuário válido

---

## ▶️ Como executar o projeto

### 1. Clonar o repositório

```
git clone https://github.com/seu-usuario/seu-repositorio.git
```

### 2. Instalar dependências

```
npm install
```

### 3. Executar os testes

```
npx playwright test
```

### 4. Executar com navegador visível

```
npx playwright test --headed
```

---

## 📊 Relatório de testes

Para visualizar o relatório após a execução:

```
npx playwright show-report
```

---

## 💡 Boas práticas aplicadas

* Uso de seletores robustos (`getByRole`)
* Validações com `expect`
* Estrutura preparada para Page Object Model
* Evita uso de esperas fixas (`waitForTimeout`)

---

## 🔥 Próximos passos

* Implementar Page Object Model
* Adicionar mais cenários de teste
* Integração com CI/CD
* Melhorar cobertura de testes

---

## 👩‍💻 Autor

Projeto desenvolvido por **Fernanda** 💙
