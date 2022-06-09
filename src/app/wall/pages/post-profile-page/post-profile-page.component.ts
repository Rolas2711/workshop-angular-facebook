import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private postsService: PostsService,
    private router: Router
  ) { }

  async setupPost() {
    const postId = this.activatedRoot.snapshot.params["id"];
  
    try {
      const post = await this.postsService.getPostsById(postId);
      if (!post) {
        throw new Error('Post is not found')
      }
      this.post = post;
    } catch {
      this.router.navigate(['post-not-found'])
    }
  }

  ngOnInit(): void {
    this.setupPost();
  

  }

}
