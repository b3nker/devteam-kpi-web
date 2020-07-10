import {Injectable} from '@angular/core';
import {Adapter} from '../Service/adapter';


export class Collaborator {
    private _accountId: string;
    private _firstName: string;
    private _name: string;
    private _emailAddress: string;
    private _velocity: number;
    private _totalWorkingTime: number;
    private _estimatedTime: number;
    private _loggedTime: number;
    private _remainingTime: number;
    private _nbTickets: number;
    private _nbDone: number;
    private _nbInProgress: number;
    private _nbToDo: number;
    private _spTotal: number;
    private _spDone: number;
    private _spInProgress: number;
    private _spToDo: number;
    private _role: string;
    private _availableTime: number;

    get availableTime(): number {
        return this._availableTime;
    }

    get role(): string {
        return this._role;
    }

    get spTotal(): number {
        return this._spTotal;
    }

    get spDone(): number {
        return this._spDone;
    }

    get spInProgress(): number {
        return this._spInProgress;
    }

    get spToDo(): number {
        return this._spToDo;
    }

    get remainingTime(): number {
        return this._remainingTime;
    }

    get accountId(): string {
        return this._accountId;
    }

    get firstName(): string {
        return this._firstName;
    }

    get name(): string {
        return this._name;
    }

    get emailAddress(): string {
        return this._emailAddress;
    }

    get velocity(): number {
        return this._velocity;
    }

    get totalWorkingTime(): number {
        return this._totalWorkingTime;
    }

    get estimatedTime(): number {
        return this._estimatedTime;
    }

    get loggedTime(): number {
        return this._loggedTime;
    }

    get nbTickets(): number {
        return this._nbTickets;
    }

    get nbDone(): number {
        return this._nbDone;
    }

    get nbInProgress(): number {
        return this._nbInProgress;
    }

    get nbToDo(): number {
        return this._nbToDo;
    }

// tslint:disable-next-line:typedef
    getFullName() {
        return this._firstName + ' ' + this._name;
    }

    constructor(accountId: string, firstName: string, name: string, emailAddress: string, velocity: number, workedTime: number,
                estimatedTime: number, loggedTime: number, remainingTime: number, nbTickets: number, nbDone: number, nbInProgress: number,
                nbToDo: number, spTotal: number, spDone: number, spInProgress: number, spToDo: number, role: string, availableTime: number) {
        this._accountId = accountId;
        this._firstName = firstName;
        this._name = name;
        this._emailAddress = emailAddress;
        this._velocity = velocity;
        this._totalWorkingTime = workedTime;
        this._estimatedTime = estimatedTime;
        this._loggedTime = loggedTime;
        this._remainingTime = remainingTime;
        this._nbTickets = nbTickets;
        this._nbDone = nbDone;
        this._nbInProgress = nbInProgress;
        this._nbToDo = nbToDo;
        this._spTotal = spTotal;
        this._spDone = spDone;
        this._spInProgress = spInProgress;
        this._spToDo = spToDo;
        this._role = role;
        this._availableTime = availableTime;
    }
}

@Injectable({
    providedIn: 'root',
})
export class CollaboratorAdapter implements Adapter<Collaborator> {
    static adapt(item: any): Collaborator {
        return new Collaborator(
            item.accountId,
            item.firstName,
            item.name,
            item.emailAddress,
            item.velocity,
            item.totalWorkingTime,
            item.estimatedTime,
            item.loggedTime,
            item.remainingTime,
            item.nbTickets,
            item.nbDone,
            item.nbInProgress,
            item.nbToDo,
            item.spTotal,
            item.spToDo,
            item.spInProgress,
            item.spDone,
            item.role,
            item.availableTime
        );
    }

    adapt(item: any): Collaborator {
        return new Collaborator(
            item.accountId,
            item.firstName,
            item.name,
            item.emailAddress,
            item.velocity,
            item.totalWorkingTime,
            item.estimatedTime,
            item.loggedTime,
            item.remainingTime,
            item.nbTickets,
            item.nbDone,
            item.nbInProgress,
            item.nbToDo,
            item.spTotal,
            item.spToDo,
            item.spInProgress,
            item.spDone,
            item.role,
            item.availableTime
        );
    }
}

class CollaboratorAdapterImpl extends CollaboratorAdapter {
}
