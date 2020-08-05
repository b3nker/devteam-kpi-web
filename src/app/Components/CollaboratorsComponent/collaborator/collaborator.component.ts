import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Collaborator} from '../../../Model/collaborator';
import {CollaboratorService} from '../../../Service/collaborator.service';

@Component({
    selector: 'app-collaborator',
    templateUrl: './collaborator.component.html',
    styleUrls: ['./collaborator.component.css']
})
export class CollaboratorComponent implements OnInit {
    collaborators: Array<Collaborator>;

    constructor(private collaboratorService: CollaboratorService, private router: Router) {}

    /* Retrieve data from "api/sprint/all" route using dedicated service.
     * Fetch this data and pass them to child components
     */
    ngOnInit(): void {
        this.collaboratorService.getCollaborators(this.router.url).subscribe(data => {
            this.collaborators = data;
        });
    }
}
