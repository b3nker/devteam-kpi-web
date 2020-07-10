import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import {Color, Label} from 'ng2-charts';
import {TeamService} from '../../../Service/team.service';
import {Router} from '@angular/router';
import {Team} from '../../../Model/team';

@Component({
  selector: 'app-team-charts',
  templateUrl: './team-charts.component.html',
  styleUrls: ['./team-charts.component.css']
})
export class TeamChartsComponent implements OnChanges {
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
      const elem: any = {
        name: this.team.name,
        toDo: 0,
        inProgress: 0,
        done: 0
      };
      const front: any = {
        name: 'front',
        toDo: 0,
        inProgress: 0,
        done: 0
      };
      const middle: any = {
        name: 'middle',
        toDo: 0,
        inProgress: 0,
        done: 0
      };
      for (const c of this.team.collaborators) {
        if (c.getFullName().includes('Non Assigné')){
          continue;
        }else{
          elem.toDo += c.spToDo;
          elem.inProgress += c.spInProgress;
          elem.done += c.spDone;
          if (c.role === 'front'){
            front.toDo += c.spToDo;
            front.inProgress += c.spInProgress;
            front.done += c.spDone;
          }else if (c.role === 'middle'){
            middle.toDo += c.spToDo;
            middle.inProgress += c.spInProgress;
            middle.done += c.spDone;
          }
        }
      }
      this.names.push(elem.name, front.name, middle.name);
      this.spDone.push(elem.done, front.done, middle.done);
      this.spToDo.push(elem.toDo, front.toDo, middle.toDo);
      this.spInProgress.push(elem.inProgress, front.inProgress, middle.inProgress);
    }
  }

}
