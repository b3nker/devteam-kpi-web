import {Adapter} from '../Service/adapter';
import {Injectable} from '@angular/core';

export class Backlog {
    private _projectName: string;
    private _nbBugs: number;
    private _nbBugsLow: number;
    private _nbBugsMedium: number;
    private _nbBugsHigh: number;
    private _nbBugsHighest: number;
    private _nbIncidents: number;
    private _nbIncidentsLow: number;
    private _nbIncidentsMedium: number;
    private _nbIncidentsHigh: number;
    private _nbIncidentsHighest: number;
    private _nbIncidentsCreated: number[];
    private _nbIncidentsResolved: number[];
    private _nbIncidentsInProgress: number [];
    private _nbBugsCreated: number [];
    private _nbBugsResolved: number [];
    private _nbBugsInProgress: number [];


    get nbIncidentsInProgress(): number[] {
        return this._nbIncidentsInProgress;
    }

    get nbBugsInProgress(): number[] {
        return this._nbBugsInProgress;
    }

    get nbIncidents(): number {
        return this._nbIncidents;
    }

    get nbIncidentsLow(): number {
        return this._nbIncidentsLow;
    }

    get nbIncidentsMedium(): number {
        return this._nbIncidentsMedium;
    }

    get nbIncidentsHigh(): number {
        return this._nbIncidentsHigh;
    }

    get nbIncidentsHighest(): number {
        return this._nbIncidentsHighest;
    }
    get nbIncidentsCreated(): number[] {
        return this._nbIncidentsCreated;
    }

    set nbIncidentsCreated(value: number[]) {
        this._nbIncidentsCreated = value;
    }

    get nbIncidentsResolved(): number[] {
        return this._nbIncidentsResolved;
    }

    set nbIncidentsResolved(value: number[]) {
        this._nbIncidentsResolved = value;
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


    constructor(projectName: string, nbBugs: number, nbBugsLow: number, nbBugsMedium: number, nbBugsHigh: number, nbBugsHighest: number,
                nbIncidents: number, nbIncidentsLow: number, nbIncidentsMedium: number, nbIncidentsHigh: number, nbIncidentsHighest: number,
                nbIncidentsCreated: number[], nbIncidentsResolved: number[], nbIncidentsInProgress: number[], nbBugsCreated: number[],
                nbBugsResolved: number[], nbBugsInProgress: number[]) {
        this._projectName = projectName;
        this._nbBugs = nbBugs;
        this._nbBugsLow = nbBugsLow;
        this._nbBugsMedium = nbBugsMedium;
        this._nbBugsHigh = nbBugsHigh;
        this._nbBugsHighest = nbBugsHighest;
        this._nbIncidents = nbIncidents;
        this._nbIncidentsLow = nbIncidentsLow;
        this._nbIncidentsMedium = nbIncidentsMedium;
        this._nbIncidentsHigh = nbIncidentsHigh;
        this._nbIncidentsHighest = nbIncidentsHighest;
        this._nbIncidentsCreated = nbIncidentsCreated;
        this._nbIncidentsResolved = nbIncidentsResolved;
        this._nbIncidentsInProgress = nbIncidentsInProgress;
        this._nbBugsCreated = nbBugsCreated;
        this._nbBugsResolved = nbBugsResolved;
        this._nbBugsInProgress = nbBugsInProgress;
    }
}

@Injectable({
    providedIn: 'root',
})
export class BacklogAdapter implements Adapter<Backlog> {
    adapt(item: any): Backlog{
        return new Backlog(
            item.projectName,
            item.nbBugs,
            item.nbBugsLow,
            item.nbBugsMedium,
            item.nbBugsHigh,
            item.nbBugsHighest,
            item.nbIncidents,
            item.nbIncidentsLow,
            item.nbIncidentsMedium,
            item.nbIncidentsHigh,
            item.nbIncidentsHighest,
            item.nbIncidentsCreated,
            item.nbIncidentsResolved,
            item.nbIncidentsInProgress,
            item.nbBugsCreated,
            item.nbBugsResolved,
            item.nbBugsInProgress
        );
    }
}
