import {Collaborator, CollaboratorAdapter} from './collaborator';
import {Injectable} from '@angular/core';
import {Adapter} from './adapter';

export class Team {
  private _name: string;
  private _collaborators: Collaborator[];


  get name(): string {
    return this._name;
  }

  get collaborators(): Collaborator[] {
    return this._collaborators;
  }

  constructor(name: string, collaborators: Collaborator[]){
    this._name = name;
    this._collaborators = collaborators;
  }
}

@Injectable({
  providedIn: 'root',
})
export class TeamAdapter implements Adapter<Team>{
  adapt(item: any): Team {
    // tslint:disable-next-line:no-shadowed-variable
    const arrayOfCollaborators = item.collaborators.map(item => {
      // Essayer de remplacer par une instance de CollaboratorAdapter
      return new Collaborator(
        item.accountId,
        item.firstName,
        item.name,
        item.emailAddress,
        item.velocity,
        item.workedTime,
        item.estimatedTime,
        item.loggedTime,
        item.remainingTime,
        item.nbTickets,
        item.nbDone,
        item.nbInProgress,
        item.nbToDo,
        item.spTotal,
        item.spInProgress,
        item.spToDo,
        item.spDone,
        item.role
      );
    });
    return new Team(
      item.name,
      arrayOfCollaborators);
  }
}
