import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/posts/services/posts.service';
import { Sorter } from 'src/app/shared/helpers/sorter';
import { Post } from 'src/app/wall/wall/interfaces/post.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  isPostLoaded = false
  posts: Post[] = []
  constructor(private postsService: PostsService) { 
    this.setupPosts();
  }

  ngOnInit(): void {
  }

  private async setupPosts() {
    const posts = await this.postsService.getPosts();
    this.posts = Sorter.sortBy(posts);
    this.isPostLoaded = true;
  }

}
