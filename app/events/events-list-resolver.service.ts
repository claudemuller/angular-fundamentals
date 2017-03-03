import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { EventService } from './shared/event.service';

@Injectable()
export class EventsListResolverService implements Resolve<any> {
  constructor(private _eventService: EventService) {}

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>|Promise<any>|any {

    return this._eventService.getEvents().map(events => events);
  }

}
