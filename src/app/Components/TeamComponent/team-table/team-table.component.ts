import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Team} from '../../../Model/team';
import {Sprint} from '../../../Model/sprint';
import {SprintService} from '../../../Service/sprint.service';
import {Router} from '@angular/router';
import {Collaborator} from '../../../Model/collaborator';

export interface TableElement {
    name: string;
    allocatedTime: number;
    consumedTime: number;
    leftToDo: number;
    tickets: number;
    ticketsDone: number;
    workedTime: number;
    availableTime: number;
}

@Component({
    selector: 'app-team-table',
    templateUrl: './team-table.component.html',
    styleUrls: ['./team-table.component.css']
})
export class TeamTableComponent implements OnChanges {
    @Input() team: Team;
    ELEMENT_DATA: any[] = [];
    dataSource: any[] = [];
    displayedColumns: string[] = ['name', 'allocatedTime', 'consumedTime', 'leftToDo', 'availableTime', 'workedTime', 'tickets', 'ticketsDone', 'statut'];
    displayedTooltip: string[] = [
        'Nom du développeur',
        'Somme des temps estimés pour toutes les tâches finies',
        'Somme des temps enregistrés',
        'Somme des temps restants',
        'Temps restant disponible d\'ici la fin du sprint',
        'Temps de présence sur le sprint',
        'Tickets alloués sur le sprint',
        'Tickets terminés sur le sprint',
        'Statut du collaborateur'
    ];

    ngOnChanges(): void {
        if (typeof this.team !== 'undefined') {
            let unassigned: any;
            for (const c of this.team.collaborators) {
                if (c.getFullName().includes('Non Assigné')) {
                    unassigned = {
                        name: c.getFullName(),
                        allocatedTime: c.estimatedTime,
                        consumedTime: c.loggedTime,
                        leftToDo: c.remainingTime,
                        tickets: c.nbTickets,
                        ticketsDone: c.nbDone,
                        workedTime: c.totalWorkingTime,
                        availableTime: c.availableTime
                    };
                } else {
                    const elem: any = {
                        name: c.getFullName(),
                        allocatedTime: c.estimatedTime,
                        consumedTime: c.loggedTime,
                        leftToDo: c.remainingTime,
                        tickets: c.nbTickets,
                        ticketsDone: c.nbDone,
                        workedTime: c.totalWorkingTime,
                        availableTime: c.availableTime
                    };
                    this.ELEMENT_DATA.push(elem);
                }

            }
            this.ELEMENT_DATA.push(unassigned);
            this.dataSource = this.ELEMENT_DATA;
        }
    }
}
