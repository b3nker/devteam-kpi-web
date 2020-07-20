import {Adapter} from '../Service/adapter';
import {Injectable} from '@angular/core';

export class Backlog {
    private _projectName: string;
    private _nbBugs: number;
    private _nbBugsWVEC: number;
    private _nbBugsLow: number;
    private _nbBugsMedium: number;
    private _nbBugsHigh: number;
    private _nbBugsHighest: number;
    private _nbBugsLowWVEC: number;
    private _nbBugsMediumWVEC: number;
    private _nbBugsHighWVEC: number;
    private _nbBugsHighestWVEC: number;
    private _nbBugsCreated: number [];
    private _nbBugsResolved: number [];


    get nbBugsWVEC(): number {
        return this._nbBugsWVEC;
    }

    get nbBugsLowWVEC(): number {
        return this._nbBugsLowWVEC;
    }

    get nbBugsMediumWVEC(): number {
        return this._nbBugsMediumWVEC;
    }

    get nbBugsHighWVEC(): number {
        return this._nbBugsHighWVEC;
    }

    get nbBugsHighestWVEC(): number {
        return this._nbBugsHighestWVEC;
    }

    get nbBugsCreated(): number[] {
        return this._nbBugsCreated;
    }

    get nbBugsResolved(): number[] {
        return this._nbBugsResolved;
    }

    get projectName(): string {
        return this._projectName;
    }

    get nbBugs(): number {
        return this._nbBugs;
    }

    get nbBugsLow(): number {
        return this._nbBugsLow;
    }

    get nbBugsMedium(): number {
        return this._nbBugsMedium;
    }

    get nbBugsHigh(): number {
        return this._nbBugsHigh;
    }

    get nbBugsHighest(): number {
        return this._nbBugsHighest;
    }

    constructor(projectName: string, nbBugs: number, nbBugsWVEC: number, nbBugsLow: number, nbBugsMedium: number, nbBugsHigh: number, nbBugsHighest: number, nbBugsLowWVEC: number, nbBugsMediumWVEC: number, nbBugsHighWVEC: number, nbBugsHighestWVEC: number, nbBugsCreated: number[], nbBugsResolved: number[]) {
        this._projectName = projectName;
        this._nbBugs = nbBugs;
        this._nbBugsWVEC = nbBugsWVEC;
        this._nbBugsLow = nbBugsLow;
        this._nbBugsMedium = nbBugsMedium;
        this._nbBugsHigh = nbBugsHigh;
        this._nbBugsHighest = nbBugsHighest;
        this._nbBugsLowWVEC = nbBugsLowWVEC;
        this._nbBugsMediumWVEC = nbBugsMediumWVEC;
        this._nbBugsHighWVEC = nbBugsHighWVEC;
        this._nbBugsHighestWVEC = nbBugsHighestWVEC;
        this._nbBugsCreated = nbBugsCreated;
        this._nbBugsResolved = nbBugsResolved;
    }
}

@Injectable({
    providedIn: 'root',
})
export class BacklogAdapter implements Adapter<Backlog> {
    static adapt(item: any): Backlog{
        return new Backlog(
            item.projectName,
            item.nbBugs,
            item.nbBugsWVEC,
            item.nbBugsLow,
            item.nbBugsMedium,
            item.nbBugsHigh,
            item.nbBugsHighest,
            item.nbBugsLowWVEC,
            item.nbBugsMediumWVEC,
            item.nbBugsHighWVEC,
            item.nbBugsHighestWVEC,
            item.nbBugsCreated,
            item.nbBugsResolved
        );
    }
    adapt(item: any): Backlog{
        return new Backlog(
            item.projectName,
            item.nbBugs,
            item.nbBugsWVEC,
            item.nbBugsLow,
            item.nbBugsMedium,
            item.nbBugsHigh,
            item.nbBugsHighest,
            item.nbBugsLowWVEC,
            item.nbBugsMediumWVEC,
            item.nbBugsHighWVEC,
            item.nbBugsHighestWVEC,
            item.nbBugsCreated,
            item.nbBugsResolved
        );
    }
}
