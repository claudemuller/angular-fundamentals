import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';
import { TOASTR_TOKEN, Toastr } from '../common/toastr.service';

@Component({
  templateUrl: 'app/user/profile.component.html',
  styles: [`
    em {
      float: right;
      color: #e05c65;
      padding-left: 10px;
    }
    .error input {background-color: #e3c3c5;}
    .error ::-webkit-input-placeholder {color: #999;}
    .error ::-moz-placeholder {color: #999;}
    .error :-moz-placeholder {color: #999;}
    .error :-ms-input-placeholder {color: #999;}
  `]
})
export class ProfileComponent implements OnInit {
  public profileForm: FormGroup;
  public firstName: FormControl;
  public lastName: FormControl;

  constructor(private _authService: AuthService,
              @Inject(TOASTR_TOKEN) private _toastr: Toastr,
              private _routes: Router) {}

  public ngOnInit(): void {
    this.firstName = new FormControl(this._authService.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.lastName = new FormControl(this._authService.currentUser.lastName, Validators.required);
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    })
  }

  public saveProfile(formValues): void {
    if (this.profileForm.valid) {
      this._authService.updateCurrentUser(formValues.firstName, formValues.lastName)
        .subscribe(() => {
          this._toastr.success('Profile Saved');
        });
    }
  }

  public validateFirstName(): boolean {
    return this.firstName.valid || this.firstName.untouched;
  }

  public validateLastName(): boolean {
    return this.lastName.valid || this.lastName.untouched;
  }

  public cancel(): void {
    this._routes.navigate(['events']);
  }
}
