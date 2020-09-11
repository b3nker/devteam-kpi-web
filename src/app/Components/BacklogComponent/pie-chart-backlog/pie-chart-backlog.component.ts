import {Component, Input, OnChanges} from '@angular/core';
import {Backlog} from '../../../Model/backlog';
import {ChartOptions, ChartType} from 'chart.js';
import {Label} from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
// @ts-ignore
import Chart = require('chart.js');

@Component({
    selector: 'app-pie-chart-backlog',
    templateUrl: './pie-chart-backlog.component.html',
    styleUrls: ['./pie-chart-backlog.component.css']
})
export class PieChartBacklogComponent implements OnChanges {
    @Input() backlog: Backlog;
    bugRepartition: number[]; // index : {0: low, 1: medium, 2: high, 3: highest}
    pieChartBugLabels: Label[];
    pieChartBugData: number[];
    pieChartOptions: ChartOptions;
    pieChartType: ChartType;
    pieChartLegend;
    pieChartPlugins;
    pieChartColors;

    constructor(){
        this.bugRepartition = [];
        this.pieChartBugData = [];
        Chart.defaults.global.defaultFontSize = 16;
        Chart.defaults.global.defaultFontColor = 'black';
        this.pieChartColors = [
            {
                backgroundColor: [
                    '#9FE26F',
                    '#E2D96F',
                    '#E28C6F',
                    '#E36F7C'
                ],
            },
        ];
        this.pieChartPlugins = [pluginDataLabels];
        this.pieChartLegend = false;
        this.pieChartType = 'pie';
        this.pieChartOptions = {
            responsive: true,
            legend: {
                position: 'right',
            },
            plugins: {
                datalabels: {
                },
            }
        };
    }

    ngOnChanges(): void {
        if (typeof this.backlog !== 'undefined') {
            this.bugRepartition.push(
                this.backlog.nbBugsLow,
                this.backlog.nbBugsMedium,
                this.backlog.nbBugsHigh,
                this.backlog.nbBugsHighest
            );
            this.pieChartBugLabels = [
                'Low: ' + this.backlog.nbBugsLow,
                'Medium: ' + this.backlog.nbBugsMedium,
                'High: ' + this.backlog.nbBugsHigh,
                'Highest: ' + this.backlog.nbBugsHighest
            ];
            this.pieChartBugData = this.bugRepartition;
        }
    }
}
