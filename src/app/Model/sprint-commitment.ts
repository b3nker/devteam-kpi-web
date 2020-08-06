export class SprintCommitment {
    private _id: number;
    private _name: string;
    private _initialCommitment: number;
    private _finalCommitment: number;
    private _addedWork: number;
    private _completedWork: number;
    private _addedIssueKeys: string[];

    constructor(id: number, name: string, initialCommitment: number, finalCommitment: number, addedWork: number, completedWork: number,
                addedIssueKeys: string[]) {
        this._id = id;
        this._name = name;
        this._initialCommitment = initialCommitment;
        this._finalCommitment = finalCommitment;
        this._addedWork = addedWork;
        this._completedWork = completedWork;
        this._addedIssueKeys = addedIssueKeys;
    }

    get addedIssueKeys(): string[] {
        return this._addedIssueKeys;
    }

    get id(): number {
        return this._id;
    }

    get name(): string {
        return this._name;
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

    get completedWork(): number {
        return this._completedWork;
    }
}


