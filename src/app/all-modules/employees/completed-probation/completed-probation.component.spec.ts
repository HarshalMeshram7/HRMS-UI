import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedProbationComponent } from './completed-probation.component';

describe('CompletedProbationComponent', () => {
  let component: CompletedProbationComponent;
  let fixture: ComponentFixture<CompletedProbationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompletedProbationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedProbationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
