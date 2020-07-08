import { Component, OnInit } from '@angular/core';
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
export class TeamsTableComponent implements OnInit {
  teams: Array<Team> = [];
  ELEMENT_DATA: any[] = [];
  dataSource: TableElement[] = [];
  displayedColumns: string[] = ['name', 'allocatedTime', 'consumedTime', 'leftToDo', 'workedTime', 'tickets', 'ticketsDone'];
  displayedTooltip: string[] = ['Nom du développeur', 'Somme des temps estimés pour toutes les tâches finies',
    'Somme des temps enregistrés', 'Somme des temps restants', 'Temps de présence sur le sprint', 'Tickets alloués sur le sprint',
    'Tickets terminés sur le sprint'];

  constructor(private teamService: TeamService, private router: Router) {
  }

  ngOnInit(): void {
    this.teamService.getTeams(this.router.url).subscribe(data => {
      this.teams = data;
      let allocatedTime = 0;
      let consumedTime = 0;
      let leftToDo = 0;
      let tickets = 0;
      let ticketsDone = 0;
      let workedTime = 0;
      for (const t of this.teams){
        for (const c of t.collaborators){
          allocatedTime += c.estimatedTime;
          consumedTime += c.loggedTime;
          leftToDo += c.remainingTime;
          tickets += c.nbTickets;
          ticketsDone += c.nbDone;
          workedTime += c.workedTime;
        }
        const elem: any = {
          name: t.name,
          allocatedTime,
          consumedTime,
          leftToDo,
          tickets,
          ticketsDone,
          workedTime
        };
        this.ELEMENT_DATA.push(elem);
      }
      this.dataSource = this.ELEMENT_DATA;
    });
  }

}
