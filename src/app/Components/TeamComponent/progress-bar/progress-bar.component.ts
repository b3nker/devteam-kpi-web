import {Component, Input, OnChanges, } from '@angular/core';
import {Sprint} from '../../../Model/sprint';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnChanges {
  @Input() nbSpDoneTotal: number;
  @Input() nbSpTotal: number;
  @Input() nbSpEnCoursDevTermine: number;
  @Input() nbSpATester: number;
  @Input() sprint: Sprint;
  progression: number;
  dateDebut: string; // Sprint's start date
  dateFin: string; // Sprint's end date
  dateNow: Date;
  diffTime: number;

  ngOnChanges(): void{
    if (typeof this.sprint !== 'undefined'){
      const percentage = ((this.nbSpDoneTotal) / this.nbSpTotal) * 100;
      this.progression = Math.round(percentage * 1e2) / 1e2;
      this.dateDebut = this.sprint.startDate;
      this.dateFin = this.sprint.endDate;
      this.dateNow = new Date();
      const dateF = new Date(this.dateFin);
      this.diffTime = Math.round((dateF.getTime() - this.dateNow.getTime()) / (1000 * 3600 * 24));
      const nbDaysOff = this.getNumber(this.dateNow, new Date(this.dateFin));
      if (this.diffTime < 0){
        this.diffTime += nbDaysOff;
      }else{
        this.diffTime -= nbDaysOff;
      }
    }
  }

  /* Method that returns the number of weekend days
   * between two dates
   */
  getNumber(now: Date, end: Date): number{
    let nbWeekendDays = 0;
    const daysBetween = now;
    if (now.getTime() <= end.getTime()){
      while (daysBetween.getTime() < end.getTime()){
        if (daysBetween.getDay() % 6 === 0){
          nbWeekendDays++;
        }
        daysBetween.setDate(daysBetween.getDate() + 1);
      }
      return nbWeekendDays;
    }else{
      while (end.getTime() < daysBetween.getTime()){
        if (end.getDay() % 6 === 0){
          nbWeekendDays++;
        }
        end.setDate(end.getDate() + 1);
      }
      return nbWeekendDays;
    }
  }

}
