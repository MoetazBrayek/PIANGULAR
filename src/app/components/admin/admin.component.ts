import { Component, OnInit } from '@angular/core';
import {BlogService} from '../../shared/blog.service';
import {UserService} from '../../shared/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  blogs;
  users;
  cmnts;
  totalcmnts;
  totalblogs;
  totalusers;
  constructor(private blogService: BlogService, private userService: UserService) { }

  ngOnInit(): void {
    this.blogService.getallblogs()
      .subscribe(
        (data) => {
          this.blogs = data;
          this.totalblogs = this.blogs.length;
          console.log(this.totalblogs);

        },
        errors => {
          console.log(errors);
          alert(errors.status);
        },
      )
    ;
    this.blogService.getallcmnts()
      .subscribe(
        (data) => {
          this.cmnts = data;
          this.totalcmnts = this.cmnts.length;
          console.log(this.totalcmnts);

        },
        errors => {
          console.log(errors);
          alert(errors.status);
        },
      )
    ;
    this.userService.getalluser()
      .subscribe(
        (data) => {
          this.users = data;
          this.totalusers = this.users.length;
          console.log(this.totalusers);
        },
        errors => {
          console.log(errors);
          alert(errors.status);
        },
      )
    ;
  }

}
