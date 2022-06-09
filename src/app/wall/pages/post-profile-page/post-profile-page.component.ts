import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/posts/services/posts.service';
import { Post } from '../../interfaces/post.interface';

@Component({
  selector: 'app-post-profile-page',
  templateUrl: './post-profile-page.component.html',
  styleUrls: ['./post-profile-page.component.scss']
})
export class PostProfilePageComponent implements OnInit {
  post: Post | undefined;


  constructor(
    private activatedRoot: ActivatedRoute,
    private postsService: PostsService
  ) { }

  async setupPost() {
    const postId = this.activatedRoot.snapshot.params["id"];
    this.post = await this.postsService.getPostsById(postId);
  }

  ngOnInit(): void {
    this.setupPost();
  

  }

}
