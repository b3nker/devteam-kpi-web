import {Component, Input} from '@angular/core';
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
    LOWER_BOUND_MULTIPLIER = 0.9;
    UPPER_BOUND_MULTIPLIER = 1.1;
    LEAD_DEV_VELOCITY = 0.65;
    DEV_VELOCITY = 1;
    SCRUM = 'scrum';
    LEAD_DEV = 'lead dev';
    UNASSIGNED_ROLE = 'none';
    WORKING_HOURS_PER_DAY = 8;
    JIRA_DOMAIN = 'https://apriltechnologies.atlassian.net';

    constructor() {
        this.nbRunDays = [
            {value: 0, viewValue: 'Aucun'},
            {value: 1, viewValue: 1},
            {value: 2, viewValue: 2},
            {value: 3, viewValue: 3},
            {value: 4, viewValue: 4},
            {value: 5, viewValue: 5},
            {value: 6, viewValue: 6},
            {value: 7, viewValue: 7},
            {value: 8, viewValue: 8},
            {value: 9, viewValue: 9},
            {value: 10, viewValue: 10},
        ];

        this.displayedColumns = [
            'name',
            'notDevDays',
            'devTime', // Temps de présence sur le sprint
            'allocatedTime', // estimated time
            'consumedTime', // logged time
            'availableTime', // Temps disponible restant sur le sprint
            'leftToDo', // remaining time
            'tickets',
            'url',
        ];
        this.displayedTooltip = [
            'Nom du développeur',
            'Temps passé à faire du run ou en cérémonie',
            'Temps de présence du collaborateur sur le sprint',
            'Somme des temps estimés des tâches assignés au collaborateur',
            'Temps de log sur Tempo',
            'Temps de dév restant, disponible d\'ici la fin du sprint',
            'Somme des temps restants estimés par le collaborateur',
            'Tickets finis (à partir de dév terminé) et finis  sur le sprint',
            'Lien JIRA vers les tâches assignées',
        ];
    }

    changeRowValues(event: any, i: number): void {
        if (this.dataSource[i].name === 'Assigné') {
            return;
        }
        let velocity;
        const nbDays = event.value;
        const role = this.dataSource[i].role;
        if (role.includes(this.LEAD_DEV) || role.includes(this.SCRUM)) {
            velocity = this.LEAD_DEV_VELOCITY;
        } else {
            velocity = this.DEV_VELOCITY;
        }
        const oldNbDays = this.dataSource[i].runDays;
        this.dataSource[i].runDays = nbDays;
        const diffNbDays = nbDays - oldNbDays;
        console.log(diffNbDays);
        const timeToSubtract = velocity * (diffNbDays * this.WORKING_HOURS_PER_DAY);
        this.dataSource[i].availableTime = Math.round((this.dataSource[i].availableTime - timeToSubtract) * 10) / 10;
        this.dataSource[i].devTime = Math.round((this.dataSource[i].devTime - timeToSubtract) * 10) / 10;
        if (this.dataSource[i].availableTime < 0) {
            this.dataSource[i].availableTime = 0;
        }
        if (this.dataSource[i].availableTime > this.dataSource[i]._availableTime) {
            this.dataSource[i].availableTime = this.dataSource[i]._availableTime;
        }
        if (this.dataSource[i].devTime < 0) {
            this.dataSource[i].devTime = 0;
        }
        if (this.dataSource[i].devTime > this.dataSource[i]._devTime) {
            this.dataSource[i].devTime = this.dataSource[i]._devTime;
        }
    }

    getJqlKeysList(urls: Array<string>): string {
        if (urls.length === 0){
            return null;
        }
        let str = '';
        let i = 1;
        const size = urls.length;
        for (const issueKey of urls){
            if (i === size){
                str += issueKey;
            }else{
                str += issueKey + ',';
                i++;
            }
        }
        return this.JIRA_DOMAIN + '/issues/?jql=issue in (' + str + ')';
    }

    /**
     * Changes a raw time (in hours) to the following format 'Xj Xh'
     * @param time, a number (in hours)
     * @return a string with a specific format
     */
    getTimeFormat(time: number): string{
        const nbDaysInTime = Math.floor(time / this.WORKING_HOURS_PER_DAY);
        const nbHoursInTime = Math.floor(time - nbDaysInTime * this.WORKING_HOURS_PER_DAY);
        if (time === 46.8){
            console.log(nbDaysInTime);
            console.log(nbHoursInTime);
        }
        if (nbDaysInTime === 0){
            return nbHoursInTime + 'h';
        }else{
            if (nbHoursInTime === 0){
                return nbDaysInTime + 'j';
            }else{
                return nbDaysInTime + 'j ' + nbHoursInTime + 'h';
            }
        }
    }
}
