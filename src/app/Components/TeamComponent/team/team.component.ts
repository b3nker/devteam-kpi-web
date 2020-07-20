import { Component, OnInit } from '@angular/core';
import {Sprint} from '../../../Model/sprint';
import {SprintService} from '../../../Service/sprint.service';
import {Router} from '@angular/router';
import {Team} from '../../../Model/team';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  sprint: Sprint;
  team: Team;
  nbSpDoneTotalTeam = 0;
  nbSpTotalTeam = 0;
  nbSpEnCoursDevTermine = 0;
  nbSpATester = 0;

  teamName = this.router.url.substring(this.router.url.lastIndexOf('/') + 1, this.router.url.length);
  constructor(private sprintService: SprintService, private router: Router){
  }
  ngOnInit(): void {
    this.sprintService.getSprint().subscribe(data => {
      this.sprint = data[0];
      console.log(this.sprint);
      for (const t of this.sprint.teams) {
        if (t.name === this.teamName) {
          this.team = t;
        }
      }
      for (const c of this.team.collaborators){
        this.nbSpDoneTotalTeam += c.spAbandonne + c.spLivre + c.spTermine + c.spValideEnRecette + c.spAvalider;
        this.nbSpEnCoursDevTermine += c.spEncours + c.spDevTermine;
        this.nbSpATester += c.spATester;
        this.nbSpTotalTeam += c.spTotal;
      }
    });
  }

}
