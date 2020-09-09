import {Component, Input, OnInit} from '@angular/core';
import {Team} from '../../../Model/team';
import {Config} from '../../../Model/config';
import {TimeService} from '../../../Service/time.service';

@Component({
  selector: 'app-teams-recap',
  templateUrl: './teams-recap.component.html',
  styleUrls: ['./teams-recap.component.css']
})
export class TeamsRecapComponent implements OnInit {
  @Input() teams: Team[];
  timeService: TimeService;
  WORKING_HOURS_PER_DAY = Config.workingHoursPerDay;

  constructor(timeService: TimeService) {
    this.timeService = timeService;
  }
  ngOnInit(): void {
  }


  inAdvance(team: Team): number{
    let sumRemainingTime = 0;
    let sumTimeLeft = 0;
    let velocity;
    for (const c of team.collaborators) {
      velocity = c.getVelocity(Config.scrum, Config.leadDev);
      sumRemainingTime += c.remainingTime;
      sumTimeLeft += c.availableTime * velocity;
    }
    console.log(Math.round((sumTimeLeft - sumRemainingTime) * 10) / 10);
    return Math.round((sumTimeLeft - sumRemainingTime) * 10) / 10;
  }

  gaugeValue(team: Team): number{
    let sumRemainingTime = 0;
    let sumTimeLeft = 0;
    let velocity;
    for (const c of team.collaborators) {
      velocity = c.getVelocity(Config.scrum, Config.leadDev);
      sumRemainingTime += c.remainingTime;
      sumTimeLeft += c.availableTime * velocity;
    }
    if (sumTimeLeft < 0){
      return 0;
    }else{
      return Math.floor(( sumTimeLeft / sumRemainingTime ) * 100);
    }
  }
}
