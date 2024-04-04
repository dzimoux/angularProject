import {Component, Input} from '@angular/core';
import { PostInterface} from "../../interfaces/post.interface";

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
@Input()
postsProps:PostInterface;
}
