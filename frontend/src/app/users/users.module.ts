import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';

import { MatGridListModule} from '@angular/material/grid-list';
import { UserLoginComponent } from './user-login/user-login.component';


@NgModule({
  declarations: [
    UserDetailComponent,
    UserListComponent,
    UserLoginComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatGridListModule
  ],
  exports: [
    UserDetailComponent,
    UserListComponent,
    UserLoginComponent
  ]
})
export class UsersModule { }
