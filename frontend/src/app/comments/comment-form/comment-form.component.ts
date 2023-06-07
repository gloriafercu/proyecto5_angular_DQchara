import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from '../services/comment.service';
import { IComment } from '../models/comment.model';

@Component({
  selector: 'app-comment-detail',
  templateUrl: './comment-detail.component.html',
  styleUrls: ['./comment-detail.component.css']
})


export class CommentDetailComponent {
  comment: IComment | undefined;
  constructor(private activedRoute: ActivatedRoute, private commentService: CommentService) { };

  ngOnInit(): void {
    this.activedRoute.params.subscribe(params => {
      const id = parseInt(params['id'], 10);
      this.commentService.getById(id).subscribe(data => this.comment = data);
    });
  }

}