import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SinglePostComponent } from './wall/components/single-post/single-post.component';
import { PostListComponent } from './wall/components/post-list/post-list.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    PostListComponent,
    SinglePostComponent
  ],
  imports: [
    CommonModule, 
    SharedModule
  ],
  exports: [
    PostListComponent
  ]

})
export class WallModule { }
