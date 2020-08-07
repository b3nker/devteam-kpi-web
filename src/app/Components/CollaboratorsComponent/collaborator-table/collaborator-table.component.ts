import {Component, Input, OnChanges} from '@angular/core';
import {Collaborator} from '../../../Model/collaborator';
import {TableElement} from '../../../Interface/table-element';
import {TeamService} from '../../../Service/team.service';



@Component({
    selector: 'app-collaborator-table',
    templateUrl: './collaborator-table.component.html',
    styleUrls: ['./collaborator-table.component.css']
})

export class CollaboratorTableComponent implements OnChanges {
    @Input() collaborators: Array<Collaborator>;
    ELEMENT_DATA: TableElement[];
    dataSource: TableElement[];
    SCRUM: string;
    LEAD_DEV: string;
    UNASSIGNED_ACCOUNT_ID: string;
    UNASSIGNED_ROLE;

    constructor(){
        this.ELEMENT_DATA = [];
        this.dataSource = [];
        this.SCRUM = 'scrum';
        this.LEAD_DEV = 'lead dev';
        this.UNASSIGNED_ACCOUNT_ID = 'unassigned';
        this.UNASSIGNED_ROLE = 'none';
    }

    ngOnChanges(): void {
        if (typeof this.collaborators !== 'undefined') {
            for (const c of this.collaborators) {
                if (!c.accountId.includes(this.UNASSIGNED_ACCOUNT_ID)){
                    const velocity = c.getVelocity(this.SCRUM, this.LEAD_DEV);
                    const elem = TeamService.generateTableElement(c, velocity);
                    this.ELEMENT_DATA.push(elem);
                }
            }
            this.dataSource = this.ELEMENT_DATA;
        }
    }
}
