# D'Qchara project

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
ng generate component restaurants/restaurant-form
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
## Layout

```
ng generate component layout/navbar
ng generate component layout/footer
```

