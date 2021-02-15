# DS Delivery
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/4L1C3-R4BB1T/sds2-dsdeliver/blob/main/LICENSE) 

# Sobre o projeto
DS Delivery é uma aplicação construída durante a 2ª edição da **Semana DevSuperior**, evento organizado pela [DevSuperior](https://devsuperior.com.br "Site da DevSuperior").

A aplicação consiste em um sistema de delivery.

O pedido é feito através da aplicação web e o gerenciamento é feito através da aplicação mobile, onde se pode iniciar a navegação ou confirmar a entrega, além de se poder ver os detalhes do pedido.

## Layout Web
![Web 1](https://github.com/4L1C3-R4BB1T/sds2-dsdeliver/raw/main/_assets/web1.png "Tela início")

![Web 2](https://github.com/4L1C3-R4BB1T/sds2-dsdeliver/raw/main/_assets/web2.png "Tela fazer pedido")

## Modelo Conceitual
![Modelo Conceitual](https://github.com/4L1C3-R4BB1T/sds2-dsdeliver/raw/main/_assets/modelo-conceitual.png)

# Tecnologias Utilizadas
### Back-end
- Java
- Spring 
### Front-end
- HTML 
- CSS  
- JavaScript 
- TypeScript
- React
- React Native
### Deploy
- Back-end: Heroku
- Front-end Web: Netlify
- Banco de Dados: PostgreSQL

# Como executar o projeto
```bash
# clonar o repositório
git clone https://github.com/4L1C3-R4BB1T/sds2-dsdeliver.git
```
### Back-end
```bash
# entrar na pasta backend
cd backend

# executar o projeto
./mvnw spring-boot:run
```

### Front-end Web
Necessário ter o npm / yarn

```bash
# entrar na pasta front-web
cd front-web

# instalação das dependências
npm install / yarn install

# executar o projeto
npm start / yarn start
```

### Front-end Mobile
Necessário ter um smartphone com o [Expo](https://play.google.com/store/apps/details?id=host.exp.exponent "Aplicativo") instalado <br>
**O smartphone e o PC precisam estar na mesma rede**

```bash
# entrar na pasta front-mobile
cd front-mobile

# instalação das dependências
npm install / yarn install

# executar o projeto
npm start / yarn start
```
- Abra o aplicativo do **Expo** <br>
- Scaneie o **QR** Code que aparecer no seu navegador no PC
