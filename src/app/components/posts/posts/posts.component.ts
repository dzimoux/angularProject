import {Component, OnInit} from '@angular/core';
import {PostsService} from "../../../services/posts.service";
import {PostInterface} from "../../../interfaces/post.interface";
import {PostComponent} from "../../post/post.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [
    PostComponent,
    NgForOf
  ],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit{

  postsArray:PostInterface[];
  constructor(private postsService:PostsService) {
  }

ngOnInit():void {
    this.postsService.getAll().subscribe(value => this.postsArray = value)
}

}
