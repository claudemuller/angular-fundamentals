import { Injectable } from '@angular/core';

import { IUser } from './user.model';

@Injectable()
export class AuthService {
  currentUser: IUser;

  public loginUser(userName: string, password: string): void {
    this.currentUser = {
      id: 1,
      userName: userName,
      firstName: 'John',
      lastName: 'Papa'
    };
  }

  public isAuthenticated(): boolean {
    return !!this.currentUser;
  }
}
