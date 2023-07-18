import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import jwt_decode from "jwt-decode";
import { BASE_URL, TOKEN } from '../shared/constants';



export interface Token {
  sub: number; // id del usuario
  email: string;
  role: string;
  exp: number; // timestamp con la fecha de expiración
  iat: number; // Issued At: campo con la fecha de emisión del token
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  urlAPI: string = `${BASE_URL}/auth`;

  // BehaviorSubject emite valores a suscriptores, es un Observable especializado
  // que siempre emite el último valor a sus observadores
  isAdmin = new BehaviorSubject<boolean>(false);
  isLoggedIn = new BehaviorSubject<boolean>(this.hasToken());
  email = new BehaviorSubject<string>('');

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
    localStorage.removeItem(TOKEN);
    this.router.navigate(['/auth/login']);
    // Cuando el usuario cierra la sesión, emitimos false para isAdmin y isLoggedIn
    this.isAdmin.next(false);
    this.isLoggedIn.next(false);
  }

  hasToken() {
    console.log('checking hasToken()');
    return localStorage.getItem(TOKEN) !== null;
  }

  handleLoginResponse(token: any) {
    // Guarda el token en localStorage y actualiza el estado de isAdmin y isLoggedIn
    localStorage.setItem(TOKEN, token);
    let decoded_token: Token = jwt_decode(token);
    this.isAdmin.next(decoded_token.role === 'admin');
    this.isLoggedIn.next(true);
  }

}
