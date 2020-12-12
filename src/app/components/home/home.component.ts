import { Component, OnInit } from '@angular/core';
import {BlogService} from '../../shared/blog.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  blogs;
  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogService.getalluser()
      .subscribe(
        (data) => {
          this.blogs = data;
          console.log(this.blogs);
        },
        errors => {
          console.log(errors);
          alert(errors.status);
        },
      )
    ;
  }

}
