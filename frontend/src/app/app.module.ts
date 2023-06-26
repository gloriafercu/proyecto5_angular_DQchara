import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { RestaurantsModule } from './restaurants/restaurants.module';
import { UsersModule } from './users/users.module';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule} from '@angular/material/select';
import { CommentsModule } from './comments/comments.module';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { MyCustomPaginatorIntl } from './paginator-es';
import { BookingsModule } from './bookings/bookings.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RestaurantsModule,
    UsersModule,
    CommentsModule,
    BookingsModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatDividerModule,
    MatToolbarModule,
    MatMenuModule,
    CommentsModule,
    BookingsModule,
    MatSelectModule,
    MatFormFieldModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: MatPaginatorIntl,
      useClass: MyCustomPaginatorIntl
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
