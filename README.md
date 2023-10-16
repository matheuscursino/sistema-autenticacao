# sistema-autenticacao
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

Sistema de cadastro/login feito usando JSON Web Token para autenticar usuários, HTML/CSS no front-end, Node.js no back-end e MongoDB como banco de dados.
* Projeto realizado para ajudar colegas de classe a entender o sistema de autenticação de um site

## Tabela de conteúdos

* [Arquitetura](#arquitetura)
* [Features](#features)
* [Como executar o projeto](#como-executar-o-projeto)
* [Lista de futuras features](#para-adicionar)

<img src= "https://github.com/matheuscursino/sistema-autenticacao/assets/142545274/9c629a0d-4654-4ec5-9ef3-46cd2e990261" width=100%>
<p align="center"> Print da página /segredo </p>






<a name="arquitetura"></a>
### Arquitetura

Neste projeto foi utilizado como padrão de desenvolvimento o modelo MVC. Podemos ver no exemplo abaixo como o projeto funciona.

![mvc](https://github.com/matheuscursino/sistema-autenticacao/assets/142545274/29bba093-9edf-47a3-822b-36cc49535583)


Neste caso o front-end faz uma requisição ao servidor, o servidor interpreta essa requisição e faz as consultas necessárias no banco de dados, o banco de dados responde com esses dados ao servidor e o servidor responde a requisição do front-end com a resposta adequeada.

O padrão em questão nos permite criar um código mais organizado e legível.

#### Node.js

Utilizei o Node.js pois sabia que era necessária uma linguagem fácil de ser explicada, linguagens como Java por exemplo são verbosas demais para realizar uma explicação a quem não tem conhecimento avançado. Outro motivo também foi o meu conhecimento prévio na linguagem.

#### Express.js

O Express.js foi utilizado nesse projeto por possuir uma curva de aprendizado baixa, ser um framework fácil de explicar e também por eu possuir experiência prévia nele.

#### MongoDb

O banco de dados MongoDb foi escolhido por ser um banco de dados NoSQL e ter uma ótima integração ao Node.js com a utilização do pacote **Mongoose** .



<a name="features"></a>
### Features

Seguimos com as explicações sobre as features que a aplicação possui.

**Fluxo de login (ou autenticação)**

O fluxo de login funciona conforme as imagens abaixo mostram:

![login1](https://github.com/matheuscursino/sistema-autenticacao/assets/142545274/a7f82ae5-dbc0-40ce-af2a-f99d52c211c1)
![login2](https://github.com/matheuscursino/sistema-autenticacao/assets/142545274/702f5f47-7681-46b4-b6af-7aaca2c973c8)


**Fluxo de criação de conta**

O fluxo de criação de conta/registro de usuários funciona da seguinte maneira:

![registrar](https://github.com/matheuscursino/sistema-autenticacao/assets/142545274/1dee8636-bd1f-47c5-9367-fe0acb81d15e)


<a name="como-executar-o-projeto"></a>
### Como executar o projeto

Para executar o projeto é necessário ter o Node.Js instalado e possui um cluster rodando no MongoDB Atlas.

```
git clone https://github.com/matheuscursino/sistema-autenticacao.git
cd sistema-autenticacao
touch .env // crie a variavel MONGO_URL com o link para seu cluster e crie a variavel SEGREDO com a string que será usada pelo JWT
node main.js
```

<a name="para-adicionar"></a>
### Features para adicionar

* Encriptação das senha com bcrypt
* Colocar filtro de senha no front-end e back-end
* Colocar filtro para inputs em branco no front-end e back-end
