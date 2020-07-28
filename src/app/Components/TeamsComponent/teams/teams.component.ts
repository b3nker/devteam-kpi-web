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
  sprint: Sprint;
  constructor(private sprintService: SprintService){
  }
  ngOnInit(): void {
    this.sprintService.getSprints().subscribe(data => {
      this.sprint = data[0];
    });
  }
}
