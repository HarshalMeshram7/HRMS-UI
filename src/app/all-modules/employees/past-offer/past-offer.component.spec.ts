import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastOfferComponent } from './past-offer.component';

describe('PastOfferComponent', () => {
  let component: PastOfferComponent;
  let fixture: ComponentFixture<PastOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastOfferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PastOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
