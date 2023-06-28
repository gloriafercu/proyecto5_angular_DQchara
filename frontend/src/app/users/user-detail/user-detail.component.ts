import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from '../models/user.model';
import { UserService } from '../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit{

  user: IUser | undefined;

  constructor(private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router,
    private snackbar: MatSnackBar,
    config: NgbModalConfig,
    private modalService: NgbModal) {

    config.backdrop = 'static';
    config.keyboard = false;
  };


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const idString = params['userId']; // extraer id del restaurante de la dirección url
      if (!idString) return; // comprueba si el id existe
      const userId = parseInt(idString, 10);
      if (!userId) return;
      this.userService.getById(userId).subscribe(data => {
        this.user = data;
        console.log('this user en detail', this.user);
        this.userService.getById(this.user.id).subscribe(data =>
          this.user = data);
      });
    });
  }


  deleteUser(user: IUser): void {
    console.log(user);
  }
  // deleteUser(user: IUser) {
  //   this.userService.deleteById(user.id).subscribe({
  //     next: response => {
  //       console.log(response);
  //       this.router.navigate(['/register']);
  //     },
  //     error: error => {
  //       console.log(error);
  //       this.snackbar.open('Se ha producido un error, inténtelo más tarde', 'Cerrar', { duration: 3000 });
  //     }
  //   });
  // }

  open(content: any) {
    this.modalService.open(content);
  }
}

// TS:
// view(comment: IComment) {
//   this.router.navigate(['/register', user.id]);}

// HTML: (click)="view(comment)"