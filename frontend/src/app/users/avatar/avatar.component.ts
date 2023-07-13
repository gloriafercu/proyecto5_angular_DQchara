import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { BASE_URL } from 'src/app/shared/constants';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent {

  imagePreview: string | undefined; // para mostrar
  imageFile: File | undefined; // para subir

  onFileSelected(event: Event) {

    let target = event.target as HTMLInputElement;

    if (target.files !== null && target.files.length > 0) {
      this.imageFile = target.files[0];
      console.log(this.imageFile);

      // Mostrar la imagen al usuario
      let reader = new FileReader();
      reader.onload = ev => this.imagePreview = reader.result as string;// qué hacer cuando se lea la imagen
      reader.readAsDataURL(this.imageFile); // leer la imagen
    }
  }

  constructor(private httpClient: HttpClient) {}

  save() {
    if(!this.imageFile) return;

    // La imagen no es un archivo texto, es binario por lo que necesitamos enviarla en un FormData
    // para que se gestione correctamente
    let formData = new FormData();
    formData.append('file', this.imageFile);

    this.httpClient
                .post(`${BASE_URL}/users/avatar`, formData)
                .subscribe(data => console.log(data));
  }


}
