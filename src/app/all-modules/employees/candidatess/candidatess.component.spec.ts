import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatessComponent } from './candidatess.component';

describe('CandidatessComponent', () => {
  let component: CandidatessComponent;
  let fixture: ComponentFixture<CandidatessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
