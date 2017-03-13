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
var event_service_1 = require('../shared/event.service');
var EventDetailsComponent = (function () {
    function EventDetailsComponent(_eventService, _routes) {
        this._eventService = _eventService;
        this._routes = _routes;
        this._resetState();
    }
    EventDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._routes.data.forEach(function (data) {
            _this.event = data['event'];
            _this._resetState();
        });
    };
    EventDetailsComponent.prototype.addSession = function () {
        this.addMode = true;
    };
    EventDetailsComponent.prototype.saveNewSession = function (session) {
        var nextId = Math.max.apply(null, this.event.sessions.map(function (s) { return s.id; }));
        session.id = nextId + 1;
        this.event.sessions.push(session);
        this._eventService.saveEvent(this.event).subscribe();
        this.addMode = false;
    };
    EventDetailsComponent.prototype.cancelAddSession = function () {
        this.addMode = false;
    };
    EventDetailsComponent.prototype._resetState = function () {
        this.addMode = false;
        this.filterBy = 'all';
        this.sortBy = 'votes';
    };
    EventDetailsComponent = __decorate([
        core_1.Component({
            templateUrl: '/app/events/event-details/event-details.component.html',
            styles: [
                '.container {padding: 0 20px;}',
                '.event-image {height: 100px;}',
                '.a {cursor: pointer;}'
            ]
        }), 
        __metadata('design:paramtypes', [event_service_1.EventService, (typeof (_a = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _a) || Object])
    ], EventDetailsComponent);
    return EventDetailsComponent;
    var _a;
}());
exports.EventDetailsComponent = EventDetailsComponent;
//# sourceMappingURL=event-details.component.js.map