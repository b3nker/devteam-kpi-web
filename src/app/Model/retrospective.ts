import {Sprint, SprintAdapter} from './sprint';
import {Adapter} from '../Service/adapter';

export class Retrospective {
    private _teamName: string;
    private _sprints: Sprint [];


    constructor(teamName: string, sprints: Sprint[]) {
        this._teamName = teamName;
        this._sprints = sprints;
    }


    get sprints(): Sprint[] {
        return this._sprints;
    }

    get teamName(): string {
        return this._teamName;
    }
}

export class RetrospectiveAdapter implements Adapter<Retrospective> {
    adapt(item: any): Retrospective {
        // tslint:disable-next-line:no-shadowed-variable
        const arrayOfSprints = item.sprints.map(item => {
            return SprintAdapter.adapt(item);
        });
        return new Retrospective(
            item.teamName,
            arrayOfSprints
        );
    }
}

