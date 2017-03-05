"use strict";
var index_1 = require('./events/index');
var _404_component_1 = require('./errors/404.component');
var create_session_component_1 = require('./events/event-details/create-session.component');
exports.appRoutes = [
    { path: 'events/new', component: index_1.CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events', component: index_1.EventsListComponent, resolve: { events: index_1.EventsListResolverService } },
    { path: 'events/:id', component: index_1.EventDetailsComponent, canActivate: [index_1.EventRouteActivatorService] },
    { path: 'events/session/new', component: create_session_component_1.CreateSessionComponent },
    { path: '404', component: _404_component_1.Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: 'user', loadChildren: 'app/user/user.module#UserModule' }
];
//# sourceMappingURL=routes.js.map