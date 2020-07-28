import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Team} from '../../../Model/team';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import {Color, Label} from 'ng2-charts';
import {Collaborator} from '../../../Model/collaborator';

export interface ChartElement {
  name: string;
  aQualifierBacAffinnage: number;
  aFaire: number;
  enAttente: number;
  refuseEnRecette: number;
  enCoursDevTermine: number;
  aLivrer: number;
  aTester: number;
  valideEnRecetteLivreTermine: number;
}
@Component({
  selector: 'app-team-charts-front',
  templateUrl: './team-charts-front.component.html',
  styleUrls: ['./team-charts-front.component.css']
})
export class TeamChartsFrontComponent implements OnChanges {
  @Input() team: Team;
  @Input() anonymizedNames: Map<string, string>;
  names: Array<string> = [];
  spAqualifierBacAffinnage: Array<number> = [];
  spAfaire: Array<number> = [];
  spEnAttente: Array<number> = [];
  spRefuseEnRecette: Array<number> = [];
  spEncoursDevTermine: Array<number> = [];
  spAlivrer: Array<number> = [];
  spATester: Array<number> = [];
  spValideEnRecetteLivreTermine: Array<number> = [];
  UNASSIGNED_ACCOUNT_ID: string;
  barChartOptions: ChartOptions;
  barChartLabels: Label[]; // Collaborators identity
  barChartType: ChartType;
  barChartLegend: boolean;
  barChartPlugins = [];
  barChartData: ChartDataSets[];
  barChartColors: Color[];
  ROLE: string;

  constructor(){
    this.ROLE = 'Front';
    this.UNASSIGNED_ACCOUNT_ID = 'unassigned';
    this.barChartLabels = this.names;
    this.barChartType = 'horizontalBar';
    this.barChartLegend = true;
    this.barChartOptions = {
      title: {
        text: 'Etats des Story Points dans le sprint pour l\' équipe ',
        display: true
      },
      responsive: true,
    };
    this.barChartColors = [
      {backgroundColor: '#696969'}, // Dark grey
      {backgroundColor: '#c0c0c0'}, // Light grey
      {backgroundColor: '#f29120'}, // Orange
      {backgroundColor: 'red'}, // Red
      {backgroundColor: '#0052cc'}, // Dark blue
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
    if (typeof this.team !== 'undefined') {
      const all: any = {
        name: this.ROLE,
        aQualifierBacAffinnage: 0,
        aFaire: 0,
        enAttente: 0,
        refuseEnRecette: 0,
        enCoursDevTermine: 0,
        aLivrer: 0,
        aTester: 0,
        valideEnRecetteLivreTermine: 0
      };
      for (const c of this.team.collaborators) {
        if (c.role.toUpperCase().includes(this.ROLE.toUpperCase())) {
          const elem = this.generateChartElement(c, this.anonymizedNames);
          this.pushElement(elem);
          this.updateChartElement(c, all);
        }
      }
      this.unshiftElement(all);
      }
  }

  generateChartElement(c: Collaborator, anonym: Map<string, string>): ChartElement{
    const elem: ChartElement = {
      name: anonym.get(c.accountId),
      aQualifierBacAffinnage: c.spAqualifier + c.spBacAffinage,
      aFaire: c.spAfaire,
      enAttente: c.spEnAttente,
      refuseEnRecette: c.spRefuseEnRecette,
      enCoursDevTermine: c.spEncours + c.spDevTermine,
      aLivrer: c.spAlivrer,
      aTester: c.spATester,
      valideEnRecetteLivreTermine: c.spValideEnRecette + c.spLivre + c.spTermine
    };
    return elem;
  }

  /* Find a way not to duplicate these methods
   *
   */
  pushElement(elem: ChartElement): void{
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

  unshiftElement(elem: ChartElement): void{
    this.names.unshift(elem.name);
    this.spAqualifierBacAffinnage.unshift(elem.aQualifierBacAffinnage);
    this.spAfaire.unshift(elem.aFaire);
    this.spEnAttente.unshift(elem.enAttente);
    this.spRefuseEnRecette.unshift(elem.refuseEnRecette);
    this.spEncoursDevTermine.unshift(elem.enCoursDevTermine);
    this.spAlivrer.unshift(elem.aLivrer);
    this.spATester.unshift(elem.aTester);
    this.spValideEnRecetteLivreTermine.unshift(elem.valideEnRecetteLivreTermine);
  }


  updateChartElement(c: Collaborator, elem: ChartElement): void{
    elem.aQualifierBacAffinnage += c.spAqualifier + c.spBacAffinage;
    elem.aFaire += c.spAfaire;
    elem.enAttente += c.spEnAttente;
    elem.refuseEnRecette += c.spRefuseEnRecette;
    elem.enCoursDevTermine += c.spEncours + c.spDevTermine;
    elem.aLivrer += c.spAlivrer;
    elem.aTester += c.spATester;
    elem.valideEnRecetteLivreTermine += c.spValideEnRecette + c.spLivre + c.spTermine;
  }
}
