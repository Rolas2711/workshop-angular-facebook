import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SinglePostComponent } from './components/single-post/single-post.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { SharedModule } from '../shared/shared.module';
import { PostsService } from '../posts/services/posts.service';
import { HttpClientModule } from '@angular/common/http';
import { PostProfilePageComponent } from './pages/post-profile-page/post-profile-page.component';
import { PostsRoutingModule } from './wall-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    PostListComponent,
    SinglePostComponent,
    PostProfilePageComponent,
  ],
  imports: [CommonModule, SharedModule, HttpClientModule, PostsRoutingModule, NgxPaginationModule],
  exports: [PostListComponent],
  providers: [PostsService],
})
export class WallModule {}
