import {Component, Input, OnInit} from '@angular/core';
import {ChartElement} from "../../../Interface/chart-element";
import {TimeService} from "../../../Service/time.service";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  @Input() name: string;
  @Input() startDate: string;
  @Input() endDate: string;
  @Input() progression: number;
  @Input() chartElement: ChartElement;
  @Input() totalStoryPoints: number;
  @Input() totalTickets: number;
  @Input() totalEstimatedHours: number;
  @Input() addedTickets: number;
  @Input() addedHours: number;
  @Input() ticketsLeftToDo;
  @Input() totalWorkLeft: number;
  @Input() totalTicketsUS: number;
  @Input() totalTicketsTask: number;
  @Input() totalTicketsBug: number;
  @Input() addedTotalTicketsBug: number;
  @Input() addedTotalTicketsUS: number;
  @Input() addedTotalTicketsTask: number;
  @Input() gaugeValue: number;
  @Input() inAdvance: number;

  timeService: TimeService
  WORKING_HOURS_PER_DAY = 8;
  message: string;

  constructor() {
    this.timeService = new TimeService()
    this.message = '';
  }

  ngOnInit(): void {
  }

}
