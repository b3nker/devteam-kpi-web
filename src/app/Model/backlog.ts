import {Adapter} from '../Service/adapter';
import {Injectable} from '@angular/core';

export class Backlog {
    private _projectName: string;
    private _nbBugs: number;
    private _nbBugsLow: number;
    private _nbBugsMedium: number;
    private _nbBugsHigh: number;
    private _nbBugsHighest: number;


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

    constructor(projectName: string, nbBugs: number, nbBugsLow: number, nbBugsMedium: number, nbBugsHigh: number, nbBugsHighest: number) {
        this._projectName = projectName;
        this._nbBugs = nbBugs;
        this._nbBugsLow = nbBugsLow;
        this._nbBugsMedium = nbBugsMedium;
        this._nbBugsHigh = nbBugsHigh;
        this._nbBugsHighest = nbBugsHighest;
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
            item.nbBugsLow,
            item.nbBugsMedium,
            item.nbBugsHigh,
            item.nbBugsHighest
        );
    }
    adapt(item: any): Backlog{
        return new Backlog(
            item.projectName,
            item.nbBugs,
            item.nbBugsLow,
            item.nbBugsMedium,
            item.nbBugsHigh,
            item.nbBugsHighest
        );
    }
}
