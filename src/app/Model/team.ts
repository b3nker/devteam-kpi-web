import {Collaborator, CollaboratorAdapter} from './collaborator';
import {Injectable} from '@angular/core';
import {Adapter} from '../Service/adapter';

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
  static adapt(item: any): Team {
    // tslint:disable-next-line:no-shadowed-variable
    const arrayOfCollaborators = item.collaborators.map(item => {
      return CollaboratorAdapter.adapt(item);
    });
    return new Team(
      item.name,
      arrayOfCollaborators
    );
  }

  adapt(item: any): Team {
    // tslint:disable-next-line:no-shadowed-variable
    const arrayOfCollaborators = item.collaborators.map(item => {
      return CollaboratorAdapter.adapt(item);
    });
    return new Team(
        item.name,
        arrayOfCollaborators
    );
  }
}
