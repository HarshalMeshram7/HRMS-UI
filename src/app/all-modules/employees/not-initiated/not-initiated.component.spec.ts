import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotInitiatedComponent } from './not-initiated.component';

describe('NotInitiatedComponent', () => {
  let component: NotInitiatedComponent;
  let fixture: ComponentFixture<NotInitiatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotInitiatedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotInitiatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
