import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SinglePostComponent } from './wall/components/single-post/single-post.component';
import { PostListComponent } from './wall/components/post-list/post-list.component';



@NgModule({
  declarations: [
    PostListComponent,
    SinglePostComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PostListComponent
  ]

})
export class WallModule { }
