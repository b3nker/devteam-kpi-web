import { Component, OnInit } from '@angular/core';
import {SprintService} from '../../Service/sprint.service';
import {Sprint} from '../../Model/sprint';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {
  sprint: Sprint;
  nbTeams: string;
  dateStart: Date;
  dateEnd: Date;
  constructor(private sprintService: SprintService) {}

  ngOnInit(): void {
    this.sprintService.getSprint().subscribe(data => {
      this.sprint = data[0];
      this.dateStart = new Date(this.sprint.startDate);
      this.dateEnd = new Date(this.sprint.endDate);
      this.nbTeams = this.sprint.teams.length.toString();
      console.log(this.nbTeams);
    });
  }

}
