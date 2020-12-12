import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../../shared/user.service';
import {Router} from '@angular/router';
import {User} from '../../model/user.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', './login.component2.css']
})
export class LoginComponent implements OnInit {
  users: User[];
  form: FormGroup;
  errorMsg: string;

  constructor(private fb: FormBuilder, public userService: UserService,
              private router: Router) {
  }
  loginchek(data) {
    this.userService.getalluser().subscribe(
      resp => {
        this.users = resp;
        const logeed = data.value;
        for (const user of this.users) {
          if (user.email === logeed.username && user.password === logeed.password) {
            this.router.navigate(['home']);
          }
          if (user.email === logeed.username && user.password === logeed.password) {
          console.log('problem');
          }
        }
      }
    );
  }

  ngOnInit(): void {
  }




}
