import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkippedComponent } from './skipped.component';

describe('SkippedComponent', () => {
  let component: SkippedComponent;
  let fixture: ComponentFixture<SkippedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkippedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkippedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
