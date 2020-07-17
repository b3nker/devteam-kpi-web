import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChartBacklogComponent } from './pie-chart-backlog.component';

describe('PieChartBacklogComponent', () => {
  let component: PieChartBacklogComponent;
  let fixture: ComponentFixture<PieChartBacklogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PieChartBacklogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PieChartBacklogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
