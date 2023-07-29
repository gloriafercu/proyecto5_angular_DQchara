# D'Qchara project Frontend

## Angular material

```
ng add @angular/material -y --theme=indigo-pink --typography=y
```
## Módulo: restaurants

```
ng generate module restaurants --routing --module app.module
ng generate interface restaurants/models/restaurant --type=model --prefix=I
ng generate service restaurants/restaurant
ng generate component restaurants/restaurant-list
ng generate component restaurants/restaurant-detail
ng generate component restaurants/restaurant-form
ng generate component restaurants/restaurant-form-images
```

## Módulo: users

```
ng generate module users --routing --module app.module
ng generate interface users/models/user --type=model --prefix=I
ng generate service users/services/user
ng generate component users/user-detail
ng generate component users/user-list
```
## Módulo: comments

```
ng generate module comments --routing --module app.module
ng generate interface comments/models/comment --type=model --prefix=I
ng generate service comments/services/comment
ng generate component comments/comment-list
ng generate component comments/comment-form
```


## Módulo: Reservas

```
ng generate module bookings --routing --module app.module
ng generate interface bookings/models/booking --type=model --prefix=I
ng generate service bookings/services/booking
ng generate component bookings/booking-detail
ng generate component bookings/booking-form
ng generate component bookings/booking-list
```

## Módulo: Auth

```
ng generate module auth --routing --module app.module
ng generate service auth/services/auth
ng generate component auth/login
ng generate component auth/register
```


## Layout

```
ng generate component layout/navbar
ng generate component layout/footer
```


