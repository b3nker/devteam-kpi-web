import {Team, TeamAdapter} from './team';
import {Injectable} from '@angular/core';
import {Collaborator, CollaboratorAdapter} from './collaborator';
import {Adapter} from '../Service/adapter';

export class Sprint {
    private _name: string;
    private _initialCommitment: number;
    private _finalCommitment: number;
    private _addedWork: number;
    private _timeLeft: number;
    private _totalTime: number;
    private _teams: Team[];
    private _startDate: string;
    private _endDate: string;


    set teams(value: Team[]) {
        this._teams = value;
    }

    get initialCommitment(): number {
        return this._initialCommitment;
    }

    get finalCommitment(): number {
        return this._finalCommitment;
    }

    get addedWork(): number {
        return this._addedWork;
    }

    get name(): string {
        return this._name;
    }

    get timeLeft(): number {
        return this._timeLeft;
    }

    get totalTime(): number {
        return this._totalTime;
    }

    // tslint:disable-next-line:adjacent-overload-signatures
    get teams(): Team[] {
        return this._teams;
    }

    get startDate(): string {
        return this._startDate;
    }

    get endDate(): string {
        return this._endDate;
    }

    constructor(name: string, initialCommitment: number, finalCommitment: number, addedWork: number, timeLeft: number, totalTime: number,
                teams: Team[], startDate: string, endDate: string) {
        this._name = name;
        this._initialCommitment = initialCommitment;
        this._finalCommitment = finalCommitment;
        this._addedWork = addedWork;
        this._timeLeft = timeLeft;
        this._totalTime = totalTime;
        this._teams = teams;
        this._startDate = startDate;
        this._endDate = endDate;
    }
}

@Injectable({
    providedIn: 'root',
})
export class SprintAdapter implements Adapter<Sprint> {
    adapt(item: any): Sprint {
        // tslint:disable-next-line:no-shadowed-variable
        const arrayOfTeams = item.teams.map(item => {
            return TeamAdapter.adapt(item);
        });
        return new Sprint(
            item.name,
            item.initialCommitment,
            item.finalCommitment,
            item.addedWork,
            item.timeLeft,
            item.totalTime,
            arrayOfTeams,
            item.startDate,
            item.endDate
        );
    }
}

