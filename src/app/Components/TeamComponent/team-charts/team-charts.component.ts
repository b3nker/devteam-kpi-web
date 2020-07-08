import { Component, OnInit } from '@angular/core';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import {Color, Label} from 'ng2-charts';
import {TeamService} from '../../../team.service';
import {Router} from '@angular/router';
import {Team} from '../../../team';

@Component({
  selector: 'app-team-charts',
  templateUrl: './team-charts.component.html',
  styleUrls: ['./team-charts.component.css']
})
export class TeamChartsComponent implements OnInit {

  private names: Array<string> = [];
  private spDone: Array<number> = [];
  private spToDo: Array<number> = [];
  private spInProgress: Array<number> = [];
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = this.names; // Collaborators
  public barChartType: ChartType = 'horizontalBar';
  public barChartLegend = true;
  public barChartPlugins = [];
  public barChartData: ChartDataSets[] = [
    { data: this.spToDo, label: 'Story Points To Do', stack: 'a' },
    { data: this.spInProgress, label: 'Story Points In Progress', stack: 'a' },
    { data: this.spDone, label: 'Story Points Done', stack: 'a' }
  ];
  public barChartColors: Color[] = [
    { backgroundColor: '#DCDCDC' },
    { backgroundColor: '#ADD8E6' },
    { backgroundColor: '#90EE90' }
  ];

  team: Team;
  constructor(private teamService: TeamService, private router: Router) {}

  ngOnInit(): void {
      this.teamService.getTeam(this.router.url).subscribe(data => {
        this.team = data[0];
        const elem: any = {
          name: this.team.name,
          toDo: 0,
          inProgress: 0,
          done: 0
        };
        for (const c of this.team.collaborators){
          elem.toDo += c.spToDo;
          elem.inProgress += c.spInProgress;
          elem.done += c.spDone;
        }
        this.names.push(elem.name);
        this.spDone.push(elem.toDo);
        this.spToDo.push(elem.inProgress);
        this.spInProgress.push(elem.done);
      });
  }

}
