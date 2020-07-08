import { Component, OnInit } from '@angular/core';
import {Collaborator} from '../../../Model/collaborator';
import {CollaboratorService} from '../../../Service/collaborator.service';
import {Router} from '@angular/router';
import {ChartOptions, ChartType} from 'chart.js';
import {Label} from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import {Team} from '../../../Model/team';
import {TeamService} from '../../../Service/team.service';

@Component({
  selector: 'app-team-pie-chart',
  templateUrl: './team-pie-chart.component.html',
  styleUrls: ['./team-pie-chart.component.css']
})
export class TeamPieChartComponent implements OnInit {
// Variables
  private team: Array<Team>;
  private ticketsLabel: Array<string> = ['Todo', 'Done' , 'In progress'];
  private numberTickets: number [] = []; // index : {0: _todo, 1: done, 2: inProgress}
  private totalToDo = 0;
  private totalDone = 0;
  private totalInProgress = 0;
  constructor(private teamService: TeamService, private router: Router ) { }

  // Pie
  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'left',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };
  public pieChartLabels: Label[] = this.ticketsLabel;
  public pieChartData: number[] = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [pluginDataLabels];
  public pieChartColors = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
    },
  ];
  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.teamService.getTeam(this.router.url).subscribe(data => {
      this.team = data;
      for (const elem of this.team[0].collaborators){
        this.totalToDo += elem.nbToDo;
        this.totalDone += elem.nbDone;
        this.totalInProgress += elem.nbInProgress;
      }
      this.numberTickets.push(this.totalToDo, this.totalDone, this.totalInProgress);
      this.pieChartData = this.numberTickets;
    });
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}
