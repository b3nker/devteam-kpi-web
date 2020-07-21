import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamRetrospectiveLineChartComponent } from './team-retrospective-line-chart.component';

describe('TeamRetrospectiveLineChartComponent', () => {
  let component: TeamRetrospectiveLineChartComponent;
  let fixture: ComponentFixture<TeamRetrospectiveLineChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamRetrospectiveLineChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamRetrospectiveLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
