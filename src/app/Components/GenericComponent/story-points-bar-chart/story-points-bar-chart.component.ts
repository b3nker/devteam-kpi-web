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

  totalStoryPoints(): number{
    let total = 0;
    for (let i = 0; i < this.spValideEnRecetteLivreTermine.length; ++i) {
      total += this.spAqualifierBacAffinnage[i];
      total += this.spAfaire[i];
      total += this.spEnAttente[i];
      total += this.spRefuseEnRecette[i];
      total += this.spEncoursDevTermineTestCroise[i];
      total += this.spAlivrer[i];
      total += this.spATester[i];
      total += this.spValideEnRecetteLivreTermine[i];
    }
    return total;
  }


}
