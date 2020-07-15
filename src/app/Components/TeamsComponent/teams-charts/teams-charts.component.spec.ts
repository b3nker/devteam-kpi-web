import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsChartsComponent } from './teams-charts.component';

describe('TeamsChartsComponent', () => {
  let component: TeamsChartsComponent;
  let fixture: ComponentFixture<TeamsChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamsChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
