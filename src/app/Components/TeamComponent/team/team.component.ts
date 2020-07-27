import {Component, OnInit} from '@angular/core';
import {Sprint} from '../../../Model/sprint';
import {SprintService} from '../../../Service/sprint.service';
import {Router} from '@angular/router';
import {Team} from '../../../Model/team';
import {RetrospectiveService} from '../../../Service/retrospective.service';
import {Retrospective} from '../../../Model/retrospective';
import {AnonymCollaborator} from '../../../Model/anonym-collaborator';

@Component({
    selector: 'app-team',
    templateUrl: './team.component.html',
    styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
    sprints: Sprint[];
    sprint: Sprint;
    anonymNames: AnonymCollaborator[] = [];
    retrospective: Retrospective; // Pour l'instant on ne récupère que celui de l'équipe alpha à MAJ
    team: Team;
    nbSpDoneTotalTeam = 0;
    nbSpTotalTeam = 0;
    nbSpEnCoursDevTermine = 0;
    nbSpATester = 0;
    teamName = this.router.url.substring(this.router.url.lastIndexOf('/') + 1, this.router.url.length);

    constructor(private retrospectiveService: RetrospectiveService, private sprintService: SprintService, private router: Router) {
    }

    ngOnInit(): void {
        this.sprintService.getSprint().subscribe(data => {
            this.sprints = data;
            console.log(this.sprints);
            for (const s of this.sprints) {
                if (s.team.name === this.teamName) {
                    this.team = s.team;
                    this.sprint = s;
                }
            }
            let i = 1;
            for (const c of this.team.collaborators) {
                const anonym: AnonymCollaborator = {
                    key: 'Dev ' + i,
                    value: c.getFullName(),
                };
                this.anonymNames.push(anonym);
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
