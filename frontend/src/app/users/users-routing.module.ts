import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { AvatarComponent } from './avatar/avatar.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [

  {
    path: ':userId/edit',
    component: UserDetailComponent
  },
  {
    path: 'profile',
    component: UserDetailComponent
  },
  {
    path: 'avatar',
    component: AvatarComponent // http://localhost:4200/users/avatar
  },
  {
    path:'user/user-list',
    component: UserListComponent
  },
  {
    path: '', redirectTo: 'register', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: 'login', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
