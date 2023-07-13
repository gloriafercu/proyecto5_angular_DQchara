import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../models/user.model';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  urlAPI: string = "http://localhost:3000/users";

  constructor(private httpClient: HttpClient, private router: Router) { }

  getAllUsers(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(this.urlAPI);
  }
  getById(id: number): Observable<IUser> {
    return this.httpClient.get<IUser>(`${this.urlAPI}/${id}`);
  }

  create(user: IUser): Observable<IUser> {
    return this.httpClient.post<IUser>(this.urlAPI, user);
  }

  update(user: IUser): Observable<IUser> {
    return this.httpClient.put<IUser>(`${this.urlAPI}`, user);
  }

  deleteById(id: number): void {
    this.httpClient.delete(`${this.urlAPI}/${id}`);
  }
  register(user: any): Observable<any> {
    return this.httpClient.post(`${this.urlAPI}/register`, user);
  }

  logout() {
    localStorage.removeItem('jwt_token');
    this.router.navigate(['/user/login']);
  }

  isLoggedIn() {
    return localStorage.getItem('jwt_token') !== null;

  }

  findCurrentUser(): Observable<IUser> {
    return this.httpClient.get<IUser>(`${this.urlAPI}/current`);
  }

}


