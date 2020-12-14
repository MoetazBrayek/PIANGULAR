import {Component, OnInit, Input} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {BlogService} from '../../shared/blog.service';

@Component({
  selector: 'app-comments-child',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() id: string;

  constructor(private formP: FormBuilder,
              private router: ActivatedRoute, public blogService: BlogService) {
  }

  ngOnInit() {
  }

}
