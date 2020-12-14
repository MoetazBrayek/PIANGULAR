import { Component, OnInit } from '@angular/core';
import {BlogService} from '../../shared/blog.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  blogs;
  news;
  p = 1;
  pageOfItems: Array<any>;


  constructor(private blogService: BlogService) { }


  ngOnInit(): void {
    this.blogService.getallblogs()
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
    this.blogService.getallnews()
      .subscribe(
        (data) => {
          this.news = data;
        },
        errors => {
          console.log(errors);
          alert(errors.status);
        },
      )
    ;
  }
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = this.blogs;
  }

}
