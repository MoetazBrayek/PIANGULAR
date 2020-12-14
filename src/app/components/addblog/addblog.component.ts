import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BlogService} from '../../shared/blog.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-addblog',
  templateUrl: './addblog.component.html',
  styleUrls: ['../admin/admin.component.css']
})
export class AddblogComponent implements OnInit {
  public Editor = ClassicEditor;
  form: FormGroup;
  errorMsg: string;
  public imageSrc: string;

  constructor(private fb: FormBuilder, public blogService: BlogService,
              private router: Router) {
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
ngOnInit() {
}
}
