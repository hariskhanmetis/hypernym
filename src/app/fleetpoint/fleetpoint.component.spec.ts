import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FleetpointComponent } from './fleetpoint.component';

describe('FleetpointComponent', () => {
  let component: FleetpointComponent;
  let fixture: ComponentFixture<FleetpointComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FleetpointComponent]
    });
    fixture = TestBed.createComponent(FleetpointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
