import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { IUser } from '../models/user.model';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {
  hide = true;

  registerForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    nickName: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]),
    phone: new FormControl('', [Validators.pattern('^[679]{1}[0-9]{8}$')]),
    password: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z0-9$%&/()]{8,20}$')]),
    passwordConfirm: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z0-9$%&/()]{8,20}$')]),
    acceptConditions: new FormControl(false, [Validators.requiredTrue]),
  }, { validators: this.passwordConfirmValidator });

  // Validator personalizado a nivel de FormGroup: dos campos distintos
  passwordConfirmValidator(control: AbstractControl) {
    if (control.get('password')?.value === control.get('passwordConfirm')?.value)
      return null; // si son iguales no hay error
    else
      return { 'confirmError': true }; // si son distintas sí hay error
  }

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private userService:UserService) { }


    save(): void {

      // TODO añadir validación extra de datos, si alguno está mal hacer return y mostrar error y no guardar.
      let id = this.registerForm.get('id')?.value ?? 0;
      let firstName = this.registerForm.get('firstName')?.value ?? '';
      let lastName = this.registerForm.get('lastName')?.value ?? '';
      let phone = this.registerForm.get('phone')?.value ?? '';
      let email = this.registerForm.get('email')?.value ?? '';
      let password = this.registerForm.get('password')?.value ?? '';
      let userName = this.registerForm.get('userName')?.value ?? '';
      let avatar = this.registerForm.get('avatar')?.value ?? '';

  
      let newUser: IUser = {
        id: id,
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        email: email,
        password: password,
        userName: userName,
        avatar: avatar
      }
  
      console.log(newUser);
  
      if (id === 0)
        this.userService.create(newUser).subscribe(newUser => this.router.navigate(['/newUsers', newUser.id]));
      else
        this.userService.update(newUser).subscribe(newUser => {
          this.router.navigate(['/newUsers', newUser.id, 'edit']);
        this.router.navigate(['/newUsers', newUser.id]);
      });
    }
  

  imageSrc: string | undefined;

  uploadFile(event: Event): void {
    let target = event.target as HTMLInputElement;

    if (target.files !== null && target.files.length > 0){
      let fileImg = target.files[0];

      // Opcional: mostrar la imagen al usuario
      let reader = new FileReader();
      reader.onload = ev => this.imageSrc = reader.result as string;// qué hacer cuando se lea la imagen
      reader.readAsDataURL(fileImg); // leer la imagen
    }
  }
}