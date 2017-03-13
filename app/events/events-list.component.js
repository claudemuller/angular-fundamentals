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
var EventsListComponent = (function () {
    function EventsListComponent(_eventService, _routes) {
        this._eventService = _eventService;
        this._routes = _routes;
    }
    EventsListComponent.prototype.ngOnInit = function () {
        this.events = this._routes.snapshot.data['events'];
    };
    EventsListComponent = __decorate([
        core_1.Component({
            template: "\n    <div>\n      <h1>Upcoming Angular 2 Events</h1>\n      <hr>\n      <div class=\"row\">\n        <div class=\"col-md-5\" *ngFor=\"let event of events\">\n          <event-thumbnail [event]=\"event\"></event-thumbnail>\n        </div>\n      </div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [event_service_1.EventService, (typeof (_a = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _a) || Object])
    ], EventsListComponent);
    return EventsListComponent;
    var _a;
}());
exports.EventsListComponent = EventsListComponent;
//# sourceMappingURL=events-list.component.js.map