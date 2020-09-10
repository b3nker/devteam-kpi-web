import {Component, Input, OnChanges} from '@angular/core';
import {Team} from '../../../Model/team';

@Component({
    selector: 'app-team-tickets',
    templateUrl: './team-tickets.component.html',
    styleUrls: ['./team-tickets.component.css']
})
export class TeamTicketsComponent implements OnChanges {
    @Input() team: Team;
    supDevDoneTickets = 0;
    underEstimatedTickets = 0;
    overEstimatedTickets = 0;

    constructor() {
    }

    ngOnChanges(): void {
        if (typeof this.team !== 'undefined') {
            this.resetValues();
            for (const c of this.team.collaborators) {
                this.supDevDoneTickets += c.tickets.getSupDevDoneTickets();
                this.underEstimatedTickets += c.tickets.underEstimated;
                this.overEstimatedTickets += c.tickets.overEstimated;
            }
        }
    }

    resetValues(): void {
        this.supDevDoneTickets = 0;
        this.underEstimatedTickets = 0;
        this.overEstimatedTickets = 0;
    }
}
