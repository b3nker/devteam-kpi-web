import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamChartsFrontComponent } from './team-charts-front.component';

describe('TeamChartsFrontComponent', () => {
  let component: TeamChartsFrontComponent;
  let fixture: ComponentFixture<TeamChartsFrontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamChartsFrontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamChartsFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
