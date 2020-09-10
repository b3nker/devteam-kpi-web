import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Sprint} from '../../../Model/sprint';
import {SprintService} from '../../../Service/sprint.service';
import {Router} from '@angular/router';
import {Team} from '../../../Model/team';
import {RetrospectiveService} from '../../../Service/retrospective.service';
import {Retrospective} from '../../../Model/retrospective';
import {Config} from '../../../Model/config';
import {Collaborator} from '../../../Model/collaborator';

interface SprintSelector{
    value: Sprint;
    viewValue: string;
}

@Component({
    selector: 'app-team',
    templateUrl: './team.component.html',
    styleUrls: ['./team.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class TeamComponent implements OnInit {
    sprint: Sprint;
    team: Team;
    ROLE_FRONT = Config.roleFront;
    ROLE_MIDDLE = Config.roleMiddle;
    ROLE_TRANSVERSE = Config.roleTransverse;
    hasTransverse = false;
    hasMiddle = false;
    hasFront = false;
    retrospective: Retrospective;
    teamName: string;
    teamNameURL: string; // Contains "/teamName"
    listOfSprints: Sprint[] = [];
    selectedValue: Sprint;
    sprintSelector: SprintSelector[] = [];

    constructor(private retrospectiveService: RetrospectiveService, private sprintService: SprintService, private router: Router) {
        this.teamName = this.router.url.substring(this.router.url.lastIndexOf('/') + 1, this.router.url.length);
        this.teamNameURL = '/' + this.teamName;
        this.loadLast();
    }

    ngOnInit(): void {
        this.setListOfSprints();
    }

    loadLast(): void {
        this.sprintService.getSprint(this.teamNameURL).subscribe(data => {
            this.sprint = data[0];
            this.team = this.sprint.team;
            this.hasRoles(this.team.collaborators);
        });
        this.retrospectiveService.getRetrospectives().subscribe(data => {
            for (const r of data) {
                if (r.teamName === this.teamName) {
                    this.retrospective = r;
                }
            }
        });
    }

    /**
     * Change data with given input variable
     * @param sprint, variable from which we want to print data
     */
    loadData(sprint: Sprint): void{
        this.sprint = sprint;
        this.team = this.sprint.team;
        this.hasRoles(this.team.collaborators);
    }


    setListOfSprints(): void{
        this.sprintService.getAllSprintTeam(this.teamNameURL).subscribe(data => {
            this.listOfSprints = data;
            for (const s of this.listOfSprints){
                this.sprintSelector.push({
                    value: s,
                    viewValue: s.name,
                });
            }
        });
    }

    hasRoles(collaborators: Collaborator[]): void{
        for (const c of collaborators) {
            if (c.role.includes(this.ROLE_FRONT)){
                this.hasFront = true;
            }else if (c.role.includes(this.ROLE_MIDDLE)){
                this.hasMiddle = true;
            }else if (c.role.includes(this.ROLE_TRANSVERSE)){
                this.hasTransverse = true;
            }
        }
    }

    /**
     * Updates sprint, team and retrospective variable depending on selected sprint
     */
    changeSprint(): void{
        if (this.selectedValue === undefined){
           alert('Aucun sprint selectionné');
        }else{
            this.loadData(this.selectedValue);
            alert(this.selectedValue.name + ' selectionné');
            console.log(this.team);
        }
    }


}
