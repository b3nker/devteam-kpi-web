import {Component, Input, OnChanges} from '@angular/core';
import {Sprint} from '../../../Model/sprint';
import {ChartElement} from '../../../Interface/chart-element';
import {TeamService} from '../../../Service/team.service';


@Component({
    selector: 'app-team-overview',
    templateUrl: './team-overview.component.html',
    styleUrls: ['./team-overview.component.css']
})
export class TeamOverviewComponent implements OnChanges {
    @Input() sprint: Sprint;
    progression: number;
    chartElement: ChartElement;
    totalStoryPoints: number;
    totalTickets: number;

    constructor() {
        this.totalStoryPoints = 0;
        this.totalTickets = 0;
    }

    ngOnChanges(): void {
        if (typeof this.sprint !== 'undefined') {
            console.log(this.sprint.team);
            this.getProgressBar();
            this.getBootstrapStoryPoints();
            this.getTicketsInfos();
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

    getBootstrapStoryPoints(): void {
        this.chartElement = TeamService.generateEmptyChartElement(null);
        for (const c of this.sprint.team.collaborators) {
            TeamService.updateChartElement(c, this.chartElement);
            this.totalStoryPoints += c.storyPoints.total;
        }
    }

    getTicketsInfos(): void {
        for (const c of this.sprint.team.collaborators){
            this.totalTickets += c.tickets.total;
        }
    }

}
