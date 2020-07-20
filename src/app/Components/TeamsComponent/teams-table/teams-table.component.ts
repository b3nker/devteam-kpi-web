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
        if (typeof this.teams !== 'undefined') {
            for (const t of this.teams) {
                let avgVelocity = 0;
                let allocatedTime = 0;
                let consumedTime = 0;
                let leftToDo = 0;
                let tickets = 0;
                let ticketsDone = 0;
                let workedTime = 0;
                let availableTime = 0;
                let ticketsDevDone = 0;
                for (const c of t.collaborators) {
                    if (c.role !== null){
                        if (c.role.includes('lead dev') || c.role.includes('scrum')){
                            avgVelocity += 0.5;
                        }else {
                            avgVelocity += 0.8;
                        }
                    }
                    allocatedTime += c.estimatedTime;
                    consumedTime += c.loggedTime;
                    leftToDo += c.remainingTime;
                    tickets += c.nbTickets;
                    ticketsDone += c.nbDone;
                    ticketsDevDone += c.nbDevDone + c.nbDone;
                    workedTime += c.totalWorkingTime;
                    availableTime += c.availableTime;

                }
                const velocity = avgVelocity / t.collaborators.length;
                const elem: any = {
                    name: t.name,
                    devTime: Math.round(workedTime * velocity),
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
