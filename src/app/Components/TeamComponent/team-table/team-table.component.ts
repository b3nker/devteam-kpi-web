import {Component, OnInit} from '@angular/core';
import {CollaboratorService} from '../../../Service/collaborator.service';
import {Router} from '@angular/router';
import {TeamService} from '../../../Service/team.service';
import {Team} from '../../../Model/team';

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
  selector: 'app-team-table',
  templateUrl: './team-table.component.html',
  styleUrls: ['./team-table.component.css']
})
export class TeamTableComponent implements OnInit {
  team: Array<Team> = [];
  ELEMENT_DATA: any[] = [];
  dataSource: any[] = [];
  displayedColumns: string[] = ['name', 'allocatedTime', 'consumedTime', 'leftToDo', 'workedTime', 'tickets', 'ticketsDone', 'statut'];
  displayedTooltip: string[] = ['Nom du développeur', 'Somme des temps estimés pour toutes les tâches finies',
    'Somme des temps enregistrés', 'Somme des temps restants', 'Temps de présence sur le sprint', 'Tickets alloués sur le sprint',
    'Tickets terminés sur le sprint'];
  constructor(private teamService: TeamService, private router: Router) {
  }

  ngOnInit(): void {
    this.teamService.getTeam(this.router.url).subscribe(data => {
      this.team = data;
      for (const c of this.team[0].collaborators) {
        const elem: any = {
          name: c.getFullName(),
          allocatedTime: c.estimatedTime,
          consumedTime: c.loggedTime,
          leftToDo: c.remainingTime,
          tickets: c.nbTickets,
          ticketsDone: c.nbDone,
          workedTime: c.workedTime
        };
        this.ELEMENT_DATA.push(elem);
      }
      this.dataSource = this.ELEMENT_DATA;
    });
  }

}
