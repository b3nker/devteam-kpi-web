import {Component, Input, OnChanges} from '@angular/core';
import {Collaborator} from '../../../Model/collaborator';
import {CollaboratorElement} from '../../../Interface/collaborator-element';



@Component({
    selector: 'app-collaborator-table',
    templateUrl: './collaborator-table.component.html',
    styleUrls: ['./collaborator-table.component.css']
})

export class CollaboratorTableComponent implements OnChanges {
    @Input() collaborators: Array<Collaborator>;
    ELEMENT_DATA: CollaboratorElement[];
    dataSource: CollaboratorElement[];
    displayedColumns: string[];
    displayedTooltip: string[];
    LEAD_DEV_VELOCITY = 0.5;
    DEV_VELOCITY = 0.8;
    SCRUM = 'scrum';
    LEAD_DEV: 'lead dev';
    UNASSIGNED = 'unassigned';
    UNASSIGNED_ROLE = 'none';
    WORKING_HOURS_PER_DAY = 8;
    nbRunDays: any[];

    constructor(){
        this.nbRunDays = [
            {value: 0, viewValue: 'Aucun'},
            {value: 1, viewValue: 1},
            {value: 2, viewValue: 2},
            {value: 3, viewValue: 3}
        ];
        this.ELEMENT_DATA = [];
        this.dataSource = [];
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
    }

    ngOnChanges(): void {
        if (typeof this.collaborators !== 'undefined') {
            let i = 0;
            for (const c of this.collaborators) {
                if (c.accountId.includes(this.UNASSIGNED)) {
                    continue;
                } else {
                    i++;
                    let velocity;
                    if (c.role.includes(this.LEAD_DEV) || c.role.includes(this.SCRUM)){
                        velocity = this.LEAD_DEV_VELOCITY;
                    }else {
                        velocity = this.DEV_VELOCITY;
                    }
                    const developmentTime = Math.round(c.totalWorkingTime * velocity);
                    const elem: CollaboratorElement = {
                        name: c.getFullName(),
                        devTime: developmentTime,
                        allocatedTime: Math.round(c.estimatedTime * 10) / 10,
                        consumedTime: Math.round(c.loggedTime * 10) / 10,
                        leftToDo: Math.round(c.remainingTime * 10) / 10,
                        tickets: c.nbTickets,
                        ticketsDone: c.nbDone,
                        ticketsDevDone: c.nbDevDone + c.nbDone,
                        availableTime: Math.round(c.availableTime * velocity),
                        runDays: 0,
                        role: c.role,
                        _availableTime: Math.round(c.availableTime * velocity),
                        _devTime: developmentTime
                    };
                    this.ELEMENT_DATA.push(elem);
                }
            }
            this.dataSource = this.ELEMENT_DATA;
        }
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
        if (this.dataSource[i].availableTime < 0){
            this.dataSource[i].availableTime = 0;
        }
        if (this.dataSource[i].devTime < 0){
            this.dataSource[i].devTime = 0;
        }
    }
}
