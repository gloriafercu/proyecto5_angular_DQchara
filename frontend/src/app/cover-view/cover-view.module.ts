import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoverViewRoutingModule } from './cover-view-routing.module';
import { SearchBarComponent } from './search-bar/search-bar.component';


@NgModule({
  declarations: [
    SearchBarComponent
  ],
  imports: [
    CommonModule,
    CoverViewRoutingModule
  ],
  exports: [
    SearchBarComponent
  ]
})
export class CoverViewModule { }
