import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamBootstrapTableComponent } from './team-bootstrap-table.component';

describe('TeamBootstrapTableComponent', () => {
  let component: TeamBootstrapTableComponent;
  let fixture: ComponentFixture<TeamBootstrapTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamBootstrapTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamBootstrapTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
