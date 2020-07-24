import {Component, Input, OnChanges} from '@angular/core';
import {Team} from '../../../Model/team';
import {AnonymCollaborator} from '../../../Model/anonym-collaborator';



@Component({
    selector: 'app-team-table',
    templateUrl: './team-table.component.html',
    styleUrls: ['./team-table.component.css']
})
export class TeamTableComponent implements OnChanges {
    @Input() team: Team;
    ELEMENT_DATA: any[] = [];
    dataSource: any[] = [];
    displayedColumns: string[] = [
        'name',
        'workedTime', // workedTime * velocité attendue
        'devTime', // Temps de présence sur le sprint
        'consumedTime', // logged time
        'availableTime', // Temps disponible restant sur le sprint
        'leftToDo', // remaining time
        'allocatedTime', // estimated time
        'tickets',
        'ticketsDevDone',
        'ticketsDone',
        'statut'
    ];
    displayedTooltip: string[] = [
        'Nom du développeur',
        'Temps de développement attendu',
        'Alloué',
        'Consommé',
        'Reste à faire',
        'Temps restant disponible d\'ici la fin du sprint',
        'Temps de présence sur le sprint',
        'Tickets alloués sur le sprint',
        'Tickets terminés sur le sprint (Statut JIRA: Livré, Terminé, Validé en recette)',
        'Tickets qui se situe après l\' état "Dév terminé" dans le workflow Jira" (Statut JIRA : A tester, A livrer, livré, terminé, validé en recette)',
        'Statut du collaborateur'
        ];
    ngOnChanges(): void {
        if (typeof this.team !== 'undefined') {
            let unassigned: any;
            for (const c of this.team.collaborators) {
                if (c.getFullName().includes('Non Assigné')) {
                    unassigned = {
                        name: c.getFullName(),
                        devTime: null,
                        allocatedTime: c.estimatedTime,
                        consumedTime: c.loggedTime,
                        leftToDo: c.remainingTime,
                        tickets: c.nbTickets,
                        ticketsDone: c.nbDone,
                        ticketsDevDone: c.nbDevDone,
                        workedTime: null,
                        availableTime: null
                    };
                } else {
                    let velocity = 0;
                    if (c.role.includes('lead dev') || c.role.includes('scrum')){
                        velocity = 0.5;
                    }else {
                        velocity = 0.8;
                    }
                    const elem: any = {
                        name: c.accountId,
                        devTime: Math.round(c.totalWorkingTime * velocity),
                        allocatedTime: c.estimatedTime,
                        consumedTime: c.loggedTime,
                        leftToDo: c.remainingTime,
                        tickets: c.nbTickets,
                        ticketsDone: c.nbDone,
                        ticketsDevDone: c.nbDevDone + c.nbDone,
                        workedTime: c.totalWorkingTime,
                        availableTime: Math.round(c.availableTime * velocity)
                    };
                    this.ELEMENT_DATA.push(elem);
                }

            }
            this.ELEMENT_DATA.push(unassigned);
            this.dataSource = this.ELEMENT_DATA;
        }
    }
}
