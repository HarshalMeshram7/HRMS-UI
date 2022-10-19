import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationInProgressComponent } from './evaluation-in-progress.component';

describe('EvaluationInProgressComponent', () => {
  let component: EvaluationInProgressComponent;
  let fixture: ComponentFixture<EvaluationInProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluationInProgressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluationInProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
