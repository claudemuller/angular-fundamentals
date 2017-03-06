import { Component, Input, OnChanges } from '@angular/core';

import { ISession } from '../shared/event.model';

@Component({
  selector: 'session-list',
  templateUrl: 'app/events/event-details/session-list.component.html'
})
export class SessionListComponent implements OnChanges {
  @Input() sessions: ISession[];
  @Input() filterBy: string;

  public visibleSessions: Array<ISession> = [];

  ngOnChanges(): void {
    if (this.sessions) {
      this.filterSessions(this.filterBy);
    }
  }

  public filterSessions(filter) {
    if (filter === 'all') {
      this.visibleSessions = this.sessions.slice(0);
    } else {
      this.visibleSessions = this.sessions.filter(session => {
        return session.level.toString().toLocaleLowerCase() === filter;
      });
    }
  }
}
