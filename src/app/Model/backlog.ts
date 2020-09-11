export class Backlog {
    private _projectName: string;
    private _nbBugs: number;
    private _nbBugsLow: number;
    private _nbBugsMedium: number;
    private _nbBugsHigh: number;
    private _nbBugsHighest: number;
    private _nbBugsCreated: number [];
    private _nbBugsResolved: number [];

    constructor(projectName: string, nbBugs: number, nbBugsLow: number, nbBugsMedium: number,
                nbBugsHigh: number, nbBugsHighest: number, nbBugsCreated: number[],
                nbBugsResolved: number[]) {
        this._projectName = projectName;
        this._nbBugs = nbBugs;
        this._nbBugsLow = nbBugsLow;
        this._nbBugsMedium = nbBugsMedium;
        this._nbBugsHigh = nbBugsHigh;
        this._nbBugsHighest = nbBugsHighest;
        this._nbBugsCreated = nbBugsCreated;
        this._nbBugsResolved = nbBugsResolved;
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

}
