import {Injectable} from '@angular/core';
import {Adapter} from './adapter';
import {Backlog} from '../../Model/backlog';

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
            item.nbBugsCreated,
            item.nbBugsResolved,
        );
    }
}
