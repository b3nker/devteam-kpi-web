import {Component, Input, OnInit} from '@angular/core';
import {Sprint} from '../../../Model/sprint';

@Component({
  selector: 'app-teams-tickets',
  templateUrl: './teams-tickets.component.html',
  styleUrls: ['./teams-tickets.component.css']
})
export class TeamsTicketsComponent implements OnInit {
  @Input() sprints: Sprint[];
  supDevDoneTickets = 0;
  underEstimatedTickets = 0;
  overEstimatedTickets = 0;

  constructor() { }

  ngOnInit(): void {
    if (typeof this.sprints !== 'undefined'){
      for (const s of this.sprints){
        for (const c of s.team.collaborators){
          this.supDevDoneTickets += c.tickets.getSupDevDoneTickets();
          this.underEstimatedTickets += c.tickets.underEstimated;
          this.overEstimatedTickets += c.tickets.overEstimated;
        }
      }
    }
  }

}
