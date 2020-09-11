import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tickets-estimation',
  templateUrl: './tickets-estimation.component.html',
  styleUrls: ['./tickets-estimation.component.css']
})
export class TicketsEstimationComponent implements OnInit {
  @Input() supDevDoneTickets: number;
  @Input() underEstimatedTickets: number;
  @Input() overEstimatedTickets: number;

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Returns number of tickets estimated correctly
   */
  wellEstimatedTickets(): number{
    return this.supDevDoneTickets - this.underEstimatedTickets - this.overEstimatedTickets;
  }
}
