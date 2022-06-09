import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SinglePostComponent } from './wall/components/single-post/single-post.component';
import { PostListComponent } from './wall/components/post-list/post-list.component';
import { SharedModule } from '../shared/shared.module';
import { PostsService } from '../posts/services/posts.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    PostListComponent,
    SinglePostComponent
  ],
  imports: [
    CommonModule, 
    SharedModule,
    HttpClientModule
  ],
  exports: [
    PostListComponent
  ],
  providers: [
    PostsService
  ]

})
export class WallModule { }
