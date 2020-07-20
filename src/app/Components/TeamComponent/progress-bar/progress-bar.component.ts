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
  percentage: number;
  progression: number;
  dateDebut: string;
  dateFin: string;
  dateNow: Date;
  diffTime: number; // Nombre de jours restants ou de dépassement

  ngOnChanges(): void{
    if (typeof this.sprint !== 'undefined'){
      this.percentage = ((this.nbSpDoneTotal) / this.nbSpTotal) * 100;
      this.progression = Math.round(this.percentage * 1e2) / 1e2;
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

  getNumber(now: Date, fin: Date): number{
    let nbWeekendDays = 0;
    const daysBetween = now;
    if (now.getTime() <= fin.getTime()){
      while (daysBetween.getTime() < fin.getTime()){
        if (daysBetween.getDay() % 6 === 0){
          nbWeekendDays++;
        }
        daysBetween.setDate(daysBetween.getDate() + 1);
      }
      return nbWeekendDays;
    }else{
      while (fin.getTime() < daysBetween.getTime()){
        if (fin.getDay() % 6 === 0){
          nbWeekendDays++;
        }
        fin.setDate(fin.getDate() + 1);
      }
      return nbWeekendDays;
    }
  }

}
