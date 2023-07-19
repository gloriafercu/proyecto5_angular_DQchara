import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentListComponent } from './comment-list/comment-list.component';
import { CommentDetailComponent } from './comment-detail/comment-detail.component';
import { CommentFormComponent } from './comment-form/comment-form.component';

const routes: Routes = [
  {
    path: 'comment-list',
    component: CommentListComponent
  },
  {
    path: 'comment-form',
    component: CommentFormComponent
  },
  {
    path: ':id',
    component: CommentDetailComponent
  },
  {
    path: '', redirectTo: 'comments', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: 'comments', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentsRoutingModule { }
