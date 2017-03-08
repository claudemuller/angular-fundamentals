import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { EventService } from '../shared/event.service';

import { IEvent, ISession } from '../shared/event.model';

@Component({
  templateUrl: '/app/events/event-details/event-details.component.html',
  styles: [
    '.container {padding: 0 20px;}',
    '.event-image {height: 100px;}',
    '.a {cursor: pointer;}'
  ]
})
export class EventDetailsComponent implements OnInit {
  public event: IEvent;
  public addMode: boolean;
  public filterBy: string;
  public sortBy: string;

  constructor(private _eventService: EventService,
              private _route: ActivatedRoute) {
    this._resetState();
  }

  public ngOnInit(): void {
    this._route.params.forEach((params: Params) => {
      this.event = this._eventService.getEvent(+params['id']);
      this._resetState();
    });
  }

  public addSession(): void {
    this.addMode = true;
  }

  public saveNewSession(session: ISession): void {
    const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
    session.id = nextId + 1;
    this.event.sessions.push(session);
    this._eventService.updateEvent(this.event);
    this.addMode = false;
  }

  public cancelAddSession(): void {
    this.addMode = false;
  }

  private _resetState(): void {
    this.addMode = false;
    this.filterBy = 'all';
    this.sortBy = 'votes';
  }
}
