import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';

import { MatGridListModule} from '@angular/material/grid-list';


@NgModule({
  declarations: [
    UserDetailComponent,
    UserFormComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatGridListModule
  ],
  exports: [
    UserDetailComponent,
    UserFormComponent,
    UserListComponent
  ]
})
export class UsersModule { }
