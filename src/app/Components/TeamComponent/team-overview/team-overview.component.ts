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
            this.getProgressBar();
            this.getBootstrapStoryPoints();
            this.getTicketsInfos();
            this.getGaugeValue();
        }
    }

    getProgressBar(): void {
        const dateNow = new Date();
        const dateF = new Date(this.sprint.endDate);
        const dateD = new Date(this.sprint.startDate);
        const diffTime = Math.round((dateF.getTime() - dateNow.getTime()) / (1000 * 3600 * 24)) + 1;
        const nbDaysOff = this.getNumberNotWorkingDays(dateNow, dateF);
        const diffTimeTotal = Math.round((dateF.getTime() - dateD.getTime()) / (1000 * 3600 * 24)) + 1;
        const nbDaysOffTotal = this.getNumberNotWorkingDays(new Date(this.sprint.startDate), dateF);
        if (diffTime < 0 ){
            this.progression = 100;
        }else{
            console.log(diffTime - nbDaysOff);
            console.log(diffTimeTotal - nbDaysOffTotal);
            this.progression = (100 - Math.round(((diffTime - nbDaysOff) / (diffTimeTotal - nbDaysOffTotal) ) * 100 ));
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

    /**
     * Compute the number of weekend days (saturdays and sundays) between two dates
     * @param now, Represent start date
     * @param end, Represent end date
     * @return A number
     */
    getNumberNotWorkingDays(now: Date, end: Date): number{
        let nbWeekendDays = 0;
        const daysBetween = now;
        if (now.getTime() <= end.getTime()){
            while (daysBetween.getTime() < end.getTime()){
                if (daysBetween.getDay() % 6 === 0){
                    nbWeekendDays++;
                }
                daysBetween.setDate(daysBetween.getDate() + 1);
            }
            return nbWeekendDays;
        }else{
            while (end.getTime() < daysBetween.getTime()){
                if (end.getDay() % 6 === 0){
                    nbWeekendDays++;
                }
                end.setDate(end.getDate() + 1);
            }
            return nbWeekendDays;
        }
    }
}
