import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsRecapComponent } from './teams-recap.component';

describe('TeamsRecapComponent', () => {
  let component: TeamsRecapComponent;
  let fixture: ComponentFixture<TeamsRecapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamsRecapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsRecapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
