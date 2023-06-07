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

  displayedColumns: string[] = ['id', 'comment', 'actions'];
  comments: IComment[] = [];

  constructor(private commentService: CommentService,
    private router: Router) { }

  ngOnInit(): void {
    this.commentService.findAll().subscribe(data => this.comments = data); //getById o findById??
  }

  view(comment: IComment) {
    this.router.navigate(['/comments', comment.id]); 
  }

}