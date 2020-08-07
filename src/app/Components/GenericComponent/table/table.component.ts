import {Component, Input, OnChanges} from '@angular/core';
import {TableElement} from '../../../Interface/table-element';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
})
export class TableComponent {
    @Input() dataSource: TableElement[];
    nbRunDays: any[];
    displayedColumns: string[];
    displayedTooltip: string[];
    LEAD_DEV_VELOCITY: number;
    DEV_VELOCITY: number;
    SCRUM: string;
    LEAD_DEV: string;
    UNASSIGNED_ROLE;
    WORKING_HOURS_PER_DAY: number;


    constructor() {
        this.nbRunDays = [
            {value: 0, viewValue: 'Aucun'},
            {value: 1, viewValue: 1},
            {value: 2, viewValue: 2},
            {value: 3, viewValue: 3},
            {value: 4, viewValue: 4},
            {value: 5, viewValue: 5},
            {value: 6, viewValue: 6},
        ];
        this.displayedColumns = [
            'name',
            'runDays',
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
            'Nombre de jours à faire du RUN/MCO'
        ];
        this.LEAD_DEV_VELOCITY = 0.5;
        this.DEV_VELOCITY = 0.8;
        this.SCRUM = 'scrum';
        this.LEAD_DEV = 'lead dev';
        this.UNASSIGNED_ROLE = 'none';
        this.WORKING_HOURS_PER_DAY = 8;
    }

    changeRowValues(event: any, i: number): void {
        if (this.dataSource[i].role === this.UNASSIGNED_ROLE) {
            return;
        }
        let velocity;
        const nbRunDays = event.value;
        const role = this.dataSource[i].role;
        if (role.includes(this.LEAD_DEV) || role.includes(this.SCRUM)) {
            velocity = this.LEAD_DEV_VELOCITY;
        } else {
            velocity = this.DEV_VELOCITY;
        }
        const timeToSubtract = velocity * (nbRunDays * this.WORKING_HOURS_PER_DAY);
        this.dataSource[i].availableTime = Math.round((this.dataSource[i]._availableTime - timeToSubtract) * 10) / 10;
        this.dataSource[i].devTime = Math.round((this.dataSource[i]._devTime - timeToSubtract) * 10) / 10;
        if (this.dataSource[i].availableTime < 0) {
            this.dataSource[i].availableTime = 0;
        }
        if (this.dataSource[i].devTime < 0) {
            this.dataSource[i].devTime = 0;
        }
    }

}
