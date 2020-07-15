import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamChartsMiddleComponent } from './team-charts-middle.component';

describe('TeamChartsMiddleComponent', () => {
  let component: TeamChartsMiddleComponent;
  let fixture: ComponentFixture<TeamChartsMiddleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamChartsMiddleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamChartsMiddleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
