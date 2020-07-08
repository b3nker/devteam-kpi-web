import { Component, OnInit } from '@angular/core';
import {TeamService} from '../../../team.service';
import {Router} from '@angular/router';
import {Team} from '../../../team';

@Component({
  selector: 'app-burndown-chart',
  templateUrl: './burndown-chart.component.html',
  styleUrls: ['./burndown-chart.component.css']
})
export class BurndownChartComponent implements OnInit {
  team: Array<Team> = [];
  url = 'assets/burndown-chart-images/burndown-chart-team-';
  constructor(private teamService: TeamService, private router: Router) {
  }
  ngOnInit(): void {
    this.teamService.getTeam(this.router.url).subscribe(data => {
      this.team = data;
      this.url += this.team[0].name + '.png';
    });
  }

}
