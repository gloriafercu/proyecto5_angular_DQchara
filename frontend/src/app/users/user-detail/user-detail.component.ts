import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '../models/user.model';
import { UserService } from '../services/user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user: IUser | undefined;

  
  userForm = new FormGroup({
    id: new FormControl<number>(0),
    firstName: new FormControl<string>(''),
    lastName: new FormControl<string>(''),
    userName: new FormControl<string>('', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]),
    email: new FormControl<string>('', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]),
    phone: new FormControl<string>(''),
    avatar: new FormControl<string>(''),
    restaurantId: new FormControl<number>(0)

  });

  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.userService.findCurrentUser()
      .subscribe(data => {
        this.user = data;
        this.userForm.reset({
          id: this.user.id,
          firstName: this.user.firstName,
          lastName: this.user.lastName,
          userName: this.user.userName,
          email: this.user.email,
          phone: this.user.phone,
          avatar: this.user.avatar,
          restaurantId: this.user.restaurant?.id
        });
      });
  }

  save(): void {
    let id = this.userForm.get('id')?.value ?? 0;
    let firstName = this.userForm.get('firstName')?.value ?? '';
    let lastName = this.userForm.get('lastName')?.value ?? '';
    let userName = this.userForm.get('userName')?.value ?? '';
    let email = this.userForm.get('email')?.value ?? '';
    let phone = this.userForm.get('phone')?.value ?? '';
    let avatar = this.userForm.get('avatar')?.value ?? '';

    let user: IUser = {
      id: id,
      firstName: firstName,
      lastName: lastName,
      userName: userName,
      email: email,
      phone: phone,
      avatar: avatar
    }

    this.userService.update(user)
      .subscribe(data => {
        console.log(data);
        this.router.navigate(['/users', user.id]);
      });
  }

}