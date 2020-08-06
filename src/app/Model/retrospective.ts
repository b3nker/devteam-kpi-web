import {SprintCommitment} from './sprint-commitment';

export class Retrospective {
    private _teamName: string;
    private _sprints: SprintCommitment [];


    constructor(teamName: string, sprints: SprintCommitment[]) {
        this._teamName = teamName;
        this._sprints = sprints;
    }


    get sprints(): SprintCommitment[] {
        return this._sprints;
    }

    get teamName(): string {
        return this._teamName;
    }
}



