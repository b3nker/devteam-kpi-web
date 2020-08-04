import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Team} from '../../../Model/team';

@Component({
  selector: 'app-team-bootstrap-table',
  templateUrl: './team-bootstrap-table.component.html',
  styleUrls: ['./team-bootstrap-table.component.css']
})
export class TeamBootstrapTableComponent implements OnChanges {
  @Input() team: Team;
  header: string[] = [
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
    'statut',
    'Jour de runs'
  ];
  rowsInfo: Array<any> = [];
  UNASSIGNED: string;

  constructor() {
    this.UNASSIGNED = 'unassigned';
  }

  ngOnChanges(): void {
    if (typeof this.team !== 'undefined') {
      let unassigned = {
        name: this.UNASSIGNED,
        devTime: null,
        allocatedTime: null,
        consumedTime: null,
        leftToDo: null,
        tickets: 0,
        ticketsDone: 0,
        ticketsDevDone: 0,
        availableTime: null,
      };
      for (const c of this.team.collaborators) {
        if (c.accountId.includes(this.UNASSIGNED)) {
          unassigned = {
            name: c.getFullName(),
            devTime: null,
            allocatedTime: c.estimatedTime,
            consumedTime: c.loggedTime,
            leftToDo: c.remainingTime,
            tickets: c.nbTickets,
            ticketsDone: c.nbDone,
            ticketsDevDone: c.nbDevDone,
            availableTime: null,
          };
        } else {
          let velocity = 0;
          if (c.role.includes('lead dev') || c.role.includes('scrum')){
            velocity = 0.5;
          }else {
            velocity = 0.8;
          }
          const elem: any = {
            name: c.accountId,
            devTime: Math.round(c.totalWorkingTime * velocity),
            allocatedTime: c.estimatedTime,
            consumedTime: c.loggedTime,
            leftToDo: c.remainingTime,
            tickets: c.nbTickets,
            ticketsDone: c.nbDone,
            ticketsDevDone: c.nbDevDone + c.nbDone,
            workedTime: c.totalWorkingTime,
            availableTime: Math.round(c.availableTime * velocity)
          };
          this.rowsInfo.push(elem);
        }
      }
      this.rowsInfo.push(unassigned);
      console.log(this.rowsInfo);
    }
  }
}
