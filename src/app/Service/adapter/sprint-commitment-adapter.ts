import {Adapter} from './adapter';
import {SprintCommitment} from '../../Model/sprint-commitment';
import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class SprintCommitmentAdapter implements Adapter<SprintCommitment> {
    static adapt(item: any): SprintCommitment {
        return new SprintCommitment(
            item.id,
            item.name,
            item.initialCommitment,
            item.finalCommitment,
            item.addedWork,
            item.completedWork,
            item.addedIssueKeys
        );
    }
    adapt(item: any): SprintCommitment {
        return new SprintCommitment(
            item.id,
            item.name,
            item.initialCommitment,
            item.finalCommitment,
            item.addedWork,
            item.completedWork,
            item.addedIssueKeys
        );
    }
}
