import {Component, Input, OnChanges} from '@angular/core';
import {Team} from '../../../Model/team';
import {Collaborator} from '../../../Model/collaborator';
import Table = WebAssembly.Table;


export interface TableElement{
    name: string;
    devTime: number;
    allocatedTime: number;
    consumedTime: number;
    leftToDo: number;
    tickets: number;
    ticketsDone: number;
    ticketsDevDone: number;
    workedTime: number;
    availableTime: number;
}
@Component({
    selector: 'app-teams-table',
    templateUrl: './teams-table.component.html',
    styleUrls: ['./teams-table.component.css']
})
export class TeamsTableComponent implements OnChanges {
    @Input() teams: Team [];
    ELEMENT_DATA: TableElement[];
    dataSource: TableElement[];
    displayedColumns: string[];
    displayedTooltip: string[];
    LEAD_DEV_VELOCITY: number;
    DEV_VELOCITY: number;
    SCRUM: string;
    LEAD_DEV: string;

    constructor(){
        this.LEAD_DEV_VELOCITY = 0.5;
        this.DEV_VELOCITY = 0.8;
        this.SCRUM = 'scrum';
        this.LEAD_DEV = 'lead dev';
        this.ELEMENT_DATA = [];
        this.dataSource = [];
        this.displayedColumns = [
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
            'Statut du collaborateur'
        ];
    }

    ngOnChanges(): void {
        if (typeof this.teams !== 'undefined') {
            console.log(this.teams);
            for (const t of this.teams) {
                console.log(t);
                const row: TableElement = {
                    name: t.name,
                    devTime: 0,
                    allocatedTime: 0,
                    consumedTime: 0,
                    leftToDo: 0,
                    tickets: 0,
                    ticketsDone: 0,
                    ticketsDevDone: 0,
                    workedTime: 0,
                    availableTime: 0,
                };
                for (const c of t.collaborators) {
                    let velocity = 0;
                    if (c.role.includes(this.LEAD_DEV) || c.role.includes(this.SCRUM)){
                        velocity = this.LEAD_DEV_VELOCITY;
                    }else {
                        velocity = this.DEV_VELOCITY;
                    }
                    this.updateTableElement(c, row, velocity);
                }
                console.log(row);
                this.ELEMENT_DATA.push(row);
            }
            this.dataSource = this.ELEMENT_DATA;
        }
    }

    updateTableElement(c: Collaborator, elem: TableElement, velocity: number): void{
        elem.devTime += Math.round(c.totalWorkingTime * velocity);
        elem.allocatedTime += c.estimatedTime;
        elem.consumedTime += c.loggedTime;
        elem.leftToDo += c.remainingTime;
        elem.tickets += c.nbTickets;
        elem.ticketsDone += c.nbDone;
        elem.ticketsDevDone += c.nbDone + c.nbDevDone;
        elem.workedTime += c.totalWorkingTime;
        elem.availableTime += Math.round(c.availableTime * velocity);
    }
}
