import { Component, OnInit } from '@angular/core';
import { IComment } from '../models/comment.model';
import { CommentService } from '../services/comment.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

  comments: IComment[] = [];
  displayedColumns: string[] = ['restaurant', 'description', 'rating'];

  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
    this.commentService.getAll().subscribe(data => this.comments = data);
  }

}