import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Retrospective} from '../../../Model/retrospective';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import {Color, Label} from 'ng2-charts';

@Component({
  selector: 'app-team-retrospective-bar-chart',
  templateUrl: './team-retrospective-bar-chart.component.html',
  styleUrls: ['./team-retrospective-bar-chart.component.css']
})
export class TeamRetrospectiveBarChartComponent implements OnChanges {
  @Input() retrospective: Retrospective;
  public initialCommitments: Array<number> = [];
  public completedWorks: Array<number> = [];
  public addedWorks: Array<number> = [];
  public finalCommitments: Array<number> = [];
  public sprintNames: Array<string> = [];
  public barChartOptions: ChartOptions = {
    title: {
      text: 'Charge et performance de l\'équipe sur les derniers sprints (en Story Points) ',
      display: true
    },
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
  };
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartData: ChartDataSets[] = [
    {data: [], label: ''}
  ];
  public barChartColors: Color[] = [
    { backgroundColor: '#0077b6' }, // Blue
    { backgroundColor: '#90be6d' }, // Green
    { backgroundColor: '#d62828' }, // Red
    { backgroundColor: '#8d99ae' }, // Black
  ];
  constructor() { }

  ngOnChanges(): void {
    if (typeof this.retrospective !== 'undefined'){
      for (const s of this.retrospective.sprints){
        this.initialCommitments.unshift(s.initialCommitment);
        this.completedWorks.unshift(s.completedWork);
        this.addedWorks.unshift(s.addedWork);
        this.finalCommitments.unshift(s.finalCommitment);
        this.sprintNames.unshift(s.name);
        const initialCommitment: any = {
          data: this.initialCommitments,
          label: 'Initial Commitment'
        };
        const completedWork: any = {
          data: this.completedWorks,
          label: 'Completed Work'
        };
        const addedWork: any = {
          data: this.addedWorks,
          label: 'Added Work'
        };
        const finalCommitment: any = {
          data: this.finalCommitments,
          label: 'Final Commitment'
        };
        this.barChartData = [initialCommitment, completedWork, addedWork, finalCommitment];
        this.barChartLabels = this.sprintNames;
      }

    }
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}
