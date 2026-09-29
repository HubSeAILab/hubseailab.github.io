<div align="center">

![HubSE AI Lab banner](https://capsule-render.vercel.app/api?type=waving&color=0:0E7490,100:0B1220&height=220&section=header&text=HubSE%20AI%20Lab&fontSize=64&fontColor=ffffff&animation=fadeIn&fontAlignY=38&desc=Site%20oficial%20do%20laborat%C3%B3rio&descAlignY=60&descSize=18)

![HTML](https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?style=for-the-badge&logo=githubpages&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white)

![Stars](https://img.shields.io/github/stars/HubSeAILab/hubseailab.github.io?style=flat-square&color=FFCA28&logo=github)
![Forks](https://img.shields.io/github/forks/HubSeAILab/hubseailab.github.io?style=flat-square&color=0E7490&logo=github)
![Issues](https://img.shields.io/github/issues/HubSeAILab/hubseailab.github.io?style=flat-square&color=E53935)
![Último commit](https://img.shields.io/github/last-commit/HubSeAILab/hubseailab.github.io?style=flat-square&color=43A047)

[🌐 Site](#site) • [✨ Funcionalidades](#funcionalidades) • [🏗️ Arquitetura](#arquitetura) • [🚀 Como rodar](#como-rodar) • [📦 Deploy](#deploy) • [🤝 Contribuindo](#contribuindo)

</div>

---

## Sobre

[#sobre](#sobre)

Este repositório contém o **site oficial do HubSE AI Lab**, publicado via **GitHub Pages**.

O projeto é dividido em `front` (páginas estáticas), `server` (lado servidor), `schemas` (contratos de dados em JSON Schema) e `scripts` (automações), e o deploy é feito automaticamente por **GitHub Actions**.

> 💡 <!-- TODO: adicionar a missão/descrição oficial do laboratório aqui -->

---

## Site

[#site](#site)

🔗 **[hubse-ailab.com.br](http://hubse-ailab.com.br/)**

---

## Funcionalidades

[#funcionalidades](#funcionalidades)

- **Página inicial** do laboratório (`index.html`)
- **Layout compartilhado** entre as páginas (`components/layout.css` e `components/layout.js`)
- **Publicações** exibidas no site, validadas por um schema (`publication-final.schema.json`), cada item com imagem opcional e um logo padrão como fallback
- **Deploy automático** no GitHub Pages a cada push na `main` ou por execução manual
- <!-- TODO: listar as demais páginas/seções (equipe, projetos, contato...) -->

---

## Arquitetura

[#arquitetura](#arquitetura)

Fluxo de deploy (definido em `.github/workflows/deploy.yml`):

```mermaid
flowchart TD
    A[push na main / workflow_dispatch] --> B[Checkout do código]
    B --> C[Copia schemas/publication-final.schema.json para front/schemas]
    C --> D[Copia front/index/* para a raiz de front/]
    D --> E[Configura GitHub Pages]
    E --> F[Upload da pasta ./front como artefato]
    F --> G[Deploy no GitHub Pages]
```

### Estrutura do projeto

[#estrutura-do-projeto](#estrutura-do-projeto)

```
hubseailab.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml         # Publica ./front no GitHub Pages
├── .vscode/                   # Configurações do editor
│
├── front/                     # Site estático (é a pasta publicada)
│   ├── index/                 # Página inicial (index.html)
│   ├── components/            # layout.css · layout.js
│   ├── assets/
│   │   └── logos/             # Logos do laboratório
│   └── ...                    # TODO: demais páginas
│
├── schemas/
│   └── publication-final.schema.json   # Schema das publicações
│
├── scripts/                   # TODO: descrever os scripts
└── server/                    # TODO: descrever o servidor
```

> ⚠️ Os itens dentro de `front/` seguem o que o fluxo de deploy referencia. Confira e ajuste conforme a estrutura real das pastas.

---

## Tecnologias

[#tecnologias](#tecnologias)

| Camada           | Tecnologia                                        |
| ---------------- | ------------------------------------------------- |
| **Front-end**    | HTML · CSS · JavaScript                           |
| **Dados**        | JSON + [JSON Schema](https://json-schema.org)     |
| **CI/CD**        | GitHub Actions (`checkout`, `configure-pages`, `upload-pages-artifact`, `deploy-pages`) |
| **Hospedagem**   | GitHub Pages                                      |
| **Servidor**     | <!-- TODO: informar a tecnologia da pasta server --> |

---

## Como rodar

[#como-rodar](#como-rodar)

### 1. Clone o repositório

```bash
git clone https://github.com/HubSeAILab/hubseailab.github.io.git
cd hubseailab.github.io
```

### 2. Sirva a pasta `front` localmente

Como o site é estático, basta um servidor HTTP simples:

```bash
cd front
python3 -m http.server 8000
```

Abra `http://localhost:8000` no navegador.

> Observação: no deploy, o conteúdo de `front/index/` é copiado para a raiz de `front/`. Localmente, abra `http://localhost:8000/index/` se a página inicial estiver dentro dessa pasta.

### 3. Servidor (opcional)

<!-- TODO: instruções de instalação e execução da pasta server -->

---

## Deploy

[#deploy](#deploy)

O deploy é automático. Ao fazer push na `main` (ou rodar o workflow manualmente em **Actions → Deploy → Run workflow**), o GitHub Actions publica a pasta `./front` no GitHub Pages.

> Para funcionar, em **Settings → Pages** a origem (*Source*) deve estar configurada como **GitHub Actions**.

---

## Contribuindo

[#contribuindo](#contribuindo)

Contribuições são bem-vindas!

1. Faça um **fork** do repositório
2. Crie sua branch — `git checkout -b feature/minha-feature`
3. Faça o commit — `git commit -m "feat: minha feature"`
4. Envie a branch — `git push origin feature/minha-feature`
5. Abra um **Pull Request**

---

## Licença

[#licenca](#licenca)

<!-- TODO: definir a licença do projeto e adicionar o arquivo LICENSE -->

---

<div align="center">

### Feito com 💙 pela equipe do [HubSE AI Lab](https://github.com/HubSeAILab)

**Se este projeto te ajudou, deixe uma ⭐ no repositório!**

![footer](https://capsule-render.vercel.app/api?type=waving&color=0:0B1220,100:0E7490&height=120&section=footer)

</div>
