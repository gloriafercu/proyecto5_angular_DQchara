import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isLoggedIn = false;
  isAdmin = false;
  isRestaurant = false;
  userName = '';

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    this.authService.isLoggedIn.subscribe(loggedIn => {
      this.isLoggedIn = loggedIn;
    });

    this.authService.isAdmin.subscribe(admin => {
      this.isAdmin = admin;
    });
    this.authService.isRestaurant.subscribe(restaurant => this.isRestaurant = restaurant);

    this.authService.currentUserName.subscribe(currentUserName => this.userName = currentUserName);
  }
}
