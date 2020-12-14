import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../model/user.model';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {environment} from '../../environments/environment';
const api = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient, private router: Router) {
  }

  getUserbyid(id: number) {
    return this.http.get(api + '/users' + id);
  }

  deleteuser(id: number) {
    return this.http.delete(api + '/users' + id);
  }

  updateUser(data: any, id: any): Observable<any> {
    const url: string = api + '/users' + id;
    return this.http.put(url, data);
  }


  getalluser() {

    return this
      .http.get<any>(api + '/users');
  }
  login(data: any): Observable<any> {
    console.log(data);
    return this.http.post(api + '/users', data);
  }

  adduser(data: any): Observable<any> {
    return this.http.post(api + '/users', data);
  }

  submit(form) {
    this.adduser(form)
      .subscribe(() => {
          this.router.navigate(['/']);

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
  loginsubmit(form) {
    this.login(form)
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
