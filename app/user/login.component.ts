import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';

@Component({
  templateUrl: 'app/user/login.component.html',
  styles: [`
    em {
      float: right;
      color: #e05c65;
      padding-left: 10px;
    }
  `]
})
export class LoginComponent {
  constructor(private _authService: AuthService,
              private _routes: Router) {}

  public login(formValues): void {
    this._authService.loginUser(formValues.userName, formValues.password);
    this._routes.navigate(['events']);
  }

  public cancel(): void {
    this._routes.navigate(['events']);
  }
}
