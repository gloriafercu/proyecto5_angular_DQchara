import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentsRoutingModule } from './comments-routing.module';
import { CommentListComponent } from './comment-list/comment-list.component';
import { CommentDetailComponent } from './comment-detail/comment-detail.component';

import{MatGridListModule} from '@angular/material/grid-list'
import{MatIconModule} from '@angular/material/icon'
import{} from '@angular/material/'

@NgModule({
  declarations: [
    CommentListComponent,
    CommentDetailComponent,
  ],
  imports: [
    CommonModule,
    CommentsRoutingModule,
    MatGridListModule,
    MatIconModule,

  ],
  exports:[
    CommentListComponent,
    CommentDetailComponent
    
  ]
})
export class CommentsModule { }
