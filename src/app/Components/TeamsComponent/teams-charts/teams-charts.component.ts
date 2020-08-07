import {Component, Input, OnChanges} from '@angular/core';
import {Team} from '../../../Model/team';
import {Sprint} from '../../../Model/sprint';
import {Collaborator} from '../../../Model/collaborator';
import {ChartElement} from '../../../Interface/chart-element';

@Component({
  selector: 'app-teams-charts',
  templateUrl: './teams-charts.component.html',
  styleUrls: ['./teams-charts.component.css']
})
export class TeamsChartsComponent implements OnChanges {
  @Input() teams: Team[];
  @Input() sprints: Sprint[];
  names: Array<string>;
  spAqualifierBacAffinnage: Array<number>;
  spAfaire: Array<number>;
  spEnAttente: Array<number>;
  spRefuseEnRecette: Array<number>;
  spEncoursDevTermineTestCroise: Array<number>;
  spAlivrer: Array<number>;
  spATester: Array<number>;
  spValideEnRecetteLivreTermine: Array<number>;

  constructor() {
    this.names = [];
    this.spAqualifierBacAffinnage = [];
    this.spAfaire = [];
    this.spEnAttente = [];
    this.spRefuseEnRecette = [];
    this.spEncoursDevTermineTestCroise = [];
    this.spAlivrer = [];
    this.spATester = [];
    this.spValideEnRecetteLivreTermine = [];
  }

  ngOnChanges(): void {
    if (typeof this.teams !== 'undefined') {
      for (const t of this.teams) {
        const elem = this.generateChartElement(t.name);
        for (const c of t.collaborators) {
            this.updateChartElement(c, elem);
        }
        this.pushElement(elem);
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
    this.spEncoursDevTermineTestCroise.push(elem.enCoursDevTermineTestCroise);
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
