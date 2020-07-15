import {Component, Input, OnChanges} from '@angular/core';
import {Team} from '../../../Model/team';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import {Color, Label} from 'ng2-charts';

@Component({
    selector: 'app-team-charts-by-collaborators',
    templateUrl: './team-charts-by-collaborators.component.html',
    styleUrls: ['./team-charts-by-collaborators.component.css']
})
export class TeamChartsByCollaboratorsComponent implements OnChanges {
    @Input() team: Team;
    private namesFront: Array<string> = [];
    private spDoneFront: Array<number> = [];
    private spToDoFront: Array<number> = [];
    private spDevDoneFront: Array<number> = [];
    private spInProgressFront: Array<number> = [];

    private namesMiddle: Array<string> = [];
    private spDoneMiddle: Array<number> = [];
    private spToDoMiddle: Array<number> = [];
    private spDevDoneMiddle: Array<number> = [];
    private spInProgressMiddle: Array<number> = [];
    public barChartOptionsFront: ChartOptions = {
        title: {
            text: 'Répartitions des story points pour le front, par collaborateur',
            display: true
        },
        responsive: true,
    };
    public barChartOptionsMiddle: ChartOptions = {
        title: {
            text: 'Répartitions des story points pour le middle, par collaborateur',
            display: true
        },
        responsive: true,
    };
    public barChartLabelsFront: Label[] = this.namesFront; // Collaborators
    public barChartLabelsMiddle: Label[] = this.namesMiddle; // Collaborators

    public barChartType: ChartType = 'horizontalBar';
    public barChartLegend = true;
    public barChartPlugins = [];
    public barChartDataFront: ChartDataSets[] = [
        {data: this.spToDoFront, label: 'Story Points To Do', stack: 'a'},
        {data: this.spInProgressFront, label: 'Story Points In Progress', stack: 'a'},
        {data: this.spDevDoneFront, label: 'Story Points Dev Done', stack: 'a'},
        {data: this.spDoneFront, label: 'Story Points Done', stack: 'a'}
    ];
    public barChartDataMiddle: ChartDataSets[] = [
        {data: this.spToDoMiddle, label: 'Story Points To Do', stack: 'a'},
        {data: this.spInProgressMiddle, label: 'Story Points In Progress', stack: 'a'},
        {data: this.spDevDoneMiddle, label: 'Story Points Dev Done', stack: 'a'},
        {data: this.spDoneMiddle, label: 'Story Points Done', stack: 'a'}
    ];
    public barChartColors: Color[] = [
        {backgroundColor: '#DCDCDC'},
        {backgroundColor: '#59ABE3'},
        {backgroundColor: '#26A65B'}
    ];

    ngOnChanges(): void {
        if (typeof this.team !== 'undefined') {
            for (const c of this.team.collaborators) {
                if (!c.getFullName().includes('Non Assigné')) {
                    const spDone = c.spAbandonne + c.spLivre + c.spTermine + c.spValideEnRecette + c.spAvalider;
                    const spInProgress = c.spEncours + c.spDevTermine + c.spRefuseEnRecette + c.spEnAttente;
                    const spDevDone = c.spATester + c.spAlivrer;
                    const spToDo = c.spAqualifier + c.spBacAffinage + c.spAfaire;
                    const elem: any = {
                        name: c.getFullName(),
                        toDo: spToDo,
                        inProgress: spInProgress,
                        devDone: spDevDone,
                        done: spDone,
                        role: c.role
                    };
                    if (elem.role.includes('front')) {
                        this.namesFront.push(elem.name);
                        this.spDoneFront.push(elem.done);
                        this.spDevDoneFront.push(elem.devDone);
                        this.spToDoFront.push(elem.toDo);
                        this.spInProgressFront.push(elem.inProgress);
                    } else if (elem.role.includes('middle')) {
                        this.namesMiddle.push(elem.name);
                        this.spDoneMiddle.push(elem.done);
                        this.spDevDoneMiddle.push(elem.devDone);
                        this.spToDoMiddle.push(elem.toDo);
                        this.spInProgressMiddle.push(elem.inProgress);
                    }
                }
            }
        }
    }
}
