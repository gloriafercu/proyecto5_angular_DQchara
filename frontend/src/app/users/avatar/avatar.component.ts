import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BASE_URL } from 'src/app/shared/constants';
import { IUser } from '../models/user.model';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {

  imagePreview: string | undefined; // para mostrar
  imageFile: File | undefined; // para subir
  user: IUser | undefined;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.loadCurrentUser();
  };

  private loadCurrentUser() {
    this.httpClient.get<IUser>(`${BASE_URL}/users/current`).subscribe(data => this.user = data);
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
      .post(`${BASE_URL}/users/avatar`, formData)
      .subscribe(data => {
        this.loadCurrentUser(); 
        this.imageFile = undefined;
        this.imagePreview = undefined;
       
      });
  }
}
