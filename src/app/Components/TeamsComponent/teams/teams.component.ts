import { Component, OnInit } from '@angular/core';
import {Sprint} from '../../../Model/sprint';
import {Team} from '../../../Model/team';
import {SprintService} from '../../../Service/sprint.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  sprints: Array<Sprint>;
  teams: Team[];

  constructor(private sprintService: SprintService){
    this.teams = [];
  }

  ngOnInit(): void {
    this.sprintService.getSprints().subscribe(data => {
      this.sprints = data;
      for (const s of this.sprints){
        this.teams.push(s.team);
      }
    });
  }
}
