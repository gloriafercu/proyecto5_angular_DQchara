import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  hide=true
  
  loginForm= new FormGroup({
    id: new FormControl('', [Validators.required]),
    firstName:new FormControl('', [Validators.required]),
    lastName:new FormControl('', [Validators.required]),
    // userName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z0-9$%&/()]{8,20}$')]),
    // phone: new FormControl('',[Validators.required]),
    // avatar:new FormControl('', [Validators.required])
  })
}
