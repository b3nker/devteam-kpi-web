import {Adapter} from './adapter';
import {Ticket} from '../../Model/ticket';
import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root',
})

export class TicketAdapter implements Adapter<Ticket> {
    static adapt(item: any): Ticket{
        return new Ticket(
            item.total,
            item.aqualifier,
            item.bacAffinage,
            item.enAttente,
            item.afaire,
            item.enCours,
            item.abandonne,
            item.devTermine,
            item.avalider,
            item.alivrer,
            item.atester,
            item.refuseEnRecette,
            item.valideEnRecette,
            item.livre,
            item.termine,
            item.testCroise,
            item.valide,
            item.mergeRequest,
            item.overEstimated,
            item.underEstimated,
            item.ticketsBug,
            item.ticketsTask,
            item.ticketsUS
        );
    }
    adapt(item: any): Ticket{
        return new Ticket(
            item.total,
            item.aQualifier,
            item.bacAffinage,
            item.enAttente,
            item.afaire,
            item.enCours,
            item.abandonne,
            item.devTermine,
            item.avalider,
            item.alivrer,
            item.atester,
            item.refuseEnRecette,
            item.valideEnRecette,
            item.livre,
            item.termine,
            item.testCroise,
            item.valide,
            item.mergeRequest,
            item.overEstimated,
            item.underEstimated,
            item.ticketsBug,
            item.ticketsTask,
            item.ticketsUS
        );
    }
}
