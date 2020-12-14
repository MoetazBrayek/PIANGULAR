import { Component, OnInit } from '@angular/core';
import {UserService} from '../../shared/user.service';
import {BlogService} from '../../shared/blog.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.component.html',
  styleUrls: ['../admin/admin.component.css']
})
export class ListusersComponent implements OnInit {

  constructor(private userService: UserService, private route: ActivatedRoute) { }
  users;
  id;
  email: any;
  key = 'id';
  reverse = false;

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.userService.getalluser()
      .subscribe(
        (data) => {
          this.users = data;
        },
        errors => {
          console.log(errors);
          alert(errors.status);
        },
      )
    ;
  }
  block(){
  }
  Search(){
    if (this.email === '') {
    this.ngOnInit();
    }else {
      this.users = this.users.filter(res => {
        return res.email.toLowerCase().match(this.email.toLowerCase());
      });
    }
  }
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }

}
