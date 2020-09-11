import {Component, Input, OnChanges} from '@angular/core';
import {Retrospective} from '../../../Model/retrospective';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import {Color, Label} from 'ng2-charts';
// @ts-ignore
import Chart = require('chart.js');
import {Config} from '../../../Model/config';

@Component({
  selector: 'app-team-retrospective-bar-chart',
  templateUrl: './team-retrospective-bar-chart.component.html',
  styleUrls: ['./team-retrospective-bar-chart.component.css']
})
export class TeamRetrospectiveBarChartComponent implements OnChanges {
  @Input() retrospective: Retrospective;
  public initialCommitments: Array<number>;
  public completedWorks: Array<number>;
  public addedWorks: Array<number>;
  public finalCommitments: Array<number>;
  public sprintNames: Array<string>;
  public barChartOptions: ChartOptions;
  public barChartLabels: Label[];
  public barChartType: ChartType;
  public barChartLegend;
  public barChartData: ChartDataSets[];
  public barChartColors: Color[];
  public urls: Map<string, string>;
  public url: string;
  public sprints: Array<string>;

  constructor() {
    Chart.defaults.global.defaultFontSize = 18;
    Chart.defaults.global.defaultFontColor = 'black';
    Chart.defaults.global.defaultFontStyle = 'bold';
    this.sprints = [];
    this.url = Config.jiraDomain + '/issues/?jql=issue in (';
    this.urls = new Map<string, string>();
    this.initialCommitments = [];
    this.completedWorks = [];
    this.addedWorks = [];
    this.finalCommitments = [];
    this.sprintNames = [];
    this.barChartOptions = {
      title: {
        text: 'Charge et performance de l\'équipe sur les derniers sprints (en Story Points) ',
        display: true,
        position: 'bottom'
      },
      responsive: true,
      // We use these empty structures as placeholders for dynamic theming.
      scales: { xAxes: [{}], yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Nombre de story points'
          },
        }] },
    };
    this.barChartLabels = [];
    this.barChartType = 'bar';
    this.barChartLegend = true;
    this.barChartData = [
      {data: [], label: ''}
    ];
    this.barChartColors = [
      { backgroundColor: '#0077b6' }, // Blue
      { backgroundColor: '#d62828' }, // Red
      { backgroundColor: '#90be6d' }, // Green
      { backgroundColor: '#8d99ae' }, // Black
    ];
  }

  ngOnChanges(): void {
    if (typeof this.retrospective !== 'undefined'){
      for (const s of this.retrospective.sprints){
        this.initialCommitments.unshift(s.initialCommitment);
        this.completedWorks.unshift(s.completedWork);
        this.addedWorks.unshift(s.addedWork);
        this.finalCommitments.unshift(s.finalCommitment);
        if (s.name == null){
          this.sprintNames.unshift('N/D');
        }else{
          this.sprintNames.unshift(s.name);
        }
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
        this.barChartData = [initialCommitment, addedWork, completedWork];
        this.barChartLabels = this.sprintNames;

        // Get url to jira with added issue keys
        const str = this.getJqlSearch(s.addedIssueKeys);
        this.urls.set(s.name, str);
      }
      this.getKeys();
    }
  }


  getJqlSearch(issueKeys: string[]): string {
    if (issueKeys === null){
      return null;
    }
    let str = '';
    let i = 1;
    const size = issueKeys.length;
    for (const issueKey of issueKeys){
      if (i === size){
        str += '\'' + issueKey + '\'';
      }else{
        str += '\'' + issueKey + '\',';
        i++;
      }
    }
    return this.url + str + ')';
  }

  getKeys(): void{
    for (const key of this.urls.keys()){
      this.sprints.push(key);
    }
  }
}
