import { Component, OnInit } from '@angular/core';
import { PostService } from '@/app/services/post.service';
import { PostInterface } from '@/app/interfaces/post';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {
  posts: Array<PostInterface> = [];

  constructor(private http: PostService) { }

  async getPost():Promise<void> {
    const response = this.http.getPosts();
    console.log('posts', response)
  }

  ngOnInit(): void {
    this.getPost();
  }
}
