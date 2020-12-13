import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Blog} from '../model/blog.model';
import {Observable} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private id;

  constructor(private http: HttpClient, private router: Router, private  rout: ActivatedRoute) {
  }

  getUserbyid(id: number) {
    return this.http.get('http://localhost:3000/blogs/' + id);
  }

  deleteuser(id: number) {
    return this.http.delete('http://localhost:3000/blogs/' + id);
  }

  updateUser(data: any, id: any): Observable<any> {
    const url: string = 'http://localhost:3000/blogs/' + id;
    return this.http.put(url, data);
  }
  getallcmnts() {

    return this
      .http.get<any>('http://localhost:3000/comments/');
  }

  getalluser() {

    return this
      .http.get<any>('http://localhost:3000/blogs/');
  }

  getallnews() {

    return this.http.get<any>('http://localhost:4200/api');
  }
  addcmnt(data: any): Observable<any> {
    console.log(data);
    const url = 'http://localhost:3000/comments/';
    return this.http.post(url, data);
  }

  adduser(data: any): Observable<any> {
    console.log(data);
    const url = 'http://localhost:3000/blogs';
    return this.http.post(url, data);
  }

  submit(form) {
    this.adduser(form)
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
