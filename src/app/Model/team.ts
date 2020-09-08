import {Collaborator} from './collaborator';

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

  get prettyName(): string{
    if (this._name.length <= 0){
      return this._name;
    }
    return this._name.substr(0, 1).toLocaleUpperCase() + this._name.substr(1, this._name.length);
  }
}
