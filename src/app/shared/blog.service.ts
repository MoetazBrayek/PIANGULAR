import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Blog} from '../model/blog.model';
import {Observable} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {environment} from '../../environments/environment';
const api = environment.apiUrl;
const apiblog = api + '/blogs/';
@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private id;

  constructor(private http: HttpClient, private router: Router, private  rout: ActivatedRoute) {
  }

  getBlogbyid(id: number) {
    return this.http.get(apiblog + id);
  }

  deleteblog(id: number) {
    return this.http.delete(apiblog + id);
  }

  updateBlog(data: any, id: any): Observable<any> {
    return this.http.put(apiblog + id, data);
  }
  getallcmnts() {

    return this
      .http.get<any>(api + '/comments/');
  }

  getallblogs() {

    return this
      .http.get<any>(apiblog);
  }

  getallnews() {
    // move it to env
    return this.http.get<any>('http://localhost:4200/api');
  }
  addcmnt(data: any): Observable<any> {
    return this.http.post(api + '/comments/', data);
  }

  addblog(data: any): Observable<any> {
    console.log(data);
    return this.http.post(apiblog, data);
  }

  submit(form) {
    this.addblog(form)
      .subscribe(() => {
          this.router.navigate(['/home']);

        },
        (error) => {
          switch (error.status) {
            case 404: {
              console.log('Not Found');
              break;
            }
            case 403: {
              console.log('Access Denied');
              break;
            }
            case 500: {
              console.log('Internal Server Error: ');
              break;
            }
            case 400: {
              console.log('Problem Of Register Change Info');
            }
          }
        }
      );
  }
  submitcmnt(form) {

    this.addcmnt(form)
      .subscribe(() => {
          this.router.navigate(['/home']);

        },
        (error) => {
          switch (error.status) {
            case 404: {
              console.log('Not Found');
              break;
            }
            case 403: {
              console.log('Access Denied');
              break;
            }
            case 500: {
              console.log('Internal Server Error: ');
              break;
            }
            case 400: {
              console.log('Problem Of Register Change Info');
            }
          }
        }
      );
  }


}
