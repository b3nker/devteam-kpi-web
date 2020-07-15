import {Component, Input, OnChanges, } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnChanges {
  @Input() nbSpDoneTotal: number;
  @Input() nbSpTotal: number;
  percentage: number;
  progression: number;
  ngOnChanges(): void{
    this.percentage = ((this.nbSpDoneTotal) / this.nbSpTotal) * 100;
    this.progression = Math.round(this.percentage * 1e2) / 1e2;
    console.log(this.percentage);
  }

}
