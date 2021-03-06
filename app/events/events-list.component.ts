import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EventService } from './shared/event.service';

import { IEvent } from './shared/event.model';

@Component({
  template: `
    <div>
      <h1>Upcoming Angular 2 Events</h1>
      <hr>
      <div class="row">
        <div class="col-md-5" *ngFor="let event of events">
          <event-thumbnail [event]="event"></event-thumbnail>
        </div>
      </div>
    </div>
  `
})
export class EventsListComponent implements OnInit {
  public events: Array<IEvent>;

  constructor(private _eventService: EventService,
              private _routes: ActivatedRoute) {
  }

  public ngOnInit(): void {
    this.events = this._routes.snapshot.data['events'];
  }
}
