import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Retrospective} from '../../../Model/retrospective';
import {ChartDataSets, ChartOptions} from 'chart.js';
import {Color, Label} from 'ng2-charts';

@Component({
    selector: 'app-team-retrospective-line-chart',
    templateUrl: './team-retrospective-line-chart.component.html',
    styleUrls: ['./team-retrospective-line-chart.component.css']
})
export class TeamRetrospectiveLineChartComponent implements OnChanges {
    @Input() retrospective: Retrospective;
    public percentageDone: Array<number> = [];
    public sprintNames: Array<string> = [];
    public lineChartData: ChartDataSets[] = [
        {data: [], label: ''}
    ];
    public thresholdValue = 80;
    public lineChartLabels: Label[] = [];
    public lineChartOptions: (ChartOptions & { annotation: any }) = {
        title: {
            text: 'Travail abattu par l\'équipe sur les derniers sprints ',
            display: true
        },
        responsive: true,
        scales: {
            // We use this empty structure as a placeholder for dynamic theming.
            xAxes: [{}],
            yAxes: [
                {
                    scaleLabel: {
                        display: true,
                        labelString: '%'
                    },
                    id: 'y-axis-0',
                    position: 'left',
                }
            ]
        },
        annotation: {
            annotations: [
                {
                    type: 'line',
                    mode: 'vertical',
                    scaleID: 'x-axis-0',
                    value: 'March',
                    borderColor: 'orange',
                    borderWidth: 2,
                    label: {
                        enabled: true,
                        fontColor: 'orange',
                        content: 'LineAnno'
                    }
                },
            ],
        },
    };
    public lineChartColors: Color[] = [
        {
            backgroundColor: 'rgb(0,128,0,0.3)',
            borderColor: 'green',
            pointBackgroundColor: 'rgb(0,128,0,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(0,128,0,0.8)'
        },
      {
        backgroundColor: 'rgb(128,128,128,0)',
        borderColor: 'red',
        pointBackgroundColor: 'rgb(128,0,0,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(128,0,0,0.8)'
      },
    ];
    public lineChartLegend = true;
    public lineChartType = 'line';

    constructor() {
    }

    ngOnChanges(): void {
        if (typeof this.retrospective !== 'undefined') {
            for (const s of this.retrospective.sprints) {
                this.sprintNames.unshift(s.name);
                if (s.initialCommitment !== 0) {
                    this.percentageDone.unshift(Math.round((s.completedWork / s.initialCommitment) * 100));
                } else {
                    this.percentageDone.unshift(0);
                }
            }
            const percentage: any = {
                data: this.percentageDone,
                label: '(Completed Work / Initial Commitment)*100'
            };
            const thresholdArray: Array<number> = [];
            for (const val of this.percentageDone) {
                thresholdArray.push(this.thresholdValue);
            }
            const threshold: any = {
                data: thresholdArray,
                label: 'Expected Percentage'
            };
            this.lineChartData = [percentage, threshold];
            this.lineChartLabels = this.sprintNames;
        }
    }
}
