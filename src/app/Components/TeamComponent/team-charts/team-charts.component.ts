import {Component, Input, OnChanges} from '@angular/core';

import {Team} from '../../../Model/team';
import {Collaborator} from '../../../Model/collaborator';
// @ts-ignore
import {ChartElement} from '../../../Interface/chart-element';


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
        if (typeof this.team !== 'undefined') {
            const elem = this.generateChartElement(this.team.name);
            const unassignedElem = this.generateChartElement(this.UNASSIGNED_ACCOUNT_ID);
            for (const c of this.team.collaborators) {
                if (c.accountId !== this.UNASSIGNED_ACCOUNT_ID){
                    this.updateChartElement(c, elem);
                }else{
                    this.updateChartElement(c, unassignedElem);
                }
            }
            this.pushElement(elem);
            this.pushElement(unassignedElem);
        }
    }

    generateChartElement(nameAttribute: string): ChartElement{
        return {
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

    updateChartElement(c: Collaborator, elem: ChartElement): void{
        elem.aQualifierBacAffinnage += c.spAqualifier + c.spBacAffinage;
        elem.aFaire += c.spAfaire;
        elem.enAttente += c.spEnAttente;
        elem.refuseEnRecette += c.spRefuseEnRecette;
        elem.enCoursDevTermineTestCroise += c.spEncours + c.spDevTermine + c.spTestCroise;
        elem.aLivrer += c.spAlivrer;
        elem.aTester += c.spATester;
        elem.valideEnRecetteLivreTermine += c.spValideEnRecette + c.spLivre + c.spTermine;
    }
}
