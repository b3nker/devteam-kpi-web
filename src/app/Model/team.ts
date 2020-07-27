import {Collaborator, CollaboratorAdapter} from './collaborator';
import {Injectable} from '@angular/core';
import {Adapter} from '../Service/adapter';

export class Team {
  private _name: string;
  private _collaborators: Collaborator[];


  constructor(name: string, collaborators: Collaborator[]){
    this._name = name;
    this._collaborators = collaborators;
  }

  set name(value: string) {
    this._name = value;
  }
  get name(): string {
    return this._name;
  }
  set collaborators(value: Collaborator[]) {
    this._collaborators = value;
  }
  get collaborators(): Collaborator[] {
    return this._collaborators;
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
