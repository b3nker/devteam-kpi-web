import {Collaborator} from '../../Model/collaborator';
import {Adapter} from './adapter';
import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class CollaboratorAdapter implements Adapter<Collaborator> {
    static getCollaborator(item: any): Collaborator {
        return new Collaborator(
            item.accountId,
            item.firstName,
            item.name,
            item.emailAddress,
            item.totalWorkingTime,
            item.availableTime,
            item.estimatedTime,
            item.loggedTime,
            item.remainingTime,
            item.spTotal,
            item.spAqualifier,
            item.spBacAffinage,
            item.spEnAttente,
            item.spAfaire,
            item.spTermine,
            item.spAbandonne,
            item.spDevTermine,
            item.spAvalider,
            item.spAlivrer,
            item.spATester,
            item.spRefuseEnRecette,
            item.spValideEnRecette,
            item.spLivre,
            item.spEncours,
            item.spTestCroise,
            item.ticketsTotal,
            item.ticketsAqualifier,
            item.ticketsBacAffinage,
            item.ticketsEnAttente,
            item.ticketsAfaire,
            item.ticketsEncours,
            item.ticketsAbandonne,
            item.ticketsDevTermine,
            item.ticketsAvalider,
            item.ticketsAlivrer,
            item.ticketsATester,
            item.ticketsRefuseEnRecette,
            item.ticketsValideEnRecette,
            item.ticketsLivre,
            item.ticketsTermine,
            item.ticketsValide,
            item.role,
            item.ticketsTestCroise,
            item.assignedIssues,


        );
    }

    static adapt(item: any): Collaborator {
        return CollaboratorAdapter.getCollaborator(item);
    }

    adapt(item: any): Collaborator {
        return CollaboratorAdapter.getCollaborator(item);
    }
}
