import { Injectable } from '@angular/core';

import { ISession } from '../shared/event.model';

@Injectable()
export class VoterService {
  public addVoter(session: ISession, voterName: string): void {
    session.voters.push(voterName);
  }

  public deleteVoter(session: ISession, voterName: string): void {
    session.voters = session.voters.filter(voter => voter !== voterName);
  }

  public userHasVoted(session: ISession, voterName: string): boolean {
    return session.voters.some(voter => voter === voterName);
  }
}
