import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpEventType
} from '@angular/common/http';
import { filter, Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';


const cache = new Map();

@Injectable()
export class CacheInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.debug('mrolik', 'intercept', {request, next});
    if (cache.has(request.url)) {
      const record = cache.get(request.url)
      
      if (record.ttl + environment.requestCacheTime > Date.now()) {
        return of(cache.get(request.url));
      } else {
        cache.delete(request.url)
      }
      
    }
    return next.handle(request).pipe(
      filter((response) =>{
        return response.type !== XMLHttpRequest.UNSENT;
      }),
      tap((response) => {
        if (response.type !== HttpEventType.Response) {
          return;
        }
        cache.set(response.url, {
         response: response.clone(),
         ttl: Date.now()
        })

        console.debug('Caching respones', {cache});
      })
    );
  }
}
