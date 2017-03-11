import { Component } from '@angular/core';

import { ISession } from '../events/shared/event.model';

import { AuthService } from '../user/auth.service';
import { EventService } from '../events/shared/event.service';

@Component({
  selector: 'nav-bar',
  templateUrl: 'app/nav/navbar.component.html',
  styles: [
    '.nav.navbar-nav {font-size: 15px;}',
    '#searchForm {margin-right: 100px;}',
    '@media (max-width: 1200px) {#searchForm {display: none;}}',
    'li > a.active {color: #f97924;}'
  ]
})
export class NavbarComponent {
  public searchTerm: string = '';
  public foundSessions: Array<ISession>;

  constructor(private _authService: AuthService,
              private _eventService: EventService) {}

  public searchSessions(searchTerm: string): void {
    this._eventService.searchSessions(searchTerm).subscribe(sessions => {
      this.foundSessions = sessions;
    });
  }
}
