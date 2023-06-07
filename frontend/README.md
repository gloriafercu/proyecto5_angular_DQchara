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
ng generate service restaurants/restaurant
```

## Módulo: users

```
ng generate module users --routing --module app.module
ng generate interface users/models/user --type=model --prefix=I
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
## Layout

```
ng generate component layout/navbar
ng generate component layout/footer
```

