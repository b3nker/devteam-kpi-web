import {Component, Input, OnChanges} from '@angular/core';

import {Team} from '../../../Model/team';
// @ts-ignore
import {ChartElement} from '../../../Interface/chart-element';
import {TeamService} from '../../../Service/team.service';


@Component({
    selector: 'app-team-charts',
    templateUrl: './team-charts.component.html',
    styleUrls: ['./team-charts.component.css']
})
export class TeamChartsComponent implements OnChanges {
    @Input() team: Team;
    names: Array<string>;
    spAqualifierBacAffinnage: Array<number>;
    spAfaire: Array<number>;
    spEnAttente: Array<number>;
    spRefuseEnRecette: Array<number>;
    spEncoursDevTermineTestCroise: Array<number>;
    spAlivrer: Array<number>;
    spATester: Array<number>;
    spValideEnRecetteLivreTermine: Array<number>;
    UNASSIGNED_ACCOUNT_ID = 'unassigned';

    constructor(){
    }

    ngOnChanges(): void {
        if (typeof this.team !== 'undefined') {
            this.resetValues();
            const elem = TeamService.generateEmptyChartElement('Story points assignés');
            const unassignedElem = TeamService.generateEmptyChartElement('Story points non assignés');
            for (const c of this.team.collaborators) {
                if (c.accountId !== this.UNASSIGNED_ACCOUNT_ID){
                    TeamService.updateChartElement(c, elem);
                }else{
                    TeamService.updateChartElement(c, unassignedElem);
                }
            }
            this.pushElement(elem);
            this.pushElement(unassignedElem);
        }
    }

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

    resetValues(): void{
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

}
