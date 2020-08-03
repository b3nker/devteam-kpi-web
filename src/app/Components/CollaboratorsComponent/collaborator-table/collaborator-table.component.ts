import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Collaborator} from '../../../Model/collaborator';

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
    selector: 'app-collaborator-table',
    templateUrl: './collaborator-table.component.html',
    styleUrls: ['./collaborator-table.component.css']
})

export class CollaboratorTableComponent implements OnChanges {
    @Input() collaborators: Array<Collaborator>;
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
        this.UNASSIGNED = 'unassigned';
    }

    ngOnChanges(): void {
        if (typeof this.collaborators !== 'undefined') {
            let i = 0;
            for (const c of this.collaborators) {
                if (c.accountId.includes(this.UNASSIGNED)) {
                    continue;
                } else {
                    i++;
                    let velocity = 0;
                    if (c.role.includes('lead dev') || c.role.includes('scrum')){
                        velocity = this.LEAD_DEV_VELOCITY;
                    }else {
                        velocity = this.DEV_VELOCITY;
                    }
                    const developmentTime = Math.round(c.totalWorkingTime * velocity);
                    const elem: TableElement = {
                        name: c.getFullName(),
                        devTime: developmentTime,
                        allocatedTime: Math.round(c.estimatedTime * 10) / 10,
                        consumedTime: Math.round(c.loggedTime * 10) / 10,
                        leftToDo: Math.round(c.remainingTime * 10) / 10,
                        tickets: c.nbTickets,
                        ticketsDone: c.nbDone,
                        ticketsDevDone: c.nbDevDone + c.nbDone,
                        availableTime: Math.round(c.availableTime * velocity),
                    };
                    this.ELEMENT_DATA.push(elem);
                }
            }
            this.dataSource = this.ELEMENT_DATA;
        }
    }
}
