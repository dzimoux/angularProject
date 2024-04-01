import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PostsComponent} from "./components/posts/posts/posts.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PostsComponent, PostsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularProject';
}
