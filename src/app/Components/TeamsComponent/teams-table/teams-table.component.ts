import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Team} from '../../../Model/team';
import {TeamService} from '../../../Service/team.service';
import {Router} from '@angular/router';

export interface TableElement {
    name: string;
    allocatedTime: number;
    consumedTime: number;
    leftToDo: number;
    tickets: number;
    ticketsDone: number;
    workedTime: number;
}

@Component({
    selector: 'app-teams-table',
    templateUrl: './teams-table.component.html',
    styleUrls: ['./teams-table.component.css']
})
export class TeamsTableComponent implements OnChanges {
    @Input() teams: Array<Team> = [];
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
        if (typeof this.teams !== 'undefined') {
            for (const t of this.teams) {
                let allocatedTime = 0;
                let consumedTime = 0;
                let leftToDo = 0;
                let tickets = 0;
                let ticketsDone = 0;
                let workedTime = 0;
                let availableTime = 0;
                let ticketsDevDone = 0;
                for (const c of t.collaborators) {
                    allocatedTime += c.estimatedTime;
                    consumedTime += c.loggedTime;
                    leftToDo += c.remainingTime;
                    tickets += c.nbTickets;
                    ticketsDone += c.nbDone;
                    ticketsDevDone += c.nbDevDone;
                    workedTime += c.totalWorkingTime;
                    availableTime += c.availableTime;

                }
                const elem: any = {
                    name: t.name,
                    allocatedTime,
                    consumedTime,
                    leftToDo,
                    tickets,
                    ticketsDone,
                    workedTime,
                    availableTime,
                    ticketsDevDone
                };
                this.ELEMENT_DATA.push(elem);
            }
            this.dataSource = this.ELEMENT_DATA;
        }
    }

}
