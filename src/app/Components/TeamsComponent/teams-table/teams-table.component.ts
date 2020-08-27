import {Component, Input, OnChanges} from '@angular/core';
import {Team} from '../../../Model/team';
import {Sprint} from '../../../Model/sprint';
import {TableElement} from '../../../Interface/table-element';
import {TeamService} from '../../../Service/team.service';


@Component({
    selector: 'app-teams-table',
    templateUrl: './teams-table.component.html',
    styleUrls: ['./teams-table.component.css']
})
export class TeamsTableComponent implements OnChanges {
    @Input() teams: Team [];
    @Input() sprints: Sprint[];
    ELEMENT_DATA: TableElement[];
    dataSource: TableElement[];
    SCRUM: string;
    LEAD_DEV: string;
    UNASSIGNED_ROLE: string;

    constructor(){
        this.UNASSIGNED_ROLE = 'team';
        this.SCRUM = 'scrum';
        this.LEAD_DEV = 'lead dev';
        this.ELEMENT_DATA = [];
        this.dataSource = [];
    }

    ngOnChanges(): void {
        if (typeof this.teams !== 'undefined' && typeof this.sprints !== 'undefined' ) {
            const total: TableElement = {
                name: 'Total',
                devTime: 0,
                allocatedTime: 0,
                consumedTime: 0,
                leftToDo: 0,
                tickets: 0,
                ticketsDone: 0,
                availableTime: 0,
                runDays: 0,
                ceremonyDays: 0,
                role: 'none',
                url: new Array<string>(),
                _availableTime: null,
                _devTime: null,
            };
            for (const t of this.teams) {
                const row = TeamService.generateEmptyTableElement(t.name, this.UNASSIGNED_ROLE);
                for (const c of t.collaborators) {
                    const velocity = c.getVelocity(this.SCRUM, this.LEAD_DEV);
                    TeamService.updateTableElement(c, row, velocity);
                    TeamService.updateTableElement(c, total, velocity);
                }
                this.ELEMENT_DATA.push(row);
            }
            this.ELEMENT_DATA.push(total);
            this.dataSource = this.ELEMENT_DATA;
        }
    }


}
