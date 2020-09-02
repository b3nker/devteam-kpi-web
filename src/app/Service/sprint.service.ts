import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Sprint} from '../Model/sprint';
import {SprintAdapter} from './adapter/sprint-adapter';

@Injectable({
  providedIn: 'root'
})
export class SprintService {

  private BASE_URL = '/api/sprint';

  constructor(private http: HttpClient, private adapter: SprintAdapter) {
  }

  getSprints(): Observable<Sprint[]> {
    return this.http.get(this.BASE_URL).pipe(
        map((data: any[]) => data.map((item) => this.adapter.adapt(item)))
    );
  }

  getSprint(currentUrl: string): Observable<Sprint[]>{
    return this.http.get(this.BASE_URL + currentUrl).pipe(
        map((data: any) => [data].map((item) => this.adapter.adapt(item)))
    );
  }

  static getProgressBarPercentage(sprint: Sprint): number {
    let progression;
    const dateNow = new Date();
    const dateF = new Date(sprint.endDate);
    const dateD = new Date(sprint.startDate);
    const diffTime = Math.round((dateF.getTime() - dateNow.getTime()) / (1000 * 3600 * 24)) + 1;
    const nbDaysOff = SprintService.getNumberNotWorkingDays(dateNow, dateF);
    const diffTimeTotal = Math.round((dateF.getTime() - dateD.getTime()) / (1000 * 3600 * 24)) + 1;
    const nbDaysOffTotal = SprintService.getNumberNotWorkingDays(new Date(sprint.startDate), dateF);
    if (diffTime < 0 ){
      progression = 100;
    }else{
      progression = (100 - Math.round(((diffTime - nbDaysOff) / (diffTimeTotal - nbDaysOffTotal) ) * 100 ));
    }
    return progression;
  }

  static getProgressBarPercentageForSprints(sprints: Sprint[]): number {
    let progression = 0;
    for(const s of sprints){
      progression += SprintService.getProgressBarPercentage(s);
    }
    progression /= sprints.length;
    return progression;
  }

  /**
   * Compute the number of weekend days (saturdays and sundays) between two dates
   * @param now, Represent start date
   * @param end, Represent end date
   * @return A number
   */
  static getNumberNotWorkingDays(now: Date, end: Date): number{
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
