import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  constructor() { }

  /**
   * Changes a raw time (in hours) to the following format 'Xj Xh'
   * Return "- Xj Xh" if time is a negative value
   * @param time, a number (in hours)
   * @param nbWorkingHoursDay, number of working hours in a day
   * @return a string with a specific format
   */
  getTimeFormat(time: number, nbWorkingHoursDay: number): string {
    let nbDaysInTime;
    let nbHoursInTime;
    if (time >= 0) {
      nbDaysInTime = Math.floor(time / nbWorkingHoursDay);
      nbHoursInTime = Math.floor(time - nbDaysInTime * nbWorkingHoursDay);
    } else {
      nbDaysInTime = Math.ceil(time / nbWorkingHoursDay);
      nbHoursInTime = Math.abs(Math.ceil(time - nbDaysInTime * nbWorkingHoursDay));
    }

    // Printing

    if (nbDaysInTime === 0) {
      return nbHoursInTime + 'h';
    } else {
      if (nbHoursInTime === 0) {
        return nbDaysInTime + 'j';
      } else {
        return nbDaysInTime + 'j ' + nbHoursInTime + 'h';
      }
    }
  }
}
