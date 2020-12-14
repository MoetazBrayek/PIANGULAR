import { Component, OnInit } from '@angular/core';
import {UserService} from '../../shared/user.service';
import {BlogService} from '../../shared/blog.service';

@Component({
  selector: 'app-listblogs',
  templateUrl: './listblogs.component.html',
  styleUrls: ['../admin/admin.component.css']
})
export class ListblogsComponent implements OnInit {

  blogs;
  title: any;


  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogService.getallblogs()
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
  Search(){
    if (this.title === '') {
      this.ngOnInit();
    }else {
      this.blogs = this.blogs.filter(res => {
        return res.title.toLowerCase().match(this.title.toLowerCase());
      });
    }
  }

}
