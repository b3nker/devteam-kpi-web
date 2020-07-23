import {Adapter} from '../Service/adapter';
import {Collaborator} from './collaborator';
import {Sprint} from './sprint';

export class SprintCommitment {
    private _id: number;
    private _name: string;
    private _initialCommitment: number;
    private _finalCommitment: number;
    private _addedWork: number;
    private _completedWork: number;


    constructor(id: number, name: string, initialCommitment: number, finalCommitment: number, addedWork: number, completedWork: number) {
        this._id = id;
        this._name = name;
        this._initialCommitment = initialCommitment;
        this._finalCommitment = finalCommitment;
        this._addedWork = addedWork;
        this._completedWork = completedWork;
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

export class SprintCommitmentAdapter implements Adapter<SprintCommitment> {
    static adapt(item: any): SprintCommitment {
        return new SprintCommitment(
            item.id,
            item.name,
            item.initialCommitment,
            item.finalCommitment,
            item.addedWork,
            item.completedWork
        );
    }
    adapt(item: any): SprintCommitment {
        return new SprintCommitment(
            item.id,
            item.name,
            item.initialCommitment,
            item.finalCommitment,
            item.addedWork,
            item.completedWork
        );
    }
}
