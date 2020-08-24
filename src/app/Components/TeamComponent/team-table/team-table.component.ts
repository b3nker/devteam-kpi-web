import {Component, Input, OnChanges} from '@angular/core';
import {Team} from '../../../Model/team';
import {TableElement} from '../../../Interface/table-element';
import {TeamService} from '../../../Service/team.service';

@Component({
    selector: 'app-team-table',
    templateUrl: './team-table.component.html',
    styleUrls: ['./team-table.component.css']
})
export class TeamTableComponent implements OnChanges {
    @Input() team: Team;
    ELEMENT_DATA: TableElement[];
    dataSource: TableElement[];
    SCRUM: string;
    LEAD_DEV: string;
    UNASSIGNED_NAME: string;
    UNASSIGNED_ROLE;

    constructor() {
        this.ELEMENT_DATA = [];
        this.dataSource = [];
        this.SCRUM = 'scrum';
        this.LEAD_DEV = 'lead dev';
        this.UNASSIGNED_NAME = 'Non Assigné';
        this.UNASSIGNED_ROLE = 'none';
    }

    ngOnChanges(): void {
        if (typeof this.team !== 'undefined') {
            let unassigned: TableElement = {
                name: this.UNASSIGNED_NAME,
                devTime: null,
                allocatedTime: null,
                consumedTime: null,
                leftToDo: null,
                tickets: 0,
                ticketsDone: 0,
                ticketsDevDone: 0,
                availableTime: null,
                runDays: 0,
                ceremonyDays: 0,
                role: this.UNASSIGNED_ROLE,
                url: '',
                _availableTime: null,
                _devTime: null
            };
            const total: TableElement = {
                name: 'Total',
                devTime: 0,
                allocatedTime: 0,
                consumedTime: 0,
                leftToDo: 0,
                tickets: 0,
                ticketsDone: 0,
                ticketsDevDone: 0,
                availableTime: 0,
                runDays: 0,
                ceremonyDays: 0,
                role: 'none',
                url: '',
                _availableTime: null,
                _devTime: null
            };
            for (const c of this.team.collaborators) {
                console.log(c);
                if (c.getFullName().includes(this.UNASSIGNED_NAME)) {
                    unassigned = {
                        name: c.getFullName(),
                        devTime: null,
                        allocatedTime: c.estimatedTime,
                        consumedTime: c.loggedTime,
                        leftToDo: c.remainingTime,
                        tickets: c.tickets.total,
                        ticketsDone: c.tickets.getDoneTickets(),
                        ticketsDevDone: c.tickets.getSupDevDoneTickets(),
                        availableTime: null,
                        runDays: 0,
                        ceremonyDays: 0,
                        role: this.UNASSIGNED_ROLE,
                        url: '',
                        _availableTime: null,
                        _devTime: null
                    };
                    TeamService.updateTableElement(c, total, 0);
                } else {
                    const velocity = c.getVelocity(this.SCRUM, this.LEAD_DEV);
                    const elem = TeamService.generateTableElement(c, velocity);
                    TeamService.updateTableElement(c, total, velocity);
                    this.ELEMENT_DATA.push(elem);
                }

            }
            this.ELEMENT_DATA.push(unassigned);
            this.ELEMENT_DATA.push(total);
            this.dataSource = this.ELEMENT_DATA;
        }
    }
}
