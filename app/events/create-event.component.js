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
var event_service_1 = require('./shared/event.service');
var CreateEventComponent = (function () {
    function CreateEventComponent(_routes, _eventService) {
        this._routes = _routes;
        this._eventService = _eventService;
        this.isDirty = true;
    }
    CreateEventComponent.prototype.saveEvent = function (formValues) {
        var _this = this;
        this._eventService.saveEvent(formValues).subscribe(function (event) {
            _this._routes.navigate(['/events']);
            _this.isDirty = false;
        });
        this.isDirty = false;
        this._routes.navigate(['/events']);
    };
    CreateEventComponent.prototype.cancel = function () {
        this._routes.navigate(['/events']);
    };
    CreateEventComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/events/create-event.component.html',
            styles: ["\n    em {\n      float: right;\n      color: #e05c65;\n      padding-left: 10px;\n    }\n    .error input {background-color: #e3c3c5;}\n    .error ::-webkit-input-placeholder {color: #999;}\n    .error ::-moz-placeholder {color: #999;}\n    .error :-moz-placeholder {color: #999;}\n    .error :-ms-input-placeholder {color: #999;}\n  "]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _a) || Object, event_service_1.EventService])
    ], CreateEventComponent);
    return CreateEventComponent;
    var _a;
}());
exports.CreateEventComponent = CreateEventComponent;
//# sourceMappingURL=create-event.component.js.map