import {Collaborator} from '../../Model/collaborator';
import {Adapter} from './adapter';
import {Injectable} from '@angular/core';
import {TicketAdapter} from './ticket-adapter';
import {StoryPoint} from '../../Model/story-point';
import {StoryPointAdapter} from './story-point-adapter';

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
            item.role,
            item.assignedIssues,
            TicketAdapter.adapt(item.tickets),
            StoryPointAdapter.adapt(item.storyPoints),
        );
    }

    static adapt(item: any): Collaborator {
        return CollaboratorAdapter.getCollaborator(item);
    }

    adapt(item: any): Collaborator {
        return CollaboratorAdapter.getCollaborator(item);
    }
}
