import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PostService {
  http = inject(HttpClient);
  constructor() {
  }
  public loadAll():Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
