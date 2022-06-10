import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Post } from '../../interfaces/post.interface';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class SinglePostComponent implements OnInit {
  @Input() post: Post | null = null;

  constructor() { }

  ngOnInit(): void {
  }

   /**
   * Example
   *  /posts/<POST_ID>
   */
    getPostProfileUrl(): string {
      // return '/posts/' + this.post?.id;
      console.debug('getPostProfileUrl')
      return `/posts/${this.post?.id}`;
    }
  

}
