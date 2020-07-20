import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChartBacklogComponent } from './line-chart-backlog.component';

describe('LineChartBacklogComponent', () => {
  let component: LineChartBacklogComponent;
  let fixture: ComponentFixture<LineChartBacklogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineChartBacklogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineChartBacklogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
