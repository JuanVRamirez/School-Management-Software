
En este proyecto se llevó a cabo la creación de una aplicación para la gestión de un colegio con estudiantes, profesores y clases.

Para el Backend se usó NestJS, MySQL y TypeORM. Los archivos que corresponden a cada elemento (Estudiante, Profesor y Clase) se encuentran en la carpeta src en el root del proyecto, donde existe una carpeta para cada uno (class, student, teacher) donde se configuraron los controladores, entidades, modulos y servicios.

Para iniciar el Backend se debe estar en el root del proyecto, abrir la terminal y ejecutar el comando npm start

Para una mejor visualización de los endpoints y métodos de cada entidad (estudiante, profesor y clase) se utilizó Swagger, por lo que, una vez iniciado el Backend se puede visualizar esta información de forma gráfica y ordenada en http://localhost:3000/api (Suponiendo que se usó el puerto 3000)

![image](https://github.com/JuanVRamirez/School-Management-Software/assets/118035963/4d21a9a3-7ce0-4697-9826-800c1707be13)


----------------------------------------------------------------------------------------------------------------------------------------

Para el Frontend se usó React y Material UI. La interfaz gráfica consta de una pantalla inicial de Bienvenida con las distintas opciones para gestionar Alumnos, Profesores y Clases. Se usó React Router para poder ingresar a la gestion de cada entidad mencionada anteriormente. Esta pantalla de gestión consta de una tabla con la información guardada en la base de datos (Para efectos gráficos se añadieron 2 ejemplos por tabla), funcionalidades para editar o borrar una fila y un botón para añadir nueva información (Estudiante, Profesor o Clase) dependiendo de la entidad haciendo uso de un formulario en un modal.

El Frontend del proyecto se encuentra en la carpeta school-management-frontent. En esta carpeta se encuentra el src que se dividió en assets, components y pages.

Para iniciar el Frontend se debe abrir la terminal y entrar a la carpeta school-management-frontend (cd school-management-frontend). Una vez en la carpeta se ejecuta el comando npm start.

![image](https://github.com/JuanVRamirez/School-Management-Software/assets/118035963/cc3fbd34-4ec9-4e5b-90a8-9e213cb7ff7e)


----------------------------------------------------------------------------------------------------------------------------------------

La documentación se encuentra al inicio de cada documento

----------------------------------------------------------------------------------------------------------------------------------------


<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
