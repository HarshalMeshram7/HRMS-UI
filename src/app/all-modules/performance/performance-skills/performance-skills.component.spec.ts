import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceSkillsComponent } from './performance-skills.component';

describe('PerformanceSkillsComponent', () => {
  let component: PerformanceSkillsComponent;
  let fixture: ComponentFixture<PerformanceSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerformanceSkillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformanceSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
