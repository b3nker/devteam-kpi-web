import {Component, OnInit} from '@angular/core';
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

export interface AnonymCollaborator{
  key: string;
  value: string;
}
@Component({
  selector: 'app-collaborator-table',
  templateUrl: './collaborator-table.component.html',
  styleUrls: ['./collaborator-table.component.css']
})

export class CollaboratorTableComponent implements OnInit{
  anonymCollaborators: Array<AnonymCollaborator> = [];
  collaborators: Array<Collaborator> = [];
  ELEMENT_DATA: TableElement[] = [];
  displayedColumns: string[] = ['name', 'allocatedTime', 'consumedTime', 'leftToDo', 'workedTime', 'tickets', 'ticketsDone', 'statut'];
  displayedTooltip: string[] = ['Nom du développeur',
    'Somme des temps estimés pour toutes les tâches finies',
    'Somme des temps enregistrés', 'Somme des temps restants',
    'Temps de présence sur le sprint',
    'Tickets alloués sur le sprint',
    'Tickets terminés sur le sprint',
    'Statut du collaborateur'
  ];
  dataSource: TableElement[] = [];
  constructor(private collaboratorService: CollaboratorService, private router: Router) { }
  ngOnInit(): void{
    this.collaboratorService.getCollaborators(this.router.url).subscribe(data => {
      this.collaborators = data;
      let i = 0;
      for (const c of this.collaborators) {
        i++;
        const anonymCollab: AnonymCollaborator = {
          key: c.name,
          value: 'Dev ' + i
        };
        const elem: any = {
          name: anonymCollab.value,
          allocatedTime: c.estimatedTime,
          consumedTime: c.loggedTime,
          leftToDo: c.remainingTime,
          tickets: c.nbTickets,
          ticketsDone: c.nbDone,
          workedTime: c.totalWorkingTime
        };
        this.anonymCollaborators.push(anonymCollab);
        this.ELEMENT_DATA.push(elem);
      }
      this.dataSource = this.ELEMENT_DATA;
    });
  }
}
