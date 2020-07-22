import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Color, Label} from 'ng2-charts';
import {ChartDataSets, ChartOptions} from 'chart.js';
import {Backlog} from '../../../Model/backlog';

@Component({
    selector: 'app-line-chart-backlog',
    templateUrl: './line-chart-backlog.component.html',
    styleUrls: ['./line-chart-backlog.component.css']
})
export class LineChartBacklogComponent implements OnChanges {
    @Input() backlog: Backlog;
    public sumCreated = 0;
    public sumResolved = 0;
    public sumInProgress = 0;
    public sumIncidentCreated = 0;
    public sumIncidentResolved = 0;
    public sumIncidentInProgress = 0;
    public lineChartData: ChartDataSets[] = [
        {data: [], label: ''}
    ];
    public lineChartDataIncident: ChartDataSets[] = [
        {data: [], label: ''}
    ];
    public lineChartLabels: Label[] = [];
    public lineChartOptions: (ChartOptions & { annotation: any }) = {
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
    public lineChartOptionsIncident: (ChartOptions & { annotation: any }) = {
        title: {
            text: 'Nombre d\'incidents crées et résolus sur le projet RMKP lors des derniers jours ',
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

    public lineChartColors: Color[] = [];
    public lineChartLegend = true;
    public lineChartType = 'line';

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
            const bugsInProgress: any = {
                data: this.backlog.nbBugsInProgress,
                label: 'Bugs In Progress'
            };
            this.lineChartData = [bugsCreated, bugsResolved, bugsInProgress];

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
            for (const value of this.backlog.nbBugsInProgress) {
                this.sumInProgress += value;
            }
            const incidentsCreated: any = {
                data: this.backlog.nbIncidentsCreated,
                label: 'Incidents Created'
            };
            const incidentsResolved: any = {
                data: this.backlog.nbIncidentsResolved,
                label: 'Incidents Resolved'
            };
            const incidentsInProgress: any = {
                data: this.backlog.nbIncidentsInProgress,
                label: 'Incidents In Progress'
            };
            this.lineChartDataIncident = [incidentsCreated, incidentsResolved, incidentsInProgress];
            // SUMMING VALUES
            for (const value of this.backlog.nbIncidentsCreated) {
                this.sumIncidentCreated += value;
            }
            for (const value of this.backlog.nbIncidentsResolved) {
                this.sumIncidentResolved += value;
            }
            for (const value of this.backlog.nbIncidentsInProgress) {
                this.sumIncidentInProgress += value;
            }
            // COLORS
            // Push grey until the component is fixed, then delete elemColorGrey
            const elemColorRed: any = {
                backgroundColor: 'rgba(255,0,0,0.3)',
                borderColor: 'red',
                pointBackgroundColor: 'rgba(255,0,0,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(255,0,0,0.8)'
            };
            const elemColorGreen: any = {
                backgroundColor: 'rgb(0,128,0,0.3)',
                borderColor: 'green',
                pointBackgroundColor: 'rgb(0,128,0,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(0,128,0,0.8)'
            };
            const elemColorBlue: any = {
                backgroundColor: 'rgb(0,0,128,0.3)',
                borderColor: 'blue',
                pointBackgroundColor: 'rgb(0,0,128,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(0,0,128,0.8)'
            };
            this.lineChartColors.push(elemColorRed, elemColorGreen, elemColorBlue);
        }
    }

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
