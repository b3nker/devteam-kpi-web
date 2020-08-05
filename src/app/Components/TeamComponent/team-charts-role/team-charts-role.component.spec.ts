import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamChartsRoleComponent } from './team-charts-role.component';

describe('TeamChartsRoleComponent', () => {
  let component: TeamChartsRoleComponent;
  let fixture: ComponentFixture<TeamChartsRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamChartsRoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamChartsRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
