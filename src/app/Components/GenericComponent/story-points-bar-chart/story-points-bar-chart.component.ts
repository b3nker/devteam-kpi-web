import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-story-points-bar-chart',
  templateUrl: './story-points-bar-chart.component.html',
  styleUrls: ['./story-points-bar-chart.component.css']
})
export class StoryPointsBarChartComponent implements OnInit {
  @Input() names: Array<string>;
  @Input() spAqualifierBacAffinnage: Array<number>;
  @Input() spAfaire: Array<number>;
  @Input() spEnAttente: Array<number>;
  @Input() spRefuseEnRecette: Array<number>;
  @Input() spEncoursDevTermineTestCroise: Array<number>;
  @Input() spAlivrer: Array<number>;
  @Input() spATester: Array<number>;
  @Input() spValideEnRecetteLivreTermine: Array<number>;

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Returns total number of story points for given index in lists of story points.
   * @param index, index in lists.
   */
  totalStoryPointsByIndex(index: number): number{
    return this.spAqualifierBacAffinnage[index]
        + this.spAfaire[index]
        + this.spEnAttente[index]
        + this.spRefuseEnRecette[index]
        + this.spEncoursDevTermineTestCroise[index]
        + this.spAlivrer[index]
        + this.spATester[index]
        + this.spValideEnRecetteLivreTermine[index];
  }

}
