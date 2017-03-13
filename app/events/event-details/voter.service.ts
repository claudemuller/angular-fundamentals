import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { ISession } from '../shared/event.model';
import { Observable } from 'rxjs';

@Injectable()
export class VoterService {
  constructor(private _http: Http) {}

  public addVoter(eventId: number, session: ISession, voterName: string): void {
    session.voters.push(voterName);

    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers});
    const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;

    this._http.post(url, JSON.stringify({}), options)
      .catch(this._handleError)
      .subscribe();
  }

  public deleteVoter(eventId: number, session: ISession, voterName: string): void {
    session.voters = session.voters.filter(voter => voter !== voterName);

    this._http.delete(`/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`)
      .catch(this._handleError)
      .subscribe();
  }

  public userHasVoted(session: ISession, voterName: string): boolean {
    return session.voters.some(voter => voter === voterName);
  }

  private _handleError(error: Response): Observable {
    return Observable.throw(error.statusText);
  }
}
