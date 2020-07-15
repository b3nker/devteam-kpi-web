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
    private _nbDevDone: number;
    private _nbInProgress: number;
    private _nbToDo: number;
    private _spTotal: number;
    private _spAqualifier: number;
    private _spBacAffinage: number;
    private _spEnAttente: number;
    private _spAfaire: number;
    private _spEncours: number;
    private _spAbandonne: number;
    private _spDevTermine: number;
    private _spAvalider: number;
    private _spAlivrer: number;
    private _spATester: number;
    private _spRefuseEnRecette: number;
    private _spValideEnRecette: number;
    private _spLivre: number;
    private _spTermine: number;

    private _role: string;
    private _availableTime: number;


    get nbDevDone(): number {
        return this._nbDevDone;
    }

    get spAqualifier(): number {
        return this._spAqualifier;
    }

    get spBacAffinage(): number {
        return this._spBacAffinage;
    }

    get spEnAttente(): number {
        return this._spEnAttente;
    }

    get spAfaire(): number {
        return this._spAfaire;
    }

    get spEncours(): number {
        return this._spEncours;
    }

    get spAbandonne(): number {
        return this._spAbandonne;
    }

    get spDevTermine(): number {
        return this._spDevTermine;
    }

    get spAvalider(): number {
        return this._spAvalider;
    }

    get spAlivrer(): number {
        return this._spAlivrer;
    }

    get spATester(): number {
        return this._spATester;
    }

    get spRefuseEnRecette(): number {
        return this._spRefuseEnRecette;
    }

    get spValideEnRecette(): number {
        return this._spValideEnRecette;
    }

    get spLivre(): number {
        return this._spLivre;
    }

    get spTermine(): number {
        return this._spTermine;
    }

    get availableTime(): number {
        return this._availableTime;
    }

    get role(): string {
        return this._role;
    }

    get spTotal(): number {
        return this._spTotal;
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

    constructor(accountId: string, firstName: string, name: string, emailAddress: string, velocity: number, totalWorkingTime: number,
                estimatedTime: number, loggedTime: number, remainingTime: number, nbTickets: number, nbDone: number, nbDevDone: number,
                nbInProgress: number, nbToDo: number, spTotal: number, spAqualifier: number, spBacAffinage: number, spEnAttente: number,
                spAfaire: number, spEncours: number, spAbandonne: number, spDevTermine: number, spAvalider: number, spAlivrer: number,
                spATester: number, spRefuseEnRecette: number, spValideEnRecette: number, spLivre: number, spTermine: number, role: string,
                availableTime: number) {
        this._accountId = accountId;
        this._firstName = firstName;
        this._name = name;
        this._emailAddress = emailAddress;
        this._velocity = velocity;
        this._totalWorkingTime = totalWorkingTime;
        this._estimatedTime = estimatedTime;
        this._loggedTime = loggedTime;
        this._remainingTime = remainingTime;
        this._nbTickets = nbTickets;
        this._nbDone = nbDone;
        this._nbDevDone = nbDevDone;
        this._nbInProgress = nbInProgress;
        this._nbToDo = nbToDo;
        this._spTotal = spTotal;
        this._spAqualifier = spAqualifier;
        this._spBacAffinage = spBacAffinage;
        this._spEnAttente = spEnAttente;
        this._spAfaire = spAfaire;
        this._spEncours = spEncours;
        this._spAbandonne = spAbandonne;
        this._spDevTermine = spDevTermine;
        this._spAvalider = spAvalider;
        this._spAlivrer = spAlivrer;
        this._spATester = spATester;
        this._spRefuseEnRecette = spRefuseEnRecette;
        this._spValideEnRecette = spValideEnRecette;
        this._spLivre = spLivre;
        this._spTermine = spTermine;
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
            item.nbDevDone,
            item.nbInProgress,
            item.nbToDo,
            item.spTotal,
            item.spAqualifier,
            item.spBacAffinage,
            item.spEnAttente,
            item.spAfaire,
            item.spEncours,
            item.spAbandonne,
            item.spDevTermine,
            item.spAvalider,
            item.spAlivrer,
            item.spATester,
            item.spRefuseEnRecette,
            item.spValideEnRecette,
            item.spLivre,
            item.spTermine,
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
            item.nbDevDone,
            item.nbInProgress,
            item.nbToDo,
            item.spTotal,
            item.spAqualifier,
            item.spBacAffinage,
            item.spEnAttente,
            item.spAfaire,
            item.spEncours,
            item.spAbandonne,
            item.spDevTermine,
            item.spAvalider,
            item.spAlivrer,
            item.spATester,
            item.spRefuseEnRecette,
            item.spValideEnRecette,
            item.spLivre,
            item.spTermine,
            item.role,
            item.availableTime
        );
    }
}

