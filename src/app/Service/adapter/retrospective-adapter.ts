import {Adapter} from './adapter';
import {SprintCommitmentAdapter} from '../../Model/sprint-commitment';
import {Retrospective} from '../../Model/retrospective';
import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root',
})

export class RetrospectiveAdapter implements Adapter<Retrospective> {
    adapt(item: any): Retrospective {
        const arrayOfSprintCommitment = item.sprints.map(data => {
            return SprintCommitmentAdapter.adapt(data);
        });
        return new Retrospective(
            item.teamName,
            arrayOfSprintCommitment
        );
    }
}
