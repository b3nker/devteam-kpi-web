import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsTicketsComponent } from './teams-tickets.component';

describe('TeamsTicketsComponent', () => {
  let component: TeamsTicketsComponent;
  let fixture: ComponentFixture<TeamsTicketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamsTicketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
