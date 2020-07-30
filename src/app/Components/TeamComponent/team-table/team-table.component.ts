import {Component, Input, OnChanges} from '@angular/core';
import {Team} from '../../../Model/team';

/* Interface that schematize information contained in each element (row)
 *
 */
export interface TableElement{
    name: string;
    devTime: number;
    allocatedTime: number;
    consumedTime: number;
    leftToDo: number;
    tickets: number;
    ticketsDone: number;
    ticketsDevDone: number;
    availableTime: number;
}

@Component({
    selector: 'app-team-table',
    templateUrl: './team-table.component.html',
    styleUrls: ['./team-table.component.css']
})
export class TeamTableComponent implements OnChanges{
    @Input() team: Team;
    ELEMENT_DATA: TableElement[];
    dataSource: TableElement[];
    displayedColumns: string[];
    displayedTooltip: string[];
    LEAD_DEV_VELOCITY: number;
    DEV_VELOCITY: number;
    SCRUM: string;
    LEAD_DEV: string;
    UNASSIGNED: string;

    constructor(){
        this.ELEMENT_DATA = [];
        this.dataSource = [];
        this.displayedColumns = [
            'name',
            'devTime', // Temps de présence sur le sprint
            'consumedTime', // logged time
            'availableTime', // Temps disponible restant sur le sprint
            'leftToDo', // remaining time
            'allocatedTime', // estimated time
            'tickets',
            'ticketsDevDone',
            'ticketsDone',
        ];
        this.displayedTooltip = [
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
        ];
        this.LEAD_DEV_VELOCITY = 0.5;
        this.DEV_VELOCITY = 0.8;
        this.SCRUM = 'scrum';
        this.LEAD_DEV = 'lead dev';
        this.UNASSIGNED = 'Non Assigné';
    }
    ngOnChanges(): void {
        if (typeof this.team !== 'undefined') {
            let unassigned: TableElement;
            for (const c of this.team.collaborators) {
                if (c.getFullName().includes(this.UNASSIGNED)) {
                    unassigned = {
                        name: c.getFullName(),
                        devTime: null,
                        allocatedTime: c.estimatedTime,
                        consumedTime: c.loggedTime,
                        leftToDo: c.remainingTime,
                        tickets: c.nbTickets,
                        ticketsDone: c.nbDone,
                        ticketsDevDone: c.nbDevDone,
                        availableTime: null,
                    };
                } else {
                    let velocity = 0;
                    if (c.role.includes(this.LEAD_DEV) || c.role.includes(this.SCRUM)){
                        velocity = this.LEAD_DEV_VELOCITY;
                    }else {
                        velocity = this.DEV_VELOCITY;
                    }
                    const developmentTime = Math.round(c.totalWorkingTime * velocity);
                    const elem: TableElement = {
                        name: c.getFullName(),
                        devTime: developmentTime,
                        allocatedTime: c.estimatedTime,
                        consumedTime: Math.round(c.loggedTime * 10) / 10,
                        leftToDo: c.remainingTime,
                        tickets: c.nbTickets,
                        ticketsDone: c.nbDone,
                        ticketsDevDone: c.nbDevDone + c.nbDone,
                        availableTime: Math.round(c.availableTime * velocity),
                    };
                    this.ELEMENT_DATA.push(elem);
                }

            }
            this.ELEMENT_DATA.push(unassigned);
            this.dataSource = this.ELEMENT_DATA;
        }
    }
}
