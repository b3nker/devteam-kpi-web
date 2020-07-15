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
  nbSpDoneTotal = 0;
  nbSpTotal = 0;
  teamName = this.router.url.substring(this.router.url.lastIndexOf('/') + 1, this.router.url.length);
  constructor(private sprintService: SprintService, private router: Router){
  }
  ngOnInit(): void {
    this.sprintService.getSprint().subscribe(data => {
      this.sprint = data[0];
      for (const t of this.sprint.teams) {
        if (t.name === this.teamName) {
          this.team = t;
        }
        for (const c of t.collaborators){
          this.nbSpDoneTotal += c.spAbandonne;
          this.nbSpDoneTotal += c.spLivre;
          this.nbSpDoneTotal += c.spTermine;
          this.nbSpDoneTotal += c.spValideEnRecette;
          this.nbSpDoneTotal += c.spAvalider;
          this.nbSpTotal += c.spTotal;
        }
      }
      console.log(this.nbSpTotal);
    });
  }

}
