import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnChanges {
  @Input() totalTime: number;
  @Input() timeLeft: number;
  hoursInWorkingDay = 8;
  nbDaysLeft: number;
  percentage: number;
  ngOnChanges(): void{
    this.percentage = (this.totalTime - this.timeLeft) / this.totalTime;
    this.percentage = Math.round(this.percentage * 1000) / 1000;
    this.nbDaysLeft = this.timeLeft / this.hoursInWorkingDay;
  }

}
