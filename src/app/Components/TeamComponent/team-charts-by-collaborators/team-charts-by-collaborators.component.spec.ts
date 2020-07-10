import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamChartsByCollaboratorsComponent } from './team-charts-by-collaborators.component';

describe('TeamChartsByCollaboratorsComponent', () => {
  let component: TeamChartsByCollaboratorsComponent;
  let fixture: ComponentFixture<TeamChartsByCollaboratorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamChartsByCollaboratorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamChartsByCollaboratorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
