import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserRegisterComponent } from './user-register/user-register.component';

const routes: Routes = [
  {
    path: '',
    component: UserLoginComponent
  },
  {
    path: ':id',
    component: UserDetailComponent
  },
  {
    path: ':id/edit',
    component: UserLoginComponent
  },
  {
    path: '',
    component: UserRegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
