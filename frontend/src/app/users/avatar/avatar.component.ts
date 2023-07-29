import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BASE_URL } from 'src/app/shared/constants';
import { IUser } from '../models/user.model';
import { Router } from '@angular/router';
import { AuthService, Token } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {

  imagePreview: string | undefined; // para mostrar
  imageFile: File | undefined; // para subir
  user: IUser | undefined;

  constructor(private httpClient: HttpClient, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.loadCurrentUser();
  };

  private loadCurrentUser() {
    this.httpClient.get<IUser>(`${BASE_URL}/users/current`).subscribe(data => this.user = data); // mirar esta ruta
  }

  onFileSelected(event: Event) {

    let target = event.target as HTMLInputElement;

    if (target.files !== null && target.files.length > 0) {
      this.imageFile = target.files[0];

      let reader = new FileReader();
      reader.onload = ev => this.imagePreview = reader.result as string;
      reader.readAsDataURL(this.imageFile); 
    }
  }
  save() {
    if (!this.imageFile) return;

    let formData = new FormData();
    formData.append('file', this.imageFile);

    this.httpClient
      .post<any>(`${BASE_URL}/auth/avatar`, formData)
      .subscribe(data => {
        console.log(data);
        // this.loadCurrentUser(); 
        // this.imageFile = undefined;
        // this.imagePreview = undefined;
        // console.log(data);
        this.authService.handleLoginResponse(data.token);
        this.router.navigate(['/users/profile']);
      });
  }
}
