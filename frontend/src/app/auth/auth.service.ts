import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  urlAPI: string = "http://localhost:3000/auth";


  constructor(
    private httpClient: HttpClient,
    private router: Router
    ) { }

  login(login: any): Observable<any> {
    return this.httpClient.post(`${this.urlAPI}/login`, login);
  }

  register(user: any): Observable<any> {
    return this.httpClient.post(`${this.urlAPI}/register`, user);
  }

  logout() {
    localStorage.removeItem('jwt_token');
    this.router.navigate(['/auth/login']);
  }

  isLoggedIn() {
    return localStorage.getItem('jwt_token') !== null;
  }
}
