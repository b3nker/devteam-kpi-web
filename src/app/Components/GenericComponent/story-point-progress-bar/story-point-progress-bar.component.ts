import {Component, Input, OnInit} from '@angular/core';
import {ChartElement} from '../../../Interface/chart-element';

@Component({
  selector: 'app-story-point-progress-bar',
  templateUrl: './story-point-progress-bar.component.html',
  styleUrls: ['./story-point-progress-bar.component.css']
})
export class StoryPointProgressBarComponent implements OnInit {
  @Input() totalStoryPoints: number;
  @Input() chartElement: ChartElement;
  constructor() { }

  ngOnInit(): void {
  }

}
