import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamRetrospectiveBarChartComponent } from './team-retrospective-bar-chart.component';

describe('TeamRetrospectiveBarChartComponent', () => {
  let component: TeamRetrospectiveBarChartComponent;
  let fixture: ComponentFixture<TeamRetrospectiveBarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamRetrospectiveBarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamRetrospectiveBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
