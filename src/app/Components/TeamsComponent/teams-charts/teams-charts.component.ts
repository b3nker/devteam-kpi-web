import {Component, Input, OnChanges} from '@angular/core';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import {Color, Label} from 'ng2-charts';
import {Team} from '../../../Model/team';

@Component({
  selector: 'app-teams-charts',
  templateUrl: './teams-charts.component.html',
  styleUrls: ['./teams-charts.component.css']
})
export class TeamsChartsComponent implements OnChanges {
  @Input() teams: Array<Team> = [];
  private names: Array<string> = [];
  private spAqualifierBacAffinnage: Array<Array<number>> = [];
  private spAfaire: Array<number> = [];
  private spEnAttente: Array<number> = [];
  private spRefuseEnRecette: Array<number> = [];
  private spEncoursDevTermine: Array<number> = [];
  private spAlivrer: Array<number> = [];
  private spATester: Array<number> = [];
  private spValideEnRecetteLivreTermine: Array<number> = [];
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = this.names; // Collaborators
  public barChartType: ChartType = 'horizontalBar';
  public barChartLegend = true;
  public barChartPlugins = [];
  public barChartData: ChartDataSets[] = [
    {data: this.spAqualifierBacAffinnage, label: 'A qualifier/Bac d\'affinage', stack: 'a'},
    {data: this.spAfaire, label: 'A faire', stack: 'a'},
    {data: this.spEnAttente, label: 'En Attente', stack: 'a'},
    {data: this.spRefuseEnRecette, label: 'Refusé en recette', stack: 'a'},
    {data: this.spEncoursDevTermine, label: 'En cours/Dev terminé', stack: 'a'},
    {data: this.spAlivrer, label: 'A livrer', stack: 'a'},
    {data: this.spATester, label: 'A tester', stack: 'a'},
    {data: this.spValideEnRecetteLivreTermine, label: 'Validé en recette/Livré/Terminé', stack: 'a'},
  ];
  public barChartColors: Color[] = [
    {backgroundColor: '#696969'}, // gris foncé
    {backgroundColor: '#c0c0c0'}, // gris clair
    {backgroundColor: '#f29120'}, // orange
    {backgroundColor: 'red'}, // rouge
    {backgroundColor: '#0052cc'}, // bleu foncé
    {backgroundColor: '#87CEFA'}, // bleu clair
    {backgroundColor: '#b1c113'}, // vert clair
    {backgroundColor: '#7a9823'}, // vert foncé

  ];

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
          if (!c.getFullName().includes('Non Assigné')) {
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
}
