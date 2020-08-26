import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryPointProgressBarComponent } from './story-point-progress-bar.component';

describe('StoryPointProgressBarComponent', () => {
  let component: StoryPointProgressBarComponent;
  let fixture: ComponentFixture<StoryPointProgressBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryPointProgressBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryPointProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
