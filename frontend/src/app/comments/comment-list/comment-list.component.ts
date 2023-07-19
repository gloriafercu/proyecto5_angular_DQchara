import { Component, OnInit } from '@angular/core';
import { IComment } from '../models/comment.model';
import { CommentService } from '../services/comment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

  comments: IComment[] = [];
  displayedColumns: string[] = ['description', 'rating', 'actions'];



  constructor(private commentService: CommentService,
    private router: Router) { }

  ngOnInit(): void {
    console.log("EEEEEE")
    this.commentService.getAll().subscribe(data => this.comments = data);

    //this.commentService.getAllCommentsByUserId(userId).subscribe(data => this.comments = data); 
  }

  // view(comment: IComment) {
  //   this.router.navigate(['/comments', comment.id]);
  // }



}