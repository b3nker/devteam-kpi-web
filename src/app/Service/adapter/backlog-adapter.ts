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
