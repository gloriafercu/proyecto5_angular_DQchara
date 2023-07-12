# D'Qchara project frontend

## Angular material

```
ng add @angular/material -y --theme=indigo-pink --typography=y
```
## Módulo: restaurants

```
ng generate module restaurants --routing --module app.module
ng generate interface restaurants/models/restaurant --type=model --prefix=I
ng generate component restaurants/restaurant-list
ng generate component restaurants/restaurant-detail
ng generate service restaurants/restaurant
```

## Módulo: users

```
ng generate module users --routing --module app.module
ng generate interface users/models/user --type=model --prefix=I
ng generate component users/user-detail
ng generate component users/user-form
ng generate component users/user-list
ng generate service users/services/user
```
## Módulo: comments
```
ng generate module comments --routing --module app.module
ng generate component comments/comment-list
ng generate component comments/comment-detail
ng generate component comments/comment-form
ng generate interface comments/models/comment --type=model --prefix=I
ng generate service comments/services/comment
```


## Módulo: Reservas

```
ng generate module bookings --routing --module app.module
ng generate component bookings/booking-detail
ng generate component bookings/booking-form
ng generate component bookings/booking-list
ng generate interface bookings/models/booking --type=model --prefix=I
ng generate service bookings/services/booking
```

## Layout

```
ng generate component layout/navbar
ng generate component layout/footer
```

## Presentaciones

Tiempo maximo: 20-25min
1. Titulo Nombre y logo del proyecto
2. Tematica y objetivo
3. Equipo
4. Tecnologia
 * Diagrama de arquitetura : http://cloud.google.com/blog/topics/developers-practitioners/introducing-google-cloud-architecture-diagramming-tool
 *tecnologías de desarollo: vscode,angular,nest,mysql,js,ts,css,html
 *Tecnologías colaborativas: Github , Trello, Teams, whatsapp
 *Mostrar el repositorio de Github
 *Captura de trello
 5.Demo(10min)
 6.conclusiones
 7. Desarollo futuros
 8.Aprendizajes obtenidos
 9.Linkedin 

