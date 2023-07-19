import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/users/services/user.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z0-9$%&/()]{8,20}$')]),
    acceptConditions: new FormControl('', [Validators.required]),
    isRestaurant: new FormControl(false)
  });

  constructor(
    private authService: AuthService,
    private router: Router
    ) {}

  save() {

    let register = {
      userName: this.registerForm.get('userName')?.value ?? '',
      email: this.registerForm.get('email')?.value ?? '',
      password: this.registerForm.get('password')?.value ?? '',
      acceptConditions: this.registerForm.get('acceptConditions')?.value ?? '',
      isRestaurant: this.registerForm.get('isRestaurant')?.value ?? false
    }

    this.authService.register(register).subscribe(data => {
      console.log(data.token);
      // Guardar el token para utilizarlo en las posteriores peticiones
      this.authService.handleLoginResponse(data.token);
      this.router.navigate(['/restaurants']);
    });

  }

}
