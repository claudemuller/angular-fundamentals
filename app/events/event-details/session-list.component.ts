import { Component, Input, OnChanges } from '@angular/core';

import { ISession } from '../shared/event.model';

import { VoterService } from './voter.service';
import { AuthService } from '../../user/auth.service';

@Component({
  selector: 'session-list',
  templateUrl: 'app/events/event-details/session-list.component.html'
})
export class SessionListComponent implements OnChanges {
  @Input() sessions: ISession[];
  @Input() filterBy: string;
  @Input() sortBy: string;

  public visibleSessions: Array<ISession> = [];

  constructor(private _voterService: VoterService,
              private _authService: AuthService) {}

  ngOnChanges(): void {
    if (this.sessions) {
      this.filterSessions(this.filterBy);
      this.sortBy === 'name' ? this.visibleSessions.sort(this.sortByNameAsc) : this.visibleSessions.sort(this.sortByVotesDesc);
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

  public sortByNameAsc(s1: ISession, s2: ISession): number {
    if (s1.name > s2.name) return 1;
    else if (s1.name === s2.name) return 0;
    else return -1;
  }

  public sortByVotesDesc(s1: ISession, s2: ISession): number {
    return s2.voters.length - s1.voters.length;
  }

  public toggleVote(session: ISession): void {
    if (this.userHasVoted(session)) this._voterService.deleteVoter(session, this._authService.currentUser.userName);
    else this._voterService.addVoter(session, this._authService.currentUser.userName);

    if (this.sortBy === 'votes') this.visibleSessions.sort(this.sortByVotesDesc);
  }

  public userHasVoted(session: ISession): boolean {
    return this._voterService.userHasVoted(session, this._authService.currentUser.userName);
  }
}
