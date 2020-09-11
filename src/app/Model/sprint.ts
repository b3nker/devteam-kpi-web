import {Team} from './team';
import {Ticket} from './ticket';

export class Sprint {
    private _id: number;
    private _name: string;
    private _timeLeft: number;
    private _totalTime: number;
    private _team: Team;
    private _startDate: string;
    private _endDate: string;
    private _addedTickets: Ticket;
    private _addedWork: number;

    constructor(id: number, name: string, timeLeft: number, totalTime: number, team: Team, startDate: string,
                endDate: string, addedTickets: Ticket, addedWork: number) {
        this._id = id;
        this._name = name;
        this._timeLeft = timeLeft;
        this._totalTime = totalTime;
        this._team = team;
        this._startDate = startDate;
        this._endDate = endDate;
        this._addedTickets = addedTickets;
        this._addedWork = addedWork;
    }

    get id(): number {
        return this._id;
    }

    get addedTickets(): Ticket {
        return this._addedTickets;
    }

    get addedWork(): number {
        return this._addedWork;
    }

    set team(value: Team) {
        this._team = value;
    }

    get team(): Team {
        return this._team;
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

    get startDate(): string {
        return this._startDate;
    }

    get endDate(): string {
        return this._endDate;
    }
}


