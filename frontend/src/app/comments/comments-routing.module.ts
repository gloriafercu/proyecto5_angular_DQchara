import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentListComponent } from './comment-list/comment-list.component';
import { CommentFormComponent } from './comment-form/comment-form.component';

const routes: Routes = [
  {
    path: 'comment-list',
    component: CommentListComponent
  },
  {
    path: 'comment-form/restaurant/:restaurantId',
    component: CommentFormComponent
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
