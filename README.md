# Desafio Frontend - The Nine Level - Vue.js


## Objetivo.
Buscar na API do Github todas os projetos por usuário. 

O usuário poderá digitar o nome de um usuário e visualizar o nome do projeto, se ele é público ou privado, url para acesso ao repositório, descrição do projeto e a linguagem de programação utilizada.

* Teste o projeto: [challenge-tnl-vue](https://josiel27.github.io/challenge-tnl-vue/).


## Processo de desenvolvimento

- Primeiro, estruturei os components nas suas respectivas pastas. Em seguida, converti todos os componentes separados do projeto em React. O css contou bastante com a ajuda do Bulma e foi de suma para a estilização do formulário de pesquisa e tabela com os projetos.

## Tecnologias Utilizadas 

- HTML, JavaScript, Css
- Bulma
- Scss
- Vue.js
- Bulma
- Babel
- Fontawesome


## Desafios encontrados

- Semelhante ao projeto em React.js, o maior desafio foi conversar as informações entres esses componentes. 


## Melhorias 

- Problema: O componente GitRepositories.js contém muitas métodos e muitas informações centralizadas em um só componente. Além do html, js e css no mesmo arquivo component.vue. A idéia de centrar o componente em um arquivo é muito interessante (Single-File), mas, também pode dificultar a manutenção.
- Solução: Para resolver isso, pode-se organizar o componente, utilizando os recursos de hot-reloading (recompilação e atualização em tempo real ao salvar o código), distribuindo em três arquivos: GitRepositories.js, GitRepositories.css e GitRepositories.html, todos os componentes do projeto.


## Como usar

Instale o Node.js se precisar: [Como instalar o Node JS](https://medium.com/@adsonrocha/como-instalar-o-node-js-no-windows-10-cf2bd460b8a8).

<ol>
    <li>git clone https://github.com/josiel27/challenge-tnl-vue.git</li>
    <li>npm install</li>
    <li>npm run serve</li>
</ol>