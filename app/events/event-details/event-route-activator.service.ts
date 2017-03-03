import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { EventService } from '../shared/event.service';

@Injectable()
export class EventRouteActivatorService implements CanActivate {
  constructor(private _eventService: EventService,
              private _routes: Router) {

  }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean {
    const eventExists = !!this._eventService.getEvent(+route.params['id']);

    if (!eventExists) this._routes.navigate(['/404']);

    return eventExists;
  }
}
