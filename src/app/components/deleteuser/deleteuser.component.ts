import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../shared/user.service';
import {BlogService} from '../../shared/blog.service';

@Component({
  selector: 'app-delete',
  templateUrl: './deleteuser.component.html',
  styleUrls: ['../admin/admin.component.css']
})
export class DeleteuserComponent implements OnInit {
  id;
  constructor(private userService: UserService,
              private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.userService
      .deleteuser(this.id)
      .subscribe(data => this.router.navigate(['admin/listuser']));

  }
}
