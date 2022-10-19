import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InPobationComponent } from './in-pobation.component';

describe('InPobationComponent', () => {
  let component: InPobationComponent;
  let fixture: ComponentFixture<InPobationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InPobationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InPobationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
