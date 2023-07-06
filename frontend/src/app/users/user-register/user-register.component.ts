import { Component, OnInit } from '@angular/core';
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
  registerForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z0-9$%&/()]{8,20}$')]),
    acceptConditions: new FormControl('', [Validators.required])
  });

  constructor(
    private userService: UserService,
    private router: Router
    ) {}

  save() {

    let register = {
      username: this.registerForm.get('username')?.value ?? '',
      email: this.registerForm.get('email')?.value ?? '',
      password: this.registerForm.get('password')?.value ?? '',
      acceptConditions: this.registerForm.get('acceptConditions')?.value ?? ''
    }

    this.userService.register(register).subscribe(data => {
      console.log(data.token);
      // Guardar el token para utilizarlo en las posteriores peticiones
      localStorage.setItem('jwt_token', data.token);
      this.router.navigate(['/books']);

    });

  }

}