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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var auth_service_1 = require('./auth.service');
var LoginComponent = (function () {
    function LoginComponent(_authService, _routes) {
        this._authService = _authService;
        this._routes = _routes;
        this.loginInvalid = false;
    }
    LoginComponent.prototype.login = function (formValues) {
        var _this = this;
        this._authService.loginUser(formValues.userName, formValues.password)
            .subscribe(function (response) {
            if (!response) {
                _this.loginInvalid = true;
            }
            else {
                _this._routes.navigate(['events']);
            }
        });
    };
    LoginComponent.prototype.cancel = function () {
        this._routes.navigate(['events']);
    };
    LoginComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/user/login.component.html',
            styles: ["\n    em {\n      float: right;\n      color: #e05c65;\n      padding-left: 10px;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, (typeof (_a = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _a) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map