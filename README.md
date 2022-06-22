# Projeto Talker Manager 🚀

O projeto consiste em uma API de um `CRUD` (**C**reate, **R**ead, **U**pdate e **D**elete) de palestrantes (talkers)
criando endpoints que irão ler e escrever em um arquivo utilizando o módulo `fs`, em que será possível cadastrar, visualizar, pesquisar, editar e excluir informações.

## Tecnologias utilizadas 💻

- [Node.js](https://nodejs.dev/)
- [Express](https://expressjs.com/pt-br/)
- [Body-parser](https://www.npmjs.com/package/body-parser)
- [Crypto-js](https://cryptojs.gitbook.io/docs/)
- [Joi](https://joi.dev/)
- [Nodemon](https://www.npmjs.com/package/nodemon)

## Rodar o projeto com o docker

- Rode o serviço node com o comando docker-compose up -d.
 <!-- Esse serviço irá inicializar um container chamado talker_manager. -->
- Use o comando docker exec -it talker_manager bash.
<!-- A partir daqui você pode rodar o container via CLI ou abri-lo no VS Code -->
- Instale as dependências com npm install.

## Rodar o projeto sem docker

- Clone este repositório.
- Instale as dependências:

```bash
$ yarn
  ou
$ npm install
```
- Inicie o Projeto
```bash
$ npm run dev
```

Feito por Igor Mazetti 👋 [Linkedin](https://www.linkedin.com/in/igor-mazetti-de-azevedo-147679ba/)