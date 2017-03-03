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
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var events_app_components_1 = require('./events-app.components');
var events_list_component_1 = require('./events/events-list.component');
var event_thumbnail_component_1 = require('./events/event-thumbnail.component');
var navbar_component_1 = require('./nav/navbar.component');
var event_details_component_1 = require('./events/event-details/event-details.component');
var create_event_component_1 = require('./events/create-event.component');
var _404_component_1 = require('./errors/404.component');
var event_service_1 = require('./events/shared/event.service');
var toastr_service_1 = require('./common/toastr.service');
var event_route_activator_service_1 = require('./events/event-details/event-route-activator.service');
var events_list_resolver_service_1 = require('./events/events-list-resolver.service');
var checkDirtyState_1 = require('./common/checkDirtyState');
var routes_1 = require('./routes');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                router_1.RouterModule.forRoot(routes_1.appRoutes)
            ],
            declarations: [
                events_app_components_1.EventsAppComponent,
                events_list_component_1.EventsListComponent,
                event_thumbnail_component_1.EventThumbnailComponent,
                navbar_component_1.NavbarComponent,
                event_details_component_1.EventDetailsComponent,
                create_event_component_1.CreateEventComponent,
                _404_component_1.Error404Component
            ],
            providers: [
                event_service_1.EventService,
                toastr_service_1.ToastrService,
                event_route_activator_service_1.EventRouteActivatorService,
                events_list_resolver_service_1.EventsListResolverService,
                {
                    provide: 'canDeactivateCreateEvent',
                    useValue: checkDirtyState_1.checkDirtyState
                }
            ],
            bootstrap: [
                events_app_components_1.EventsAppComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map