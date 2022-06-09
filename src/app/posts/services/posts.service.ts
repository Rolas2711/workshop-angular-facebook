import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { delay, filter, lastValueFrom } from 'rxjs';
import { Post } from 'src/app/wall/interfaces/post.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private http: HttpClient
  ) { }

  getPosts(): Promise<Post[] > {
    return this.makeRequest<Post[]>(environment.postUrl);
  }

  getPostsById(postId: string): Promise<Post > {
    return this.makeRequest<Post>(
      `${environment.postUrl}/${postId}`
      );
  }

  private fakeRequest<T>(_url?: string): Promise<T> {
    return new Promise((resolve) => {
      setTimeout(() => resolve([] as unknown as T), 2000);
    });
  }

  private makeRequest<T>(url: string): Promise<T> {
    return lastValueFrom(this.http.get<T>(url).pipe(
      delay(2000)
      ));
  }
}
