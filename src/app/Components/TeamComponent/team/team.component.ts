import {Component, OnInit} from '@angular/core';
import {Sprint} from '../../../Model/sprint';
import {SprintService} from '../../../Service/sprint.service';
import {Router} from '@angular/router';
import {Team} from '../../../Model/team';
import {RetrospectiveService} from '../../../Service/retrospective.service';
import {Retrospective} from '../../../Model/retrospective';

@Component({
    selector: 'app-team',
    templateUrl: './team.component.html',
    styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
    sprint: Sprint;
    team: Team;
    roleFront = 'Front';
    roleMiddle = 'Middle';
    anonymizedNames: Map<string, string>;
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
        this.anonymizedNames = new Map<string, string>();
    }

    ngOnInit(): void {
        this.sprintService.getSprint(this.teamNameURL).subscribe(data => {
            this.sprint = data[0];
            this.team = this.sprint.team;
            let i = 1;
            for (const c of this.team.collaborators) {
                this.anonymizedNames.set(c.accountId, 'Dev ' + i);
                this.nbSpDoneTotalTeam += c.spAbandonne + c.spLivre + c.spTermine + c.spValideEnRecette + c.spAvalider;
                this.nbSpEnCoursDevTermine += c.spEncours + c.spDevTermine;
                this.nbSpATester += c.spATester;
                this.nbSpTotalTeam += c.spTotal;
                i++;
            }
        });
        this.retrospectiveService.getRetrospectives().subscribe(data => {
            const retrospectives = data;
            for (const r of retrospectives) {
                if (r.teamName === this.teamName) {
                    this.retrospective = r;
                }
            }
        });
    }


}
