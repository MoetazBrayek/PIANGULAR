import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../../shared/user.service';
import {Router} from '@angular/router';
import {User} from '../../model/user.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users: User[];
  form: FormGroup;
  emailMsg: string;
  PasswordMsg: string;
  erroMsg: string;


  constructor(private fb: FormBuilder, public userService: UserService,
              private router: Router) {
  }
  loginchek(data) {
    this.userService.getalluser().subscribe(
      resp => {
        this.users = resp;
        const logeed = data.value;
        for (const user of this.users) {
          if (logeed.email === ''){
            this.emailMsg = 'your email  is missing !';
          } else if (logeed.password === ''){
            this.emailMsg = '';
            this.PasswordMsg = 'your email  is missing !';
          }
          else if (user.email === logeed.email && user.password === logeed.password && user.role === 'admin' ) {
            this.router.navigate(['admin']);
          }
          else if (user.email === logeed.email && user.password === logeed.password) {
            this.router.navigate(['home']);
          }
          else{
            this.PasswordMsg = '';
            this.erroMsg = 'your credential is wrong !!';
          }
        }
      }
    );
  }

  ngOnInit(): void {
  }




}
