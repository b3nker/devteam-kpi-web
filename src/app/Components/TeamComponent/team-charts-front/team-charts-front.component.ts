import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Team} from '../../../Model/team';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import {Color, Label} from 'ng2-charts';

@Component({
  selector: 'app-team-charts-front',
  templateUrl: './team-charts-front.component.html',
  styleUrls: ['./team-charts-front.component.css']
})
export class TeamChartsFrontComponent implements OnChanges {
  @Input() team: Team;
  private names: Array<string> = [];
  private anonymNames: Array<string> = [];
  private ROLE = 'Front';
  private spAqualifierBacAffinnage: Array<Array<number>> = [];
  private spAfaire: Array<number> = [];
  private spEnAttente: Array<number> = [];
  private spRefuseEnRecette: Array<number> = [];
  private spEncoursDevTermine: Array<number> = [];
  private spAlivrer: Array<number> = [];
  private spATester: Array<number> = [];
  private spValideEnRecetteLivreTermine: Array<number> = [];
  public barChartOptions: ChartOptions = {
    title: {
      text: 'Repartition des Story Points pour le ' + this.ROLE,
      display: true
    },
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
    {backgroundColor: '#f29120'}, // rouge pastel
    {backgroundColor: 'red'}, // orange
    {backgroundColor: '#0052cc'}, // bleu foncé
    {backgroundColor: '#87CEFA'}, // bleu clair
    {backgroundColor: '#b1c113'}, // vert clair
    {backgroundColor: '#7a9823'}, // vert foncé

  ];

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
        if (c.role.toUpperCase().includes(this.ROLE.toUpperCase()) || c.role === 'none') {
          const elem: any = {
            name: c.getFullName(),
            aQualifierBacAffinnage: c.spAqualifier + c.spBacAffinage,
            aFaire: c.spAfaire,
            enAttente: c.spEnAttente,
            refuseEnRecette: c.spRefuseEnRecette,
            enCoursDevTermine: c.spEncours + c.spDevTermine,
            aLivrer: c.spAlivrer,
            aTester: c.spATester,
            valideEnRecetteLivreTermine: c.spValideEnRecette + c.spLivre + c.spTermine
          };
          this.names.push(elem.name);
          this.spAqualifierBacAffinnage.push(elem.aQualifierBacAffinnage);
          this.spAfaire.push(elem.aFaire);
          this.spEnAttente.push(elem.enAttente);
          this.spRefuseEnRecette.push(elem.refuseEnRecette);
          this.spEncoursDevTermine.push(elem.enCoursDevTermine);
          this.spAlivrer.push(elem.aLivrer);
          this.spATester.push(elem.aTester);
          this.spValideEnRecetteLivreTermine.push(elem.valideEnRecetteLivreTermine);
          // On aggrège tous les story points dans la variable "all"
          all.aQualifierBacAffinnage += c.spAqualifier + c.spBacAffinage;
          all.aFaire += c.spAfaire;
          all.enAttente += c.spEnAttente;
          all.refuseEnRecette += c.spRefuseEnRecette;
          all.enCoursDevTermine += c.spEncours + c.spDevTermine;
          all.aLivrer += c.spAlivrer;
          all.aTester += c.spATester;
          all.valideEnRecetteLivreTermine += c.spValideEnRecette + c.spLivre + c.spTermine;
        }
      }
      this.names.unshift(all.name);
      this.spAqualifierBacAffinnage.unshift(all.aQualifierBacAffinnage);
      this.spAfaire.unshift(all.aFaire);
      this.spEnAttente.unshift(all.enAttente);
      this.spRefuseEnRecette.unshift(all.refuseEnRecette);
      this.spEncoursDevTermine.unshift(all.enCoursDevTermine);
      this.spAlivrer.unshift(all.aLivrer);
      this.spATester.unshift(all.aTester);
      this.spValideEnRecetteLivreTermine.unshift(all.valideEnRecetteLivreTermine);
    }
  }
}
