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
    totalEstimatedHours: number;
    totalWorkLeft: number;
    ticketsLeftToDo: number;
    gaugeValue: number;
    inAdvance: number;
    SCRUM = 'scrum';
    LEAD_DEV = 'lead dev';
    WORKING_HOURS_PER_DAY = 8;

    constructor() {
        this.totalStoryPoints = 0;
        this.totalTickets = 0;
        this.ticketsLeftToDo = 0;
        this.gaugeValue = 0;
        this.inAdvance = 0;
        this.totalEstimatedHours = 0;
        this.totalWorkLeft = 0;
    }

    ngOnChanges(): void {
        if (typeof this.sprint !== 'undefined') {
            console.log(this.sprint.team);
            this.getProgressBar();
            this.getBootstrapStoryPoints();
            this.getTicketsInfos();
            this.getGaugeValue();
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
        let ticketsSupDevDone = 0;
        for (const c of this.sprint.team.collaborators){
            this.totalTickets += c.tickets.total;
            ticketsSupDevDone += c.tickets.getSupDevDoneTickets();
            this.totalEstimatedHours += c.estimatedTime;
            this.totalWorkLeft += c.remainingTime;
        }
        this.ticketsLeftToDo = this.totalTickets - ticketsSupDevDone;
    }

    getGaugeValue(): void {
        let sumRemainingTime = 0;
        let sumTimeLeft = 0;
        let velocity;
        for (const c of this.sprint.team.collaborators) {
            velocity = c.getVelocity(this.SCRUM, this.LEAD_DEV);
            sumRemainingTime += c.remainingTime;
            sumTimeLeft += c.availableTime * velocity;
        }
        this.inAdvance = Math.round((sumTimeLeft - sumRemainingTime) * 10) / 10;
        this.gaugeValue = Math.floor(( sumTimeLeft / sumRemainingTime ) * 100);
    }
}
