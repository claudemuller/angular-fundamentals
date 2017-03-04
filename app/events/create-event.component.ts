import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { EventService } from './shared/event.service';

@Component({
  templateUrl: 'app/events/create-event.component.html',
  styles: [`
    em {
      float: right;
      color: #e05c65;
      padding-left: 10px;
    }
    .error input {background-color: #e3c3c5;}
    .error ::-webkit-input-placeholder {color: #999;}
    .error ::-moz-placeholder {color: #999;}
    .error :-moz-placeholder {color: #999;}
    .error :-ms-input-placeholder {color: #999;}
  `]
})
export class CreateEventComponent {
  public isDirty: boolean = true;

  constructor(private _routes: Router,
              private _eventService: EventService) {}

  public saveEvent(formValues: Object): void {
    this._eventService.saveEvent(formValues);
    this.isDirty = false;
    this._routes.navigate(['/events']);
  }

  public cancel(): void {
    this._routes.navigate(['/events']);
  }
}
