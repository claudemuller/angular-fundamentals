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
var EventThumbnailComponent = (function () {
    function EventThumbnailComponent() {
    }
    EventThumbnailComponent.prototype.getStartTimeClass = function () {
        if (this.event && this.event.time === '8:00 am')
            return ['green bold'];
        return [];
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], EventThumbnailComponent.prototype, "event", void 0);
    EventThumbnailComponent = __decorate([
        core_1.Component({
            selector: 'event-thumbnail',
            template: "\n    <div class=\"well hoverwell thumbnail\" [routerLink]=\"['/events', event.id]\">\n      <h2>{{ event?.name | uppercase}}</h2>\n      <div>Date: {{ event?.date | date: 'shortDate' }}</div>\n      <div [ngClass]=\"getStartTimeClass()\" [ngSwitch]=\"event?.time\">\n        Time: {{ event?.time }}\n        <span *ngSwitchCase=\"'8:00 am'\">(Early start)</span>\n        <span *ngSwitchCase=\"'10:00 am'\">(Late start)</span>\n        <span *ngSwitchDefault>(Normal start)</span>\n      </div>\n      <div>Price: {{ event?.price | currency: 'ZAR': 'true' }}</div>\n      <div *ngIf=\"event?.location\">\n        <span>Location: {{ event?.location.address }}</span>\n        <span class=\"pad-left\">{{ event?.location.city }}, {{ event?.location.country }}</span>\n      </div>\n    </div>\n  ",
            styles: [
                '.pad-left {margin-left: 10px;}',
                '.well div {color: #bbb;}',
                '.thumbnail {min-height: 210px;}',
                '.green {color: #003300 !important;}',
                '.bold {font-weight: bold;}'
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], EventThumbnailComponent);
    return EventThumbnailComponent;
}());
exports.EventThumbnailComponent = EventThumbnailComponent;
//# sourceMappingURL=event-thumbnail.component.js.map