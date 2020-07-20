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
    private bugRepartitionWVEC: number[] = []; // index : {0: low, 1: medium, 2: high, 3: highest}

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
    public pieChartLabelsWVEC: Label[];
    public pieChartDataWVEC: number[] = [];
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
            this.bugRepartitionWVEC.push(
                this.backlog.nbBugsLowWVEC,
                this.backlog.nbBugsMediumWVEC,
                this.backlog.nbBugsHighWVEC,
                this.backlog.nbBugsHighestWVEC
            );
            this.pieChartLabelsWVEC = [
                'Low: ' + this.backlog.nbBugsLowWVEC,
                'Medium: ' + this.backlog.nbBugsMediumWVEC,
                'High: ' + this.backlog.nbBugsHighWVEC,
                'Highest: ' + this.backlog.nbBugsHighestWVEC
            ];
            this.pieChartDataWVEC = this.bugRepartitionWVEC;
        }
    }
}
