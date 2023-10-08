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
* [To-do](#to-do)

<img src= "https://github.com/matheuscursino/sistema-autenticacao/assets/142545274/9267ad0e-7ffc-43a2-89f7-921d2f97b6f0" width=100%>
<p align="center"> Print do site </p>






<a name="arquitetura"></a>
### Arquitetura

Neste projeto foi utilizado como padrão de desenvolvimento o modelo MVC. Podemos ver no exemplo abaixo como o projeto funciona.

![Express js](https://github.com/matheuscursino/sistema-autenticacao/assets/142545274/6b42b257-3d2c-4e26-a3e7-024f9b1baaa5)

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

O fluxo de login foi mostrado brevemente com uma imagem acima, agora veremos em maior detalhe como ele funciona:

![1](https://github.com/matheuscursino/sistema-autenticacao/assets/142545274/e40a1d39-1f57-4efb-b14a-092a26a52f3e)
![2](https://github.com/matheuscursino/sistema-autenticacao/assets/142545274/700ab164-e601-4ebc-afe1-4b22d9ea2161)





<a name="como-executar-o-projeto"></a>
### Como executar o projeto


### To-do (para adicionar)

* Encriptação das senha com bcrypt
* Colocar filtro de senha no front-end e back-end
* Colocar filtro para inputs em branco no front-end e back-end
