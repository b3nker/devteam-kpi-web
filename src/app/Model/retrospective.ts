import {Sprint, SprintAdapter} from './sprint';
import {Adapter} from '../Service/adapter/adapter';
import {SprintCommitment, SprintCommitmentAdapter} from './sprint-commitment';

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

export class RetrospectiveAdapter implements Adapter<Retrospective> {
    adapt(item: any): Retrospective {
        // tslint:disable-next-line:no-shadowed-variable
        const arrayOfSprintCommitment = item.sprints.map(data => {
            return SprintCommitmentAdapter.adapt(data);
        });
        return new Retrospective(
            item.teamName,
            arrayOfSprintCommitment
        );
    }
}



