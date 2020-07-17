import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Backlog} from '../../../Model/backlog';
import {ChartOptions, ChartType} from 'chart.js';
import {Label} from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';

@Component({
    selector: 'app-pie-chart-backlog',
    templateUrl: './pie-chart-backlog.component.html',
    styleUrls: ['./pie-chart-backlog.component.css']
})
export class PieChartBacklogComponent implements OnChanges {
    @Input() backlog: Backlog;
    private bugRepartition: number[] = []; // index : {0: low, 1: medium, 2: high, 3: highest}
    // Pie
    private ticketsLabel: Array<string> = [];
    public pieChartOptions: ChartOptions = {
        responsive: true,
        legend: {
            position: 'right',
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
    public pieChartLegend = false;
    public pieChartPlugins = [pluginDataLabels];
    public pieChartColors = [
        {
            backgroundColor: [
                '#9FE26F',
                '#E2D96F',
                '#E28C6F',
                '#E36F7C'
            ],
        },
    ];

    ngOnChanges(): void {
        if (typeof this.backlog !== 'undefined') {
            this.bugRepartition.push(
                this.backlog.nbBugsLow,
                this.backlog.nbBugsMedium,
                this.backlog.nbBugsHigh,
                this.backlog.nbBugsHighest
            );
            this.pieChartLabels = [
                'Low: ' + this.backlog.nbBugsLow,
                'Medium: ' + this.backlog.nbBugsMedium,
                'High: ' + this.backlog.nbBugsHigh,
                'Highest: ' + this.backlog.nbBugsHighest
            ];
            this.pieChartData = this.bugRepartition;

        }
    }
}
