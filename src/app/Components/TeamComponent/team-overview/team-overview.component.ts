import {Component, Input, OnChanges} from '@angular/core';
import {Sprint} from '../../../Model/sprint';
import {ChartElement} from '../../../Interface/chart-element';
import {TeamService} from '../../../Service/team.service';
import {SprintService} from '../../../Service/sprint.service';
import {CommentService} from '../../../Service/comment.service';
import {Config} from '../../../Model/config';


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
    totalTicketsUS: number;
    totalTicketsTask: number;
    totalTicketsBug: number;
    gaugeValue: number;
    inAdvance: number;
    SCRUM = Config.scrum;
    LEAD_DEV = Config.leadDev;
    message = '';

    constructor(private commentService: CommentService) {
    }

    ngOnChanges(): void {
        if (typeof this.sprint !== 'undefined') {
            this.resetValue();
            this.progression = SprintService.getProgressBarPercentage(this.sprint);
            this.getBootstrapStoryPoints();
            this.getTicketsInfos();
            this.getGaugeValue();
            this.commentService.getComment(this.sprint.id).subscribe(data => {
                this.message = data.body.comment;
            });
        }
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
            this.totalTicketsBug += c.tickets.ticketsBug;
            this.totalTicketsTask += c.tickets.ticketsTask;
            this.totalTicketsUS += c.tickets.ticketsUS;
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
        if (sumTimeLeft < 0){
            this.gaugeValue = 0;
        }else{
            this.gaugeValue = Math.floor(( sumTimeLeft / sumRemainingTime ) * 100);
        }
    }

    resetValue(): void{
        this.totalStoryPoints = 0;
        this.totalTickets = 0;
        this.ticketsLeftToDo = 0;
        this.gaugeValue = 0;
        this.inAdvance = 0;
        this.totalEstimatedHours = 0;
        this.totalWorkLeft = 0;
        this.totalTicketsBug = 0;
        this.totalTicketsTask = 0;
        this.totalTicketsUS = 0;
    }
}
