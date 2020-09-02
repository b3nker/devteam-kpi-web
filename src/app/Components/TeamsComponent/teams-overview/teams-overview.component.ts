import {Component, Input, OnChanges} from '@angular/core';
import {Sprint} from "../../../Model/sprint";
import {ChartElement} from "../../../Interface/chart-element";
import {TeamService} from "../../../Service/team.service";
import {SprintService} from "../../../Service/sprint.service";
import {Team} from "../../../Model/team";

@Component({
  selector: 'app-teams-overview',
  templateUrl: './teams-overview.component.html',
  styleUrls: ['./teams-overview.component.css']
})
export class TeamsOverviewComponent implements OnChanges {
  @Input() sprints: Sprint[];
  name: string;
  startDate: string;
  endDate: string
  progression: number;
  chartElement: ChartElement;
  totalStoryPoints: number;
  totalTickets: number;
  totalEstimatedHours: number;
  addedTickets: number;
  addedHours: number;
  ticketsLeftToDo: number;
  totalWorkLeft: number;
  totalTicketsUS: number;
  totalTicketsBug: number;
  totalTicketsTask: number;
  addedTotalTicketsBug: number;
  addedTotalTicketsUS: number;
  addedTotalTicketsTask: number;
  gaugeValue: number;
  inAdvance: number;
  SCRUM = 'scrum';
  LEAD_DEV = 'lead dev';

  constructor() {
    this.name= '';
    this.startDate = '';
    this.endDate = '';
    this.progression = 0;
    this.totalStoryPoints = 0;
    this.totalTickets = 0;
    this.totalEstimatedHours = 0;
    this.addedTickets = 0;
    this.addedHours = 0;
    this.ticketsLeftToDo = 0;
    this.totalWorkLeft = 0;
    this.totalTicketsUS = 0;
    this.totalTicketsBug = 0;
    this.totalTicketsTask = 0;
    this.addedTotalTicketsBug = 0;
    this.addedTotalTicketsUS = 0;
    this.addedTotalTicketsTask = 0;
    this.gaugeValue = 0;
    this.inAdvance = 0;

  }

  ngOnChanges(): void {
    if (typeof this.sprints !== 'undefined') {
      this.progression = SprintService.getProgressBarPercentageForSprints(this.sprints);
      this.getBootstrapStoryPoints();
      this.getTicketsInfos();
      this.getGaugeValue();
      this.getAddedValue();
      this.getSprintsIdentity();
    }
  }

  getBootstrapStoryPoints(): void {
    this.chartElement = TeamService.generateEmptyChartElement(null);
    for (const s of this.sprints){
      for (const c of s.team.collaborators) {
        TeamService.updateChartElement(c, this.chartElement);
        this.totalStoryPoints += c.storyPoints.total;
      }
    }
  }

  getTicketsInfos(): void {
    let ticketsSupDevDone = 0;
    for (const s of this.sprints){
      for (const c of s.team.collaborators){
        this.totalTickets += c.tickets.total;
        ticketsSupDevDone += c.tickets.getSupDevDoneTickets();
        this.totalEstimatedHours += c.estimatedTime;
        this.totalWorkLeft += c.remainingTime;
        this.totalTicketsBug += c.tickets.ticketsBug;
        this.totalTicketsTask += c.tickets.ticketsTask;
        this.totalTicketsUS += c.tickets.ticketsUS;
      }
    }
    this.ticketsLeftToDo = this.totalTickets - ticketsSupDevDone;
  }

  getGaugeValue(): void {
    let sumRemainingTime = 0;
    let sumTimeLeft = 0;
    let velocity;
    for (const s of this.sprints) {
      for (const c of s.team.collaborators) {
        velocity = c.getVelocity(this.SCRUM, this.LEAD_DEV);
        sumRemainingTime += c.remainingTime;
        sumTimeLeft += c.availableTime * velocity;
      }
    }
    this.inAdvance = Math.round((sumTimeLeft - sumRemainingTime) * 10) / 10;
    this.gaugeValue = Math.floor(( sumTimeLeft / sumRemainingTime ) * 100);
  }

  getAddedValue(): void{
    for(const s of this.sprints){
      this.addedTickets += s.addedTickets.total;
      this.addedHours += s.addedWork;
      this.addedTotalTicketsBug += s.addedTickets.ticketsBug;
      this.addedTotalTicketsTask += s.addedTickets.ticketsTask;
      this.addedTotalTicketsUS += s.addedTickets.ticketsUS;
    }
  }

  getSprintsIdentity(): void{
    this.name = this.sprints[0].name.substr(0,9);
    this.startDate = this.sprints[0].startDate;
    this.endDate = this.sprints[0].endDate;
  }

}
