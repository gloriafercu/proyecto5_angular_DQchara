import { Component, OnInit } from '@angular/core';
import { IUser } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {


  users: IUser[] = [];
  displayedColumns: string[] = ['userName', 'role', 'restaurant'];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(data => this.users = data);
    
  }

}


 




