import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { UserLoginComponent } from './user-login/user-login.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { UserRegisterComponent } from './user-register/user-register.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    UserDetailComponent,
    UserListComponent,
    UserLoginComponent,
    UserRegisterComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatGridListModule,
    HttpClientModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,

    MatSelectModule,
    MatDatepickerModule,
    MatInputModule,
    MatListModule,
    MatListModule,
    MatIconModule,
    MatCheckboxModule,
    MatCardModule,
    MatFormFieldModule
  ],

  exports: [
    UserDetailComponent,
    UserListComponent,
    UserLoginComponent,
    UserRegisterComponent
  ]
})
export class UsersModule { }
