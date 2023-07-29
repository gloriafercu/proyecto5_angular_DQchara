<!--

    ___   _     ____     _                     
   /   \ ( )   /___ \___| |__   __ _ _ __ __ _ 
  / /\ / |/   //  / / __| '_ \ / _` | '__/ _` |
 / /_//      / \_/ / (__| | | | (_| | | | (_| |
/___,'       \___,_\\___|_| |_|\__,_|_|  \__,_|


-->


# PROYECTO 5: D'Qchara

## Git clone

```
git clone https://github.com/gloriafercu/proyecto5_angular_DQchara.git
```

## 1. FRONTEND

D'Chara Frontend is developed with Angular 16 and Node 16.14.0


## Install

```
npm install

```

## Run Frontend
```
ng serve
```

It works in https://localhost:4200/restaurants


### Si no funciona el proyecto por @angular/core o @angular/cli :

```
npm install 
npm install --force
ng update @angular/cli @angular/core
```

 
### OpenAPI

npm install @nestjs/swagger

En main.ts:

  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  
### Subida de imágenes

  Backend:

npm install -D @types/multer

users.controller.ts crear método uploadAvatar()

Configurar carpeta destino en app.module.ts

## 2. BACKEND

D'Chara Backend is developed with NestJS 10.0.5

## Install

```
npm install

```

## Run Backend
```
npm run start:dev
```