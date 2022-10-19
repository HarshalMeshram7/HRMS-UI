import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProbationPolicyComponent } from './probation-policy.component';

describe('ProbationPolicyComponent', () => {
  let component: ProbationPolicyComponent;
  let fixture: ComponentFixture<ProbationPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProbationPolicyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProbationPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
