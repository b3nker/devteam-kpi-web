import {Component, Input, OnChanges} from '@angular/core';
import {Team} from '../../../Model/team';



@Component({
    selector: 'app-team-table',
    templateUrl: './team-table.component.html',
    styleUrls: ['./team-table.component.css']
})
export class TeamTableComponent implements OnChanges {
    @Input() team: Team;
    ELEMENT_DATA: any[] = [];
    dataSource: any[] = [];
    displayedColumns: string[] = ['name', 'allocatedTime', 'consumedTime', 'leftToDo', 'availableTime', 'workedTime', 'tickets', 'ticketsDone', 'ticketsDevDone', 'statut'];
    displayedTooltip: string[] = [
        'Nom du développeur',
        'Alloué',
        'Consommé',
        'Reste à faire',
        'Temps restant disponible d\'ici la fin du sprint',
        'Temps de présence sur le sprint',
        'Tickets alloués sur le sprint',
        'Tickets terminés sur le sprint',
        'Tickets dont la phase de développement est terminée',
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
                        ticketsDevDone: c.nbDevDone,
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
                        ticketsDevDone: c.nbDevDone,
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
