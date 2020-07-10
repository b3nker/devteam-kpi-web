import {Component, Input, OnInit} from '@angular/core';
import {Team} from '../../../Model/team';
import {Collaborator} from '../../../Model/collaborator';

@Component({
  selector: 'app-welcome-card',
  templateUrl: './welcome-card.component.html',
  styleUrls: ['./welcome-card.component.css']
})
export class WelcomeCardComponent implements OnInit {
  @Input team: Team;
  collaborators: Array<Collaborator> = []; // To exclude unassigned collaborator
  constructor() { }

  ngOnInit(): void {
    for (const c of this.team.collaborators){
      if (!c.getFullName().includes('Non Assigné')) {
        this.collaborators.push(c);
      }
    }
  }

}
