import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamPieChartComponent } from './team-pie-chart.component';

describe('TeamPieChartComponent', () => {
  let component: TeamPieChartComponent;
  let fixture: ComponentFixture<TeamPieChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamPieChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
