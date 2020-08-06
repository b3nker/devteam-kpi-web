import {Team} from './team';

export class Sprint {
    private _id: number;
    private _name: string;
    private _timeLeft: number;
    private _totalTime: number;
    private _team: Team;
    private _startDate: string;
    private _endDate: string;


    set team(value: Team) {
        this._team = value;
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
    get team(): Team {
        return this._team;
    }

    get startDate(): string {
        return this._startDate;
    }

    get endDate(): string {
        return this._endDate;
    }

    constructor(id: number, name: string, timeLeft: number, totalTime: number, team: Team, startDate: string, endDate: string) {
        this._id = id;
        this._name = name;
        this._timeLeft = timeLeft;
        this._totalTime = totalTime;
        this._team = team;
        this._startDate = startDate;
        this._endDate = endDate;
    }
}


