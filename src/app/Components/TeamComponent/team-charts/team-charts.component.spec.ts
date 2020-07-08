import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamChartsComponent } from './team-charts.component';

describe('TeamChartsComponent', () => {
  let component: TeamChartsComponent;
  let fixture: ComponentFixture<TeamChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
