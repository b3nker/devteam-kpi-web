import {Injectable} from '@angular/core';
import {Adapter} from './adapter';
import {Team} from '../../Model/team';
import {CollaboratorAdapter} from './collaborator-adapter';

@Injectable({
    providedIn: 'root',
})
export class TeamAdapter implements Adapter<Team>{
    static adapt(item: any): Team {
        // tslint:disable-next-line:no-shadowed-variable
        const arrayOfCollaborators = item.collaborators.map(data => {
            return CollaboratorAdapter.adapt(data);
        });
        return new Team(
            item.name,
            arrayOfCollaborators
        );
    }

    adapt(item: any): Team {
        // tslint:disable-next-line:no-shadowed-variable
        const arrayOfCollaborators = item.collaborators.map(data => {
            return CollaboratorAdapter.adapt(data);
        });
        return new Team(
            item.name,
            arrayOfCollaborators
        );
    }
}
