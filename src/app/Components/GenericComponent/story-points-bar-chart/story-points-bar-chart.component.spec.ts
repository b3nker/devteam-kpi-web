import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryPointsBarChartComponent } from './story-points-bar-chart.component';

describe('StoryPointsBarChartComponent', () => {
  let component: StoryPointsBarChartComponent;
  let fixture: ComponentFixture<StoryPointsBarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryPointsBarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryPointsBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
