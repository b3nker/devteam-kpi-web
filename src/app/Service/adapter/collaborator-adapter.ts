import {Collaborator} from '../../Model/collaborator';
import {Adapter} from './adapter';
import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class CollaboratorAdapter implements Adapter<Collaborator> {
    static adapt(item: any): Collaborator {
        return new Collaborator(
            item.accountId,
            item.firstName,
            item.name,
            item.emailAddress,
            item.velocity,
            item.totalWorkingTime,
            item.estimatedTime,
            item.loggedTime,
            item.remainingTime,
            item.nbTickets,
            item.nbDone,
            item.nbDevDone,
            item.nbInProgress,
            item.nbToDo,
            item.nbEnCoursDevTermine,
            item.nbATester,
            item.spTotal,
            item.spAqualifier,
            item.spBacAffinage,
            item.spEnAttente,
            item.spAfaire,
            item.spEncours,
            item.spAbandonne,
            item.spDevTermine,
            item.spAvalider,
            item.spAlivrer,
            item.spATester,
            item.spRefuseEnRecette,
            item.spValideEnRecette,
            item.spLivre,
            item.spTermine,
            item.role,
            item.availableTime,
            item.spTestCroise
        );
    }
    adapt(item: any): Collaborator {
        return new Collaborator(
            item.accountId,
            item.firstName,
            item.name,
            item.emailAddress,
            item.velocity,
            item.totalWorkingTime,
            item.estimatedTime,
            item.loggedTime,
            item.remainingTime,
            item.nbTickets,
            item.nbDone,
            item.nbDevDone,
            item.nbInProgress,
            item.nbToDo,
            item.nbEnCoursDevTermine,
            item.nbATester,
            item.spTotal,
            item.spAqualifier,
            item.spBacAffinage,
            item.spEnAttente,
            item.spAfaire,
            item.spEncours,
            item.spAbandonne,
            item.spDevTermine,
            item.spAvalider,
            item.spAlivrer,
            item.spATester,
            item.spRefuseEnRecette,
            item.spValideEnRecette,
            item.spLivre,
            item.spTermine,
            item.role,
            item.availableTime,
            item.spTestCroise

        );
    }
}
