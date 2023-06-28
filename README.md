# PROYECTO 5: D'Qchara

## 1. FRONTEND

D'Chara is developed with Angular 16 and Node 16.14.0

## Git clone

```
git clone https://github.com/gloriafercu/proyecto5_angular_DQchara.git
```

## Install

```
npm install
```

## Run API server

To install json-server for the first time in the project:

```
npm install json-server --save-dev
```

There are two ways to run server:

1. First way

```
json-server --watch --port 5000 db.js
```

2. Second way

If you add in scripts of package.json

```
"scripts": {
    "serverAPI": "json-server --port 5000 --watch db.js"
  }
```
then: 

```
npm run serverAPI
```

It works with json-server in https://localhost:5000/restaurants





# Si no funciona el proyecto por @angular/core o @angular/cli :

```
npm install 
npm install --force
ng update @angular/cli @angular/core
```

 
