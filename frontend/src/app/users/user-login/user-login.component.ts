import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent{
constructor (private router:Router){}
  hide = true

  userLoginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]), 
    password: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z0-9$%&/()]{8,20}$')]),
  })

  save(): void {
    let email = this.userLoginForm.get('email')?.value ?? 0;
    let password = this.userLoginForm.get('password')?.value ?? '';
    console.log(email, password);

//enrutar a la pantalla de inicio. 
    console.log("te has conectado ok");
    this.userLoginForm.reset()
    this.router.navigate(['/restaurants'])

  }

}
