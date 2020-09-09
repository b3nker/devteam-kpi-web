import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketsEstimationComponent } from './tickets-estimation.component';

describe('TicketsEstimationComponent', () => {
  let component: TicketsEstimationComponent;
  let fixture: ComponentFixture<TicketsEstimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketsEstimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketsEstimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
