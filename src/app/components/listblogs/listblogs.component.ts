import { Component, OnInit } from '@angular/core';
import {UserService} from '../../shared/user.service';
import {BlogService} from '../../shared/blog.service';

@Component({
  selector: 'app-listblogs',
  templateUrl: './listblogs.component.html',
  styleUrls: ['./listblogs.component.css']
})
export class ListblogsComponent implements OnInit {

  blogs;

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogService.getalluser()
      .subscribe(
        (data) => {
          this.blogs = data;
        },
        errors => {
          console.log(errors);
          alert(errors.status);
        },
      )
    ;
  }

}
