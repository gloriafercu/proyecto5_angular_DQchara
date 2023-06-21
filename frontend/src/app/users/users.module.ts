import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';

import { MatGridListModule } from '@angular/material/grid-list';
import { UserLoginComponent } from './user-login/user-login.component';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    UserDetailComponent,
    UserListComponent,
    UserLoginComponent
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
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatListModule,
    MatListModule,
    MatIconModule
  ],

  exports: [
    UserDetailComponent,
    UserListComponent,
    UserLoginComponent
  ],

  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' }]
})
export class UsersModule { }
