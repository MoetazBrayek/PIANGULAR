import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BlogService} from '../../shared/blog.service';
import {ActivatedRoute, Router} from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['../admin/admin.component.css']
})
export class UpdateComponent implements OnInit {
  id;
  blog;
  public Editor = ClassicEditor;
  form: FormGroup;
  errorMsg: string;
  public imageSrc: string;

  constructor(private fb: FormBuilder, public blogService: BlogService,
              private router: Router, private route: ActivatedRoute) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      image: ['', Validators.required],
      fileSource: ['', Validators.required],

    });

  }


  onFileChange(event) {

    const reader = new FileReader();


    if (event.target.files && event.target.files.length) {

      const [image] = event.target.files;

      reader.readAsDataURL(image);


      reader.onload = () => {


        this.imageSrc = reader.result as string;


        this.form.patchValue({

          fileSource: reader.result

        });

      };


    }
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.blogService.getBlogbyid(this.id).subscribe((result) => {
      this.blog = result;
      this.form.patchValue(this.blog);
    });
  }
  update() {
    this.blogService
      .updateBlog(this.form.value, this.id)
      .subscribe(() => {
        this.router.navigate(['/home']);
      });

  }
}
