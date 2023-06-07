import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/Users/models/User.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  urlAPI: string = "http://localhost:5000/users";

  constructor(private httpClient: HttpClient) { }

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
    return this.httpClient.put<IUser>(`${this.urlAPI}/${user.id}`, user);
  }

  deleteById(id: number): void {
    this.httpClient.delete(`${this.urlAPI}/${id}`);
  }


}

}
