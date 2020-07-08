import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import {Color, Label} from 'ng2-charts';
import {CollaboratorService} from '../../../collaborator.service';
import {Collaborator} from '../../../collaborator';
import {Router} from '@angular/router';

@Component({
  selector: 'app-horizontal-bar-chart',
  templateUrl: './horizontal-bar-chart.component.html',
  styleUrls: ['./horizontal-bar-chart.component.css']
})
export class HorizontalBarChartComponent implements OnInit {
  private collaborators: Array<Collaborator>;
  private nameCollaborators: Array<string> = [];
  private numberTickets: Array<number> = [];
  constructor(private collaboratorService: CollaboratorService, private router: Router) { }
  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = this.nameCollaborators;
  public barChartType: ChartType = 'horizontalBar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];
  public barChartColors: Color[] = [
    { backgroundColor: 'red' },
    { backgroundColor: 'green' },
  ];

  public barChartData: ChartDataSets[] = [
    { data: this.numberTickets, label: 'Nombre de tickets finis' },
  ];
  ngOnInit(): void {
    this.collaboratorService.getCollaborators(this.router.url).subscribe(data => {
      this.collaborators = data;
      // tslint:disable-next-line:prefer-for-of
      for (const elem of this.collaborators){
        this.nameCollaborators.push(elem.getFullName());
        this.numberTickets.push(elem.nbToDo);
      }
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
