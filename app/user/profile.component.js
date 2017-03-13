"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var auth_service_1 = require('./auth.service');
var toastr_service_1 = require('../common/toastr.service');
var ProfileComponent = (function () {
    function ProfileComponent(_authService, _toastr, _routes) {
        this._authService = _authService;
        this._toastr = _toastr;
        this._routes = _routes;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.firstName = new forms_1.FormControl(this._authService.currentUser.firstName, [forms_1.Validators.required, forms_1.Validators.pattern('[a-zA-Z].*')]);
        this.lastName = new forms_1.FormControl(this._authService.currentUser.lastName, forms_1.Validators.required);
        this.profileForm = new forms_1.FormGroup({
            firstName: this.firstName,
            lastName: this.lastName
        });
    };
    ProfileComponent.prototype.saveProfile = function (formValues) {
        if (this.profileForm.valid) {
            this._authService.updateCurrentUser(formValues.firstName, formValues.lastName);
            this._toastr.success('Profile Saved');
        }
    };
    ProfileComponent.prototype.validateFirstName = function () {
        return this.firstName.valid || this.firstName.untouched;
    };
    ProfileComponent.prototype.validateLastName = function () {
        return this.lastName.valid || this.lastName.untouched;
    };
    ProfileComponent.prototype.cancel = function () {
        this._routes.navigate(['events']);
    };
    ProfileComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/user/profile.component.html',
            styles: ["\n    em {\n      float: right;\n      color: #e05c65;\n      padding-left: 10px;\n    }\n    .error input {background-color: #e3c3c5;}\n    .error ::-webkit-input-placeholder {color: #999;}\n    .error ::-moz-placeholder {color: #999;}\n    .error :-moz-placeholder {color: #999;}\n    .error :-ms-input-placeholder {color: #999;}\n  "]
        }),
        __param(1, core_1.Inject(toastr_service_1.TOASTR_TOKEN)), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, Object, (typeof (_a = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _a) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a;
}());
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map