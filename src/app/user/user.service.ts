import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { User } from './user/user.model';


@Injectable()
export class UserService {
  private readonly _url = '/API/users';
  public _user = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient, private router: Router, private authenticationService: AuthenticationService) {
    this.updateScreen();

  }

  private getProfile(username: String): Observable<User> {
    return this.http
      .get("${this._url}/${username}")
      .pipe(map((item: any): User =>
        new User(item.username))
      );
  }


  updateProfile(user: User): Observable<User> {

    return this.http
      .put("${this._url}/update/${user.username}", user.toJSON())
      .pipe(map((item: any): User =>
        new User(item.username))
      );


  }


  updateScreen() {
    if (!this.authenticationService.user$.value) {
      this._user.next(null)
      this.router.navigate(['/login']);
    }
    else {
       this.getProfile(this.authenticationService.user$.value).subscribe(item => {
        this._user.next(item);
      })
    }


  }

}