import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelTrackingComponent } from './fuel-tracking.component';

describe('FuelTrackingComponent', () => {
  let component: FuelTrackingComponent;
  let fixture: ComponentFixture<FuelTrackingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FuelTrackingComponent]
    });
    fixture = TestBed.createComponent(FuelTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
