import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
// import { Observable } from 'rxjs/Rx/Observable';

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

    console.log(loginInfo);
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

  public updateCurrentUser(firstName: string, lastName: string): Observable {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;

    const headers = new Headers({'Content-Type': 'appication/json'});
    const options = new RequestOptions({headers: headers});

    return this._http.put(`/api/users/${this.currentUser.id}`, JSON.stringify(this.currentUser), options);
  }

  public checkAuthenticationStatus(): void {
    return this._http.get('/api/currentIdentity').map((response: any) => {
        if (response._body) {
          return response.json();
        } else {
          return {};
        }
      })
      .do(currentUser => {
        if (!!currentUser.userName) {
          this.currentUser = currentUser;
        }
      })
      .subscribe();
  }

  public logout(): Observable {
    this.currentUser = undefined;

    const headers = new Headers({'Content-Type': 'appication/json'});
    const options = new RequestOptions({headers: headers});

    return this._http.post('/api/logout', JSON.stringify({}), options);
  }

  private _handleError(error: Response): Observable {
    return Observable.throw(error.statusText);
  }
}
