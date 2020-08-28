import {Injectable} from '@angular/core';
import {Adapter} from './adapter';
import {Sprint} from '../../Model/sprint';
import {TeamAdapter} from './team-adapter';
import {TicketAdapter} from "./ticket-adapter";

@Injectable({
    providedIn: 'root',
})
export class SprintAdapter implements Adapter<Sprint> {
    adapt(item: any): Sprint {
        return new Sprint(
            item.id,
            item.name,
            item.timeLeft,
            item.totalTime,
            TeamAdapter.adapt(item.team),
            item.startDate,
            item.endDate,
            TicketAdapter.adapt(item.addedTickets),
            item.addedWork
        );
    }
}
