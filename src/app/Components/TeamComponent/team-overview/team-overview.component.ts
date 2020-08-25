import {Component, Input, OnChanges} from '@angular/core';
import {Sprint} from '../../../Model/sprint';


@Component({
    selector: 'app-team-overview',
    templateUrl: './team-overview.component.html',
    styleUrls: ['./team-overview.component.css']
})
export class TeamOverviewComponent implements OnChanges {
    @Input() sprint: Sprint;
    progression: number;

    constructor() {
    }

    ngOnChanges(): void {
        if (typeof this.sprint !== 'undefined') {
          this.getProgressBar();

        }
    }

    getProgressBar(): void {
        let nbSpDone = 0;
        let nbSpTotal = 0;
        for (const c of this.sprint.team.collaborators) {
            nbSpDone += c.storyPoints.getSupDevDoneStoryPoints();
            nbSpTotal += c.storyPoints.total;
        }
        const percentage = (nbSpDone / nbSpTotal) * 100;
        this.progression = Math.round(percentage * 1e2) / 1e2;
    }

}
