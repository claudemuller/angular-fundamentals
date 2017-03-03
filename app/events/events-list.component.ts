import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';

@Component({
  template: `
    <div>
      <h1>Upcoming Angular 2 Events</h1>
      <hr>
      <div class="row">
        <div class="col-md-5" *ngFor="let event of events">
          <event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></event-thumbnail>
        </div>
      </div>
    </div>
  `
})
export class EventsListComponent implements OnInit {
  public events: Array<Object>;

  constructor(private _eventService: EventService,
              private _toastrService: ToastrService) {
  }

  public ngOnInit(): void {
    this.events = this._eventService.getEvents();
  }

  public handleThumbnailClick(eventName: string): void {
    this._toastrService.success(eventName);
  }
}
