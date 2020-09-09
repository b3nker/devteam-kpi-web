import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Sprint} from '../../../Model/sprint';
import {SprintService} from '../../../Service/sprint.service';
import {Router} from '@angular/router';
import {Team} from '../../../Model/team';
import {RetrospectiveService} from '../../../Service/retrospective.service';
import {Retrospective} from '../../../Model/retrospective';

@Component({
    selector: 'app-team',
    templateUrl: './team.component.html',
    styleUrls: ['./team.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class TeamComponent implements OnInit {
    sprint: Sprint;
    team: Team;
    ROLE_FRONT = 'front';
    ROLE_MIDDLE = 'middle';
    ROLE_TRANSVERSE = 'transverse';
    hasTransverse = false;
    hasMiddle = false;
    hasFront = false;
    retrospective: Retrospective;
    nbSpDoneTotalTeam: number;
    nbSpTotalTeam: number;
    nbSpEnCoursDevTermine: number;
    nbSpATester: number;
    teamName: string;
    teamNameURL: string; // Contains "/teamName"

    constructor(private retrospectiveService: RetrospectiveService, private sprintService: SprintService, private router: Router) {
        this.nbSpDoneTotalTeam = 0;
        this.nbSpTotalTeam = 0;
        this.nbSpEnCoursDevTermine = 0;
        this.nbSpATester = 0;
        this.teamName = this.router.url.substring(this.router.url.lastIndexOf('/') + 1, this.router.url.length);
        this.teamNameURL = '/' + this.teamName;
    }

    ngOnInit(): void {
        this.sprintService.getSprint(this.teamNameURL).subscribe(data => {
            this.sprint = data[0];
            this.team = this.sprint.team;
            let i = 1;
            for (const c of this.team.collaborators) {

                this.nbSpDoneTotalTeam += c.storyPoints.abandonne + c.storyPoints.livre + c.storyPoints.termine
                    + c.storyPoints.valideEnRecette + c.storyPoints.avalider;
                this.nbSpEnCoursDevTermine += c.storyPoints.enCours + c.storyPoints.devTermine;
                this.nbSpATester += c.storyPoints.atester;
                this.nbSpTotalTeam += c.storyPoints.total;
                if (c.role.includes(this.ROLE_FRONT)){
                    this.hasFront = true;
                }else if (c.role.includes(this.ROLE_MIDDLE)){
                    this.hasMiddle = true;
                }else if (c.role.includes(this.ROLE_TRANSVERSE)){
                    this.hasTransverse = true;
                }
                i++;
            }
        });
        this.retrospectiveService.getRetrospectives().subscribe(data => {
            for (const r of data) {
                if (r.teamName === this.teamName) {
                    this.retrospective = r;
                }
            }
        });
    }


}
