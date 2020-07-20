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
    public lineChartData: ChartDataSets[] = [
      {data: [], label: ''}
    ];
    public lineChartLabels: Label[] = [];
    public lineChartOptions: (ChartOptions & { annotation: any }) = {
        responsive: true,
        scales: {
            // We use this empty structure as a placeholder for dynamic theming.
            xAxes: [{}],
            yAxes: [
                {
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
          this.lineChartData = [bugsCreated, bugsResolved];
          for (const date of this.getDates()) {
            this.lineChartLabels.push(date);
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
          this.lineChartColors.push(elemColorRed, elemColorGreen);
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
