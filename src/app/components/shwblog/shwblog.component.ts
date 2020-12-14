import { Component, OnInit } from '@angular/core';
import {BlogService} from '../../shared/blog.service';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-shwblog',
  templateUrl: './shwblog.component.html',
  styleUrls: ['./shwblog.component.css']
})
export class ShwblogComponent implements OnInit {
  id;
  blog;
  cmnts;
  form: FormGroup;

  constructor(private formP: FormBuilder, public blogService: BlogService,
              private router: ActivatedRoute) {
    this.form = this.formP.group({
      name: ['', Validators.required],
      content: ['', Validators.required],
      blogid: ['', Validators.required],
    });
}

  ngOnInit(): void {
    this.id = this.router.snapshot.paramMap.get('id');
    console.log(this.id);
    this.blogService.getBlogbyid(this.id).subscribe((result) => {
      this.blog = result;
    });
    this.blogService.getallcmnts().subscribe((res) => {
      this.cmnts = res;
    });
  }

}
