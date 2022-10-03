import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSeriesComponent } from './employee-series.component';

describe('EmployeeSeriesComponent', () => {
  let component: EmployeeSeriesComponent;
  let fixture: ComponentFixture<EmployeeSeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeSeriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
