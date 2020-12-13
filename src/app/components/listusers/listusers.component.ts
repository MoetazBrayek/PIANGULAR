import { Component, OnInit } from '@angular/core';
import {UserService} from '../../shared/user.service';

@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.component.html',
  styleUrls: ['./listusers.component.css']
})
export class ListusersComponent implements OnInit {
  users;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
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

}
