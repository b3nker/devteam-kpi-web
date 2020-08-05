import {Component, Input, OnChanges} from '@angular/core';
import {Label} from 'ng2-charts';
import {ChartDataSets, ChartOptions} from 'chart.js';
import {Backlog} from '../../../Model/backlog';
// @ts-ignore
import Chart = require('chart.js');

@Component({
    selector: 'app-line-chart-backlog',
    templateUrl: './line-chart-backlog.component.html',
    styleUrls: ['./line-chart-backlog.component.css']
})
export class LineChartBacklogComponent implements OnChanges {
    @Input() backlog: Backlog;
    sumCreated;
    sumResolved;
    sumInProgress;
    lineChartData: ChartDataSets[];
    lineChartLabels: Label[];
    lineChartOptions: (ChartOptions & { annotation: any });
    lineChartColors;
    lineChartLegend;
    lineChartType;

    constructor() {
        this.sumCreated = 0;
        this.sumResolved = 0;
        this.sumInProgress = 0;
        Chart.defaults.global.defaultFontSize = 18;
        Chart.defaults.global.defaultFontColor = 'black';
        this.lineChartType = 'line';
        this.lineChartLegend = true;
        this.lineChartColors = [
            {
                backgroundColor: 'rgba(255,0,0,0.3)',
                borderColor: 'red',
                pointBackgroundColor: 'rgba(255,0,0,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(255,0,0,0.8)'
            },
            {
                backgroundColor: 'rgb(0,128,0,0.3)',
                borderColor: 'green',
                pointBackgroundColor: 'rgb(0,128,0,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(0,128,0,0.8)'
            },
        ];
        this.lineChartData = [
            {data: [], label: ''}
        ];
        this.lineChartLabels = [];
        this.lineChartOptions = {
            title: {
                text: 'Nombre de bugs crées et résolus sur le projet BMKP lors des derniers jours ',
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
                            labelString: 'Number of bugs'
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
    }

    ngOnChanges(): void {
        if (typeof this.backlog !== 'undefined') {
            const bugsCreated: any = {
                data: this.backlog.nbBugsCreated,
                label: 'Bugs Created'
            };
            const bugsResolved: any = {
                data: this.backlog.nbBugsResolved,
                label: 'Bugs Resolved'
            };
            this.lineChartData = [bugsCreated, bugsResolved];
            for (const date of this.getDates()) {
                this.lineChartLabels.push(date);
            }
            // SUMMING VALUES
            for (const value of this.backlog.nbBugsCreated) {
                this.sumCreated += value;
            }
            for (const value of this.backlog.nbBugsResolved) {
                this.sumResolved += value;
            }
        }
    }

    /* Returns an array of strings of the size of nbBugsResolved/Created's array.
     * Index "0" corresponds to today's date.
     * Index "max", length(array bugs created) date (representing 'x' days ago date)
     */
    getDates(): string[] {
        const dates: string [] = [];
        for (let i = 0; i < this.backlog.nbBugsResolved.length; i++) {
            const date = new Date();
            date.setDate(date.getDate() - i);
            dates.unshift(date.toDateString());
        }
        return dates;
    }
}
