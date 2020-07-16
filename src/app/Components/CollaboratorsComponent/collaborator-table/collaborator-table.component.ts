import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Collaborator} from '../../../Model/collaborator';
import {CollaboratorService} from '../../../Service/collaborator.service';
import {Router} from '@angular/router';
import Table = WebAssembly.Table;

export interface TableElement {
    name: string;
    allocatedTime: number;
    consumedTime: number;
    leftToDo: number;
    workedTime: number;
    tickets: number;
    ticketsDone: number;
}

export interface AnonymCollaborator {
    key: string;
    value: string;
}

@Component({
    selector: 'app-collaborator-table',
    templateUrl: './collaborator-table.component.html',
    styleUrls: ['./collaborator-table.component.css']
})

export class CollaboratorTableComponent implements OnChanges {
    @Input() collaborators: Array<Collaborator>;
    anonymCollaborators: Array<AnonymCollaborator> = [];
    ELEMENT_DATA: any[] = [];
    displayedColumns: string[] = [
        'name',
        'devTime', // workedTime * velocité attendue
        'workedTime', // Temps de présence sur le sprint
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
    dataSource: any[] = [];

    ngOnChanges(): void {
        if (typeof this.collaborators !== 'undefined') {
            let i = 0;
            for (const c of this.collaborators) {
                if (c.getFullName().includes('Non Assigné')) {
                    continue;
                } else {
                    i++;
                    const anonymCollab: AnonymCollaborator = {
                        key: c.name,
                        value: 'Dev ' + i
                    };
                    let velocity = 0;
                    console.log(c.role);
                    if (c.role.includes('lead dev') || c.role.includes('scrum')){
                        velocity = 0.5;
                    }else {
                        velocity = 0.8;
                    }
                    const elem: any = {
                        name: anonymCollab.value + ' : ' + c.getFullName(),
                        devTime: Math.round(c.totalWorkingTime * velocity),
                        allocatedTime: c.estimatedTime,
                        consumedTime: c.loggedTime,
                        leftToDo: c.remainingTime,
                        tickets: c.nbTickets,
                        ticketsDevDone: c.nbDevDone + c.nbDone,
                        ticketsDone: c.nbDone,
                        workedTime: c.totalWorkingTime,
                        availableTime: c.availableTime
                    };
                    this.anonymCollaborators.push(anonymCollab);
                    this.ELEMENT_DATA.push(elem);
                }
            }
            this.dataSource = this.ELEMENT_DATA;
        }
    }
}
