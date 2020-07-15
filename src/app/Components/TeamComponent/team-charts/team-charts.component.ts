import {Component, Input, OnChanges} from '@angular/core';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import {Color, Label} from 'ng2-charts';
import {Team} from '../../../Model/team';

@Component({
    selector: 'app-team-charts',
    templateUrl: './team-charts.component.html',
    styleUrls: ['./team-charts.component.css']
})
export class TeamChartsComponent implements OnChanges {
    @Input() team: Team;
    private names: Array<string> = [];

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
            const elem: any = {
                name: this.team.name,
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
                if (!c.getFullName().includes('Non Assigné')) {
                    elem.aQualifier += c.spAqualifier;
                    elem.bacAffinage += c.spBacAffinage;
                    elem.enAttente += c.spEnAttente;
                    elem.aFaire += c.spAfaire;
                    elem.enCours += c.spEncours;
                    elem.abandonne += c.spAbandonne;
                    elem.devTermine += c.spDevTermine;
                    elem.aValider += c.spAvalider;
                    elem.aLivrer += c.spAlivrer;
                    elem.aTester += c.spATester;
                    elem.refuseEnRecette += c.spRefuseEnRecette;
                    elem.valideEnRecette += c.spValideEnRecette;
                    elem.livre += c.spLivre;
                    elem.termine += c.spTermine;
                }
            }
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
        }
    }
}
