# QG do Filmmaker

Redesign e Otimização de Portfólio Profissional  
Projeto em Desenvolvimento Ativo

---

## Objetivo do Produto

O QG do Filmmaker é um projeto focado no redesign e na reformulação da experiência de usuário (UX/UI) do portfólio de um profissional audiovisual. 

O desafio central consiste em analisar um modelo/template preexistente — sobrecarregado de informações desnecessárias e animações excessivas que prejudicavam a navegação — e reconstruí-lo do zero. O objetivo é simplificar a apresentação dos conteúdos, refinar a hierarquia visual e Copywriting, e garantir uma navegação fluida que reflita a identidade e a personalidade do filmmaker sem comprometer a usabilidade do usuário final.

---

## Tecnologias e Stack

A construção do projeto utiliza tecnologias web fundamentais focadas em modularidade e performance:

### Frontend
* **HTML5:** Estruturação semântica das páginas.
* **SCSS / Sass:** Estilização modular com suporte a variáveis, mixins e componentização de estilos.
* **JavaScript (ES6+):** Lógica de interações da interface e comportamentos dinâmicos.
* **GSAP (GreenSock Animation Platform):** Biblioteca em fase de estudo e implementação para a criação de animações performáticas, fluidas e simplificadas.

---

## Gestão e Arquitetura do Projeto

A reconstrução do portfólio adota uma abordagem minimalista e direcionada à experiência do usuário, estruturada sob três pilares de desenvolvimento:

* **Otimização de UX/UI:** Eliminação de ruídos visuais e animações intrusivas do template original, priorizando a usabilidade e a clareza.
* **Componentização de Estilos:** Organização da camada visual utilizando SCSS na pasta `src/scss`, permitindo a reutilização de componentes e facilitando a manutenção do código.
* **Animações Fluidas com GSAP:** Substituição de scripts de animação complexos por sequências leves e responsivas do GSAP.

---

## Estrutura de Pastas

```text
📁 QG_do_Filmaker/
│
├── 📁 dist/                          # Arquivos compilados para distribuição
├── 📁 js/                            # Scripts e interações em JavaScript
├── 📁 pages/                         # Páginas secundárias do projeto
├── 📁 src/
│   └── 📁 scss/                      # Estilos componentizados em SCSS
│
├── 📄 .gitignore
├── 📄 index.html                     # Ponto de entrada da aplicação
├── 📄 package-lock.json
├── 📄 package.json                   # Dependências e scripts de build
└── 📄 README.md
```

---

## Status Atual e Próximos Passos

O projeto encontra-se em desenvolvimento ativo. A estrutura base de código e estilização já foi estabelecida no repositório.

### Concluído
* Análise de usabilidade e diagnóstico de pontos de melhoria do template original.
* Refatoração da arquitetura do projeto (organização de diretórios e movimentação do `index.html` para a raiz).
* Configuração do ambiente de compilação SCSS (`src/scss`) e Scripts no `package.json`.
* Estruturação inicial dos componentes HTML, CSS e interações básicas em JavaScript.

### Próximos Passos
* [ ] Recebimento e integração dos ativos finais de mídia (vídeos e imagens em alta resolução do filmmaker).
* [ ] Reestruturação e escrita definitiva das copys/textos conforme o propósito do portfólio.
* [ ] Finalização das interações e transições utilizando GSAP.
* [ ] Ajustes finos de responsividade e otimização de performance de carregamento das mídias.
* [ ] Deploy da versão final.

---

## Considerações Finais

O projeto QG do Filmmaker exemplifica a aplicação prática de conceitos fundamentais de design de interface e engenharia frontend no mundo real. Ao transformar um modelo genérico e poluído em um produto customizado e otimizado, o projeto consolida práticas vitais de:

* **Design Focado no Usuário (UX):** Redução de carga cognitiva através da eliminação de elementos redundantes.
* **Frontend Moderno e Performático:** Uso de SCSS para escrita de código limpo e GSAP para animações eficientes.
* **Curadoria de Conteúdo:** Alinhamento estratégico entre a linguagem do site e a marca pessoal do profissional audiovisual.
