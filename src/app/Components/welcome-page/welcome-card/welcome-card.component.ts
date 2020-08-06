import {Component, Input, OnChanges} from '@angular/core';
import {Team} from '../../../Model/team';
import {Collaborator} from '../../../Model/collaborator';

@Component({
  selector: 'app-welcome-card',
  templateUrl: './welcome-card.component.html',
  styleUrls: ['./welcome-card.component.css']
})
export class WelcomeCardComponent implements OnChanges {
  @Input() team: Team;
  collaborators: Array<Collaborator> = []; // To exclude unassigned collaborator
  scrumName: string;
  SCRUM_ROLE = 'scrum';
  constructor() { }

  ngOnChanges(): void {
    if (typeof this.team !== 'undefined'){
      for (const c of this.team.collaborators){
        if (!c.getFullName().includes('Non Assigné')) {
          this.collaborators.push(c);
        }
        if (c.role.includes(this.SCRUM_ROLE)){
          this.scrumName = c.getFullName();
        }
      }
    }
  }

}
