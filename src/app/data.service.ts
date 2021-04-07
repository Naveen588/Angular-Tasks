import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './model';
import { Todos } from './providers/todos';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url:string="https://jsonplaceholder.typicode.com/posts"
  url2 = "https://jsonplaceholder.typicode.com/todos"

constructor(private http:HttpClient ) { }
getPosts():Observable<Post[]>{
  return this.http.get<Post[]> (this.url);
  }
  gettodos():Observable<Todos[]>{
    return this.http.get<Todos[]>(this.url2)
  }
}
