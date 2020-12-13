import { Component, OnInit, ElementRef } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    public routernow: string;

    constructor(private router: Router) {
    }

    ngOnInit() {
    }
  isRegister() {
    // return true if the current page is home
      return this.router.url.match('^/home$');
      }
  isComment() {
    // return true if the current page is home
    return this.router.url.match('^/shw*');
  }
  isAdd() {
    // return true if the current page is login
    return this.router.url.match('^/add');
  }
  isLoginView() {
    // return true if the current page is login
    return this.router.url.match('^/hox');
  }

}
