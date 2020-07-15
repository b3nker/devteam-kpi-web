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
  private ROLE = 'front';
  private spAqualifier: Array<Array<number>> = [];
  private spBacAffinage: Array<number> = [];
  private spEnAttente: Array<number> = [];
  private spAfaire: Array<number> = [];
  private spEncours: Array<number> = [];
  private spAbandonne: Array<number> = [];
  private spDevTermine: Array<number> = [];
  private spAvalider: Array<number> = [];
  private spAlivrer: Array<number> = [];
  private spATester: Array<number> = [];
  private spRefuseEnRecette: Array<number> = [];
  private spValideEnRecette: Array<number> = [];
  private spLivre: Array<number> = [];
  private spTermine: Array<number> = [];
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
    {data: this.spAqualifier, label: 'A Qualifier', stack: 'a'},
    {data: this.spBacAffinage, label: 'Bac Affinage', stack: 'a'},
    {data: this.spEnAttente, label: 'En Attente', stack: 'a'},
    {data: this.spAfaire, label: 'A faire', stack: 'a'},
    {data: this.spEncours, label: 'En cours', stack: 'a'},
    {data: this.spAbandonne, label: 'Abandonné', stack: 'a'},
    {data: this.spDevTermine, label: 'Dev Terminé', stack: 'a'},
    {data: this.spAvalider, label: 'A Valider', stack: 'a'},
    {data: this.spAlivrer, label: 'A Livrer', stack: 'a'},
    {data: this.spATester, label: 'A Tester', stack: 'a'},
    {data: this.spRefuseEnRecette, label: 'Refusé en Recette', stack: 'a'},
    {data: this.spValideEnRecette, label: 'Validé en Recette', stack: 'a'},
    {data: this.spLivre, label: 'Livré', stack: 'a'},
    {data: this.spTermine, label: 'Terminé', stack: 'a'}
  ];
  public barChartColors: Color[] = [
    {backgroundColor: '#DCDCDC'},
    {backgroundColor: '#59ABE3'},
    {backgroundColor: '#26A65B'}
  ];

  ngOnChanges(): void {
    if (typeof this.team !== 'undefined') {
      const all: any = {
        name: this.ROLE,
        aQualifier: 0,
        bacAffinage: 0,
        enAttente: 0,
        aFaire: 0,
        enCours: 0,
        abandonne: 0,
        devTermine: 0,
        aValider: 0,
        aLivrer: 0,
        aTester: 0,
        refuseEnRecette: 0,
        valideEnRecette: 0,
        livre: 0,
        termine: 0
      };
      for (const c of this.team.collaborators) {
        if (!c.getFullName().includes('Non Assigné') && c.role === this.ROLE) {
          const elem: any = {
            name: c.getFullName(),
            aQualifier: c.spAqualifier,
            bacAffinage: c.spBacAffinage,
            enAttente: c.spEnAttente,
            aFaire: c.spAfaire,
            enCours: c.spEncours,
            abandonne: c.spAbandonne,
            devTermine: c.spDevTermine,
            aValider: c.spAvalider,
            aLivrer: c.spAlivrer,
            aTester: c.spATester,
            refuseEnRecette: c.spRefuseEnRecette,
            valideEnRecette: c.spValideEnRecette,
            livre: c.spLivre,
            termine: c.spTermine
          };
          this.names.push(elem.name);
          this.spAqualifier.push(elem.aQualifier);
          this.spBacAffinage.push(elem.bacAffinage);
          this.spEnAttente.push(elem.enAttente);
          this.spAfaire.push(elem.aFaire);
          this.spEncours.push(elem.enCours);
          this.spAbandonne.push(elem.abandonne);
          this.spDevTermine.push(elem.devTermine);
          this.spAvalider.push(elem.aValider);
          this.spAlivrer.push(elem.aLivrer);
          this.spATester.push(elem.aTester);
          this.spRefuseEnRecette.push(elem.refuseEnRecette);
          this.spValideEnRecette.push(elem.valideEnRecette);
          this.spLivre.push(elem.livre);
          this.spTermine.push(elem.termine);
          // On aggrège tous les story points dans la variable "all"
          all.aQualifier += c.spAqualifier;
          all.bacAffinage += c.spBacAffinage;
          all.enAttente += c.spEnAttente;
          all.aFaire += c.spAfaire;
          all.enCours += c.spEncours;
          all.abandonne += c.spAbandonne;
          all.devTermine += c.spDevTermine;
          all.aValider += c.spAvalider;
          all.aLivrer += c.spAlivrer;
          all.aTester += c.spATester;
          all.refuseEnRecette += c.spRefuseEnRecette;
          all.valideEnRecette += c.spValideEnRecette;
          all.livre += c.spLivre;
          all.termine += c.spTermine;
        }
      }
      this.names.unshift(all.name);
      this.spAqualifier.unshift(all.aQualifier);
      this.spBacAffinage.unshift(all.bacAffinage);
      this.spEnAttente.unshift(all.enAttente);
      this.spAfaire.unshift(all.aFaire);
      this.spEncours.unshift(all.enCours);
      this.spAbandonne.unshift(all.abandonne);
      this.spDevTermine.unshift(all.devTermine);
      this.spAvalider.unshift(all.aValider);
      this.spATester.unshift(all.aTester);
      this.spRefuseEnRecette.unshift(all.refuseEnRecette);
      this.spValideEnRecette.unshift(all.valideEnRecette);
      this.spLivre.unshift(all.livre);
      this.spTermine.unshift(all.termine);
    }
  }
}
