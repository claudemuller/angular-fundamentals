"use strict";
var session_list_component_1 = require('./session-list.component');
describe('SessionListComponent', function () {
    var component, mockAuthService, mockVoterService;
    beforeEach(function () {
        component = new session_list_component_1.SessionListComponent(mockAuthService, mockVoterService);
    });
    describe('ngOnChanges', function () {
        it('should filter the session correctly', function () {
            component.sessions = [
                { name: 'session 1', level: 'intermediate' },
                { name: 'session 2', level: 'beginner' },
                { name: 'session 3', level: 'intermediate' }
            ];
            component.filterBy = 'intermediate';
            component.sortBy = 'name';
            component.eventId = 3;
            component.ngOnChanges();
            expect(component.visibleSessions.length).toBe(2);
        });
        it('should sort the session correctly', function () {
            component.sessions = [
                { name: 'session 3', level: 'intermediate' },
                { name: 'session 1', level: 'beginner' },
                { name: 'session 2', level: 'intermediate' }
            ];
            component.filterBy = 'all';
            component.sortBy = 'name';
            component.eventId = 3;
            component.ngOnChanges();
            expect(component.visibleSessions[2].name).toBe('session 2');
        });
    });
});
//# sourceMappingURL=session-list.component.spec.js.map