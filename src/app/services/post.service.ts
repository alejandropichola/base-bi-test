import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostInterface } from '@/app/interfaces/post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts ():Observable<Array<PostInterface>> {
    return this.http.get<Array<PostInterface>>('https://jsonplaceholder.typicode.com/posts')
  }
}
