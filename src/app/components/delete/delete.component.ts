import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../shared/user.service';
import {BlogService} from '../../shared/blog.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  id;
  constructor(private blogService: BlogService,
              private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.blogService
      .deleteblog(this.id)
      .subscribe(data => this.router.navigate(['admin/listblog']));

  }
}
