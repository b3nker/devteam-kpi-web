import {Component, Input, OnChanges} from '@angular/core';
import {Team} from '../../../Model/team';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import {Color, Label} from 'ng2-charts';

@Component({
  selector: 'app-team-charts-by-collaborators',
  templateUrl: './team-charts-by-collaborators.component.html',
  styleUrls: ['./team-charts-by-collaborators.component.css']
})
export class TeamChartsByCollaboratorsComponent implements OnChanges {
  @Input() team: Team;
  private names: Array<string> = [];
  private spDone: Array<number> = [];
  private spToDo: Array<number> = [];
  private spInProgress: Array<number> = [];
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = this.names; // Collaborators
  public barChartType: ChartType = 'horizontalBar';
  public barChartLegend = true;
  public barChartPlugins = [];
  public barChartData: ChartDataSets[] = [
    { data: this.spToDo, label: 'Story Points To Do', stack: 'a' },
    { data: this.spInProgress, label: 'Story Points In Progress', stack: 'a' },
    { data: this.spDone, label: 'Story Points Done', stack: 'a' }
  ];
  public barChartColors: Color[] = [
    { backgroundColor: '#DCDCDC' },
    { backgroundColor: '#59ABE3' },
    { backgroundColor: '#26A65B' }
  ];
  ngOnChanges(): void {
    if (typeof this.team !== 'undefined') {
      for (const c of this.team.collaborators) {
        if (c.getFullName().includes('Non Assigné')){
          continue;
        }else{
          const elem: any = {
            name: c.getFullName(),
            toDo: c.spToDo,
            inProgress: c.spInProgress,
            done: c.spDone
          };
          this.names.push(elem.name);
          this.spDone.push(elem.done);
          this.spToDo.push(elem.toDo);
          this.spInProgress.push(elem.inProgress);
        }
      }
    }
  }
}
