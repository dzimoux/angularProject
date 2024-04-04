import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { PostInterface} from "../interfaces/post.interface";
import {posts} from "./api";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private httpClient:HttpClient) { }
  getAll():Observable<PostInterface[]>{
    return this.httpClient.get<PostInterface[]>(posts)
  }
}




