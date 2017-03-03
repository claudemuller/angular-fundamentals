import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';

@Component({
  templateUrl: '/app/events/event-details/event-details.component.html',
  styles: [
    '.container {padding: 0 20px;}',
    '.event-image {height: 100px;}'
  ]
})
export class EventDetailsComponent implements OnInit {
  public event: Object;

  constructor(private _eventService: EventService) {}

  public ngOnInit(): void {
    this.event = this._eventService.getEvent(1);
  }
}
