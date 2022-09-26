import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceMeetingComponent } from './performance-meeting.component';

describe('PerformanceMeetingComponent', () => {
  let component: PerformanceMeetingComponent;
  let fixture: ComponentFixture<PerformanceMeetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerformanceMeetingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformanceMeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
