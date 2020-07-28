import {Component, OnChanges, OnInit} from '@angular/core';
import {SprintService} from '../../Service/sprint.service';
import {Sprint} from '../../Model/sprint';

@Component({
    selector: 'app-welcome-page',
    templateUrl: './welcome-page.component.html',
    styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {
    sprints: Sprint[];
    nbTeams: number;

    constructor(private sprintService: SprintService) {
        this.sprints = [];
    }
    ngOnInit(): void {
        if (typeof this.sprints !== 'undefined') {
            this.sprintService.getSprints().subscribe(data => {
                this.sprints = data;
                console.log(this.sprints);
                this.nbTeams = this.sprints.length;
            });
        }
    }

}
