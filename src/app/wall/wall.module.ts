import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SinglePostComponent } from './wall/components/single-post/single-post.component';
import { PostListComponent } from './wall/components/post-list/post-list.component';
import { SharedModule } from '../shared/shared.module';
import { PostsService } from '../posts/services/posts.service';
import { HttpClientModule } from '@angular/common/http';
import { PostProfilePageComponent } from './wall/pages/post-profile-page/post-profile-page.component';
import { PostsRoutingModule } from './wall/wall-routing.module';



@NgModule({
  declarations: [
    PostListComponent,
    SinglePostComponent,
    PostProfilePageComponent
  ],
  imports: [
    CommonModule, 
    SharedModule,
    HttpClientModule,
    PostsRoutingModule
  ],
  exports: [
    PostListComponent
  ],
  providers: [
    PostsService
  ]

})
export class WallModule { }
