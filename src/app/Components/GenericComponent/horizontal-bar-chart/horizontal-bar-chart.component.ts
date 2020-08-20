import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import {Color, Label} from 'ng2-charts';
// @ts-ignore
import Chart = require('chart.js');

@Component({
  selector: 'app-horizontal-bar-chart',
  templateUrl: './horizontal-bar-chart.component.html',
  styleUrls: ['./horizontal-bar-chart.component.css']
})
export class HorizontalBarChartComponent implements  OnChanges{
  @Input() names: Array<string>;
  @Input() spAqualifierBacAffinnage: Array<number>;
  @Input() spAfaire: Array<number>;
  @Input() spEnAttente: Array<number>;
  @Input() spRefuseEnRecette: Array<number>;
  @Input() spEncoursDevTermineTestCroise: Array<number>;
  @Input() spAlivrer: Array<number>;
  @Input() spATester: Array<number>;
  @Input() spValideEnRecetteLivreTermine: Array<number>;
  barChartOptions: ChartOptions;
  barChartLabels: Label[]; // Collaborators identity
  barChartType: ChartType;
  barChartLegend: boolean;
  barChartPlugins = [];
  barChartData: ChartDataSets[];
  barChartColors: Color[];

  constructor() {
    Chart.defaults.global.defaultFontSize = 18;
    Chart.defaults.global.defaultFontColor = 'black';
    Chart.defaults.global.defaultFontStyle = 'bold';
    this.barChartType = 'horizontalBar';
    this.barChartLegend = true;
    this.barChartOptions = {
      title: {
        text: 'Etats des Story Points dans le sprint pour l\' équipe ',
        display: true,
        fontSize: 16,
        fontColor: 'black'
      },
      responsive: true,
      legend: {
        labels: {
          fontColor: 'black',
          fontSize: 16,
        }

      }
    };
    this.barChartColors = [
      {backgroundColor: '#696969'}, // Dark grey
      {backgroundColor: '#c0c0c0'}, // Light grey
      {backgroundColor: '#f29120'}, // Orange
      {backgroundColor: 'red'}, // Red
      {backgroundColor: '#4682B4'}, // Dark blue
      {backgroundColor: '#87CEFA'}, // Light blue
      {backgroundColor: '#b1c113'}, // Light green
      {backgroundColor: '#7a9823'}, // Dark green
    ];
    this.barChartLabels = [];
    this.barChartData = [];
  }

  ngOnChanges(): void {
    if (this.checkDefined())
    {
      this.barChartData = [
          {data: this.spAqualifierBacAffinnage, label: 'A qualifier/Bac d\'affinage', stack: 'a'},
          {data: this.spAfaire, label: 'A faire', stack: 'a'},
          {data: this.spEnAttente, label: 'En Attente', stack: 'a'},
          {data: this.spRefuseEnRecette, label: 'Refusé en recette', stack: 'a'},
          {data: this.spEncoursDevTermineTestCroise, label: 'En cours/Dev terminé/Test croisé/ MR', stack: 'a'},
          {data: this.spAlivrer, label: 'A livrer', stack: 'a'},
          {data: this.spATester, label: 'A tester', stack: 'a'},
          {data: this.spValideEnRecetteLivreTermine, label: 'Validé en recette/Livré/Terminé', stack: 'a'}
      ];
      this.barChartLabels = this.names;
    }
  }

  /**
   * Checks whether input variables are defined or not
   * @return: Boolean response, true if it's the case, false otherwise
   */
  checkDefined(): boolean {
    if (typeof this.names !== 'undefined' &&
        typeof this.spAqualifierBacAffinnage !== 'undefined' &&
        typeof this.spAfaire !== 'undefined' &&
        typeof this.spEnAttente !== 'undefined' &&
        typeof this.spRefuseEnRecette !== 'undefined' &&
        typeof this.spEncoursDevTermineTestCroise !== 'undefined' &&
        typeof this.spAlivrer !== 'undefined' &&
        typeof this.spATester !== 'undefined' &&
        typeof this.spValideEnRecetteLivreTermine !== 'undefined') {
      return true;
    }else{
      return false;
    }
  }
}
