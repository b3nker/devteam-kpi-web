import {Component, Input, OnChanges} from '@angular/core';
import {Release} from '../../../Model/release';

export interface ReleaseRow {
  name: string;
  startDate: Date;
  endDate: Date;
  nbOpenDays: number;
  nbWorkingDays: number;
  buildCapacityFront: number;
  buildCapacityMiddle: number;
  buildCapacityTotal: number;
}
@Component({
  selector: 'app-release-table',
  templateUrl: './release-table.component.html',
  styleUrls: ['./release-table.component.css']
})
export class ReleaseTableComponent implements OnChanges {
  @Input() releases: Release[];
  dataSource: ReleaseRow[];
  ELEMENT_DATA: ReleaseRow[];
  displayedColumns: string[];
  displayedTooltip: string[];
  constructor() {
    this.ELEMENT_DATA = [];
    this.dataSource = [];
    this.displayedColumns = [
      'name',
      'startDate',
      'endDate',
      'nbOpenDays',
      'nbWorkingDays',
      'buildCapacityFront',
      'buildCapacityMiddle',
      'buildCapacityTotal'
    ];
    this.displayedTooltip = [
      'Nom de la release',
      'Date de début',
      'Date de fin',
      'Nombre de jours ouvrés',
      'Nombres de jours de travail (pour toutes les équipes)',
      'Capacité de développement front',
      'Capacité de développement middle',
      'Capacité de développement totale'
    ];
  }

  ngOnChanges(): void {
    if (typeof this.releases !== 'undefined'){
      for (const r of this.releases){
        const elem: ReleaseRow = {
          name: r.name,
          startDate: r.startDate,
          endDate: r.endDate,
          nbOpenDays: r.nbOpenDays,
          nbWorkingDays: r.nbWorkingDays,
          buildCapacityFront: r.buildCapacityFront,
          buildCapacityMiddle: r.buildCapacityMiddle,
          buildCapacityTotal: r.buildCapacityTotal
        };
        this.ELEMENT_DATA.push(elem);
      }
      this.dataSource = this.ELEMENT_DATA;
    }
  }



}
