# Svelte Alura Cook

[![Live App](https://img.shields.io/badge/Live%20App-Vercel-black?logo=vercel)](https://svelte-alura-cook.vercel.app)
![Svelte](https://img.shields.io/badge/Svelte-Frontend-orange?logo=svelte)
![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue?logo=typescript)
![Node](https://img.shields.io/badge/Node.js-LTS-green?logo=node.js)
![License](https://img.shields.io/badge/license-MIT-lightgrey)

Aplicação web desenvolvida com **SvelteKit** baseada no projeto **Alura Cook**.
O app permite selecionar ingredientes disponíveis e encontrar receitas que podem ser preparadas com eles.

## Preview

![Application Preview](docs/preview.png)

## Funcionalidades

- Seleção e remoção de ingredientes
- Lista compartilhada entre páginas com Svelte store
- Busca de receitas compatíveis com todos os ingredientes escolhidos
- Bloqueio da busca quando a lista está vazia
- Interface responsiva construída com componentes Svelte

## Tecnologias

- Svelte 5
- SvelteKit 2
- Vite 8
- TypeScript
- CSS
- Node.js LTS

## Como executar

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

A aplicação ficará disponível em `http://localhost:5173`.

## Scripts

```bash
npm run check
npm run build
npm run preview
```

## Estrutura

```text
src
├── lib
│   ├── components
│   ├── interfaces
│   ├── json
│   └── stores
└── routes
```

## Autor

Luciano Brum

- GitHub: https://github.com/Lubrum
- Website: https://lubrum.github.io

## Licença

Este projeto está licenciado sob a MIT License.
