import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit{

  user: IUser | undefined;

  constructor(private activedRoute: ActivatedRoute,private userService: UserService) {};

  ngOnInit(): void {
    this.activedRoute.params.subscribe( params => {
      const id = parseInt(params['id'],10);
      this.userService.getById(id).subscribe(data => this.user = data);
    });
  }

}
