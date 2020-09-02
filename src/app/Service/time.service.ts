import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  constructor() { }

  /**
   * Changes a raw time (in hours) to the following format 'Xj Xh'
   * @param time, a number (in hours)
   * @param nbWorkingHoursDay, number of working hours in a day
   * @return a string with a specific format
   */
  getTimeFormat(time: number, nbWorkingHoursDay: number): string{
    const nbDaysInTime = Math.floor(Math.abs(time) / nbWorkingHoursDay);
    const nbHoursInTime = Math.floor(Math.abs(time) - nbDaysInTime * nbWorkingHoursDay);
    if (nbDaysInTime === 0){
      return nbHoursInTime + 'h';
    }else{
      if (nbHoursInTime === 0){
        return nbDaysInTime + 'j';
      }else{
        return nbDaysInTime + 'j ' + nbHoursInTime + 'h';
      }
    }
  }
}
