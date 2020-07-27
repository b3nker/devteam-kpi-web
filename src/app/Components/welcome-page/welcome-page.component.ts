import {Component, OnChanges, OnInit} from '@angular/core';
import {SprintService} from '../../Service/sprint.service';
import {Sprint} from '../../Model/sprint';

@Component({
    selector: 'app-welcome-page',
    templateUrl: './welcome-page.component.html',
    styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnChanges {
    sprints: Sprint[];
    nbTeams: number;

    constructor(private sprintService: SprintService) {
        this.sprintService.getSprint().subscribe(data => {
            this.sprints = data;
            console.log(3);
            console.log(this.sprints);
        });
    }
    ngOnChanges(): void {
        if (typeof this.sprints !== 'undefined') {
            this.nbTeams = this.sprints.length;
        }
    }

}
