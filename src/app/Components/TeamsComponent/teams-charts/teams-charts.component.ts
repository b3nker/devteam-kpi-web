import {Component, Input, OnChanges} from '@angular/core';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import {Color, Label} from 'ng2-charts';
import {Team} from '../../../Model/team';
import {Sprint} from '../../../Model/sprint';
// @ts-ignore
import Chart = require('chart.js');
import {Collaborator} from '../../../Model/collaborator';
import {ChartElement} from '../../TeamComponent/team-charts/team-charts.component';

@Component({
  selector: 'app-teams-charts',
  templateUrl: './teams-charts.component.html',
  styleUrls: ['./teams-charts.component.css']
})
export class TeamsChartsComponent implements OnChanges {
  @Input() teams: Team[];
  @Input() sprints: Sprint[];
  private names: Array<string> = [];
  private spAqualifierBacAffinnage: Array<number> = [];
  private spAfaire: Array<number> = [];
  private spEnAttente: Array<number> = [];
  private spRefuseEnRecette: Array<number> = [];
  private spEncoursDevTermine: Array<number> = [];
  private spAlivrer: Array<number> = [];
  private spATester: Array<number> = [];
  private spValideEnRecetteLivreTermine: Array<number> = [];
  public barChartOptions: ChartOptions;
  public barChartLabels: Label[]; // Collaborators
  public barChartType: ChartType;
  public barChartLegend;
  public barChartPlugins;
  public barChartData: ChartDataSets[];
  public barChartColors: Color[];
  constructor(){
    Chart.defaults.global.defaultFontSize = 18;
    Chart.defaults.global.defaultFontColor = 'black';
    Chart.defaults.global.defaultFontStyle = 'bold';
    this.barChartLabels = this.names;
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
    this.barChartData = [
      {data: this.spAqualifierBacAffinnage, label: 'A qualifier/Bac d\'affinage', stack: 'a'},
      {data: this.spAfaire, label: 'A faire', stack: 'a'},
      {data: this.spEnAttente, label: 'En Attente', stack: 'a'},
      {data: this.spRefuseEnRecette, label: 'Refusé en recette', stack: 'a'},
      {data: this.spEncoursDevTermine, label: 'En cours/Dev terminé', stack: 'a'},
      {data: this.spAlivrer, label: 'A livrer', stack: 'a'},
      {data: this.spATester, label: 'A tester', stack: 'a'},
      {data: this.spValideEnRecetteLivreTermine, label: 'Validé en recette/Livré/Terminé', stack: 'a'},
    ];
  }
  ngOnChanges(): void {
    if (typeof this.teams !== 'undefined') {
      for (const t of this.teams) {
        const elem: any = {
          name: t.name,
          aQualifierBacAffinnage: 0,
          aFaire: 0,
          enAttente: 0,
          refuseEnRecette: 0,
          enCoursDevTermine: 0,
          aLivrer: 0,
          aTester: 0,
          valideEnRecetteLivreTermine: 0
        };
        for (const c of t.collaborators) {
            elem.aQualifierBacAffinnage += c.spAqualifier + c.spBacAffinage;
            elem.aFaire += c.spAfaire;
            elem.enAttente += c.spEnAttente;
            elem.refuseEnRecette += c.spRefuseEnRecette;
            elem.enCoursDevTermine += c.spEncours + c.spDevTermine + c.spTestCroise;
            elem.aLivrer += c.spAlivrer;
            elem.aTester += c.spATester;
            elem.valideEnRecetteLivreTermine += c.spValideEnRecette + c.spLivre + c.spTermine;
        }
        this.names.push(elem.name);
        this.spAqualifierBacAffinnage.push(elem.aQualifierBacAffinnage);
        this.spAfaire.push(elem.aFaire);
        this.spEnAttente.push(elem.enAttente);
        this.spRefuseEnRecette.push(elem.refuseEnRecette);
        this.spEncoursDevTermine.push(elem.enCoursDevTermine);
        this.spAlivrer.push(elem.aLivrer);
        this.spATester.push(elem.aTester);
        this.spValideEnRecetteLivreTermine.push(elem.valideEnRecetteLivreTermine);
      }
    }
  }

  generateChartElement(nameAttribute: string): ChartElement{
    const elem: ChartElement = {
      name: nameAttribute,
      aQualifierBacAffinnage: 0,
      aFaire: 0,
      enAttente: 0,
      refuseEnRecette: 0,
      enCoursDevTermineTestCroise: 0,
      aLivrer: 0,
      aTester: 0,
      valideEnRecetteLivreTermine: 0
    };
    return elem;
  }

  /* Method that push ChartElement's data to each Chart attribute
   *
   */
  pushElement(elem: ChartElement): void{
    this.names.push(elem.name);
    this.spAqualifierBacAffinnage.push(elem.aQualifierBacAffinnage);
    this.spAfaire.push(elem.aFaire);
    this.spEnAttente.push(elem.enAttente);
    this.spRefuseEnRecette.push(elem.refuseEnRecette);
    this.spEncoursDevTermine.push(elem.enCoursDevTermineTestCroise);
    this.spAlivrer.push(elem.aLivrer);
    this.spATester.push(elem.aTester);
    this.spValideEnRecetteLivreTermine.push(elem.valideEnRecetteLivreTermine);
  }

  /* Method that add collaborator story points' data to a ChartElement
   *
   */
  updateChartElement(c: Collaborator, elem: ChartElement): void{
    elem.aQualifierBacAffinnage += c.spAqualifier + c.spBacAffinage;
    elem.aFaire += c.spAfaire;
    elem.enAttente += c.spEnAttente;
    elem.refuseEnRecette += c.spRefuseEnRecette;
    elem.enCoursDevTermineTestCroise += c.spEncours + c.spDevTermine;
    elem.aLivrer += c.spAlivrer;
    elem.aTester += c.spATester;
    elem.valideEnRecetteLivreTermine += c.spValideEnRecette + c.spLivre + c.spTermine;
  }
}
