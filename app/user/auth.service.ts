import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { IUser } from './user.model';

@Injectable()
export class AuthService {
  currentUser: IUser;

  constructor(private _http: Http) {}

  public loginUser(userName: string, password: string): void {
    const headers = new Headers({'Content-Type': 'appication/json'});
    const options = new RequestOptions({headers: headers});
    const loginInfo = {
      username: userName,
      password: password
    };

    this._http.post('/api/login', JSON.stringify(loginInfo), options)
      .do(response => {
        if (response) {
          this.currentUser = <IUser>response.json().user;
        }
      })
      .catch((error: Response) => {
        return Observable.of(false);
      });
  }

  public isAuthenticated(): boolean {
    return !!this.currentUser;
  }

  public updateCurrentUser(firstName: string, lastName: string): void {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
  }

  private _handleError(error: Response): Observable {
    return Observable.throw(error.statusText);
  }
}
